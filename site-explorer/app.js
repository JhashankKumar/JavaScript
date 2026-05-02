(function () {
  "use strict";

  function encodePath(relPath) {
    return relPath
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");
  }

  function renderTree(node, container, depth) {
    const ul = document.createElement("ul");
    ul.className = "tree-children";
    if (depth === 0) ul.style.paddingLeft = "0";
    ul.style.borderLeft = depth === 0 ? "none" : null;

    for (const dir of node.dirs || []) {
      const li = document.createElement("li");
      li.className = "tree-item";
      const details = document.createElement("details");
      details.className = "tree-folder";
      if (depth < 2) details.open = true;
      const summary = document.createElement("summary");
      summary.textContent = dir.name;
      details.appendChild(summary);
      const inner = document.createElement("div");
      renderTree(dir, inner, depth + 1);
      details.appendChild(inner);
      li.appendChild(details);
      ul.appendChild(li);
    }

    for (const file of node.files || []) {
      const li = document.createElement("li");
      li.className = "tree-item";
      const el =
        file.ext === "html"
          ? document.createElement("a")
          : document.createElement("button");
      el.className = "file-link";
      el.type = el.tagName === "BUTTON" ? "button" : undefined;
      el.dataset.path = file.path;
      el.dataset.ext = file.ext;
      el.appendChild(document.createTextNode(file.name));
      const extSpan = document.createElement("span");
      extSpan.className = "ext";
      extSpan.textContent = "." + file.ext;
      el.appendChild(extSpan);

      if (file.ext === "html") {
        el.href = encodePath(file.path);
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }

      li.appendChild(el);
      ul.appendChild(li);
    }

    if (node.dirs?.length || node.files?.length) {
      container.appendChild(ul);
    }
  }

  function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = text;
    return d.innerHTML;
  }

  const titleEl = document.getElementById("preview-title");
  const bodyEl = document.getElementById("preview-body");
  const actionsEl = document.getElementById("preview-actions");
  const openTabEl = document.getElementById("open-tab");
  let activeLink = null;

  function setActive(el) {
    if (activeLink) activeLink.classList.remove("is-active");
    activeLink = el;
    if (activeLink) activeLink.classList.add("is-active");
  }

  async function showPreview(path, ext) {
    const encoded = encodePath(path);
    titleEl.textContent = path;
    openTabEl.href = encoded;
    actionsEl.hidden = false;

    bodyEl.innerHTML = '<p class="loading">Loading…</p>';
    let res;
    try {
      res = await fetch(encoded, { cache: "no-cache" });
    } catch (e) {
      bodyEl.innerHTML =
        '<p class="tree-error">Network error while loading the file.</p>';
      return;
    }
    if (!res.ok) {
      bodyEl.innerHTML =
        '<p class="tree-error">Could not load file (HTTP ' +
        res.status +
        ").</p>";
      return;
    }
    const text = await res.text();

    if (ext === "md") {
      const raw =
        typeof marked !== "undefined" && marked.parse
          ? marked.parse(text)
          : "<pre>" + escapeHtml(text) + "</pre>";
      bodyEl.innerHTML = '<article class="md-content">' + raw + "</article>";
      return;
    }

    if (ext === "js") {
      bodyEl.innerHTML =
        "<pre><code>" + escapeHtml(text) + "</code></pre>";
      return;
    }

    bodyEl.innerHTML = "<pre><code>" + escapeHtml(text) + "</code></pre>";
  }

  function onTreeClick(e) {
    const t = e.target.closest(".file-link");
    if (!t || !t.dataset.path) return;
    if (t.tagName !== "BUTTON") return;
    setActive(t);
    showPreview(t.dataset.path, t.dataset.ext);
  }

  const treeRoot = document.getElementById("tree-root");
  const treeError = document.getElementById("tree-error");
  const toggleBtn = document.getElementById("toggle-tree");
  const treeWrap = document.getElementById("tree-wrap");

  toggleBtn.addEventListener("click", function () {
    const collapsed = treeWrap.classList.toggle("collapsed-mobile");
    toggleBtn.setAttribute("aria-expanded", String(!collapsed));
  });

  treeRoot.addEventListener("click", onTreeClick);

  fetch("manifest.json", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      treeRoot.innerHTML = "";
      const inner = document.createElement("div");
      renderTree(data.tree, inner, 0);
      treeRoot.appendChild(inner);
    })
    .catch(function (err) {
      treeError.hidden = false;
      treeError.textContent =
        "Could not load manifest.json. Run node scripts/generate-manifest.mjs and ensure the site is served from the repo root. (" +
        (err && err.message ? err.message : err) +
        ")";
    });
})();
