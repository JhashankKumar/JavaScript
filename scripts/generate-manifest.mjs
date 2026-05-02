#!/usr/bin/env node
/**
 * Walks the repo and writes manifest.json for the static site explorer.
 * Run from repo root: node scripts/generate-manifest.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "manifest.json");

const SKIP_DIRS = new Set([
  ".git",
  ".github",
  ".cursor",
  "node_modules",
  "site-explorer",
  "scripts",
]);

const ALLOWED = new Set([".md", ".js", ".html"]);

function isSkippedDir(name) {
  return SKIP_DIRS.has(name);
}

function buildTree(dirAbs, relPosix) {
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
  const dirs = [];
  const files = [];

  for (const ent of entries) {
    if (ent.name.startsWith(".")) {
      if (ent.name === ".nojekyll") continue;
      if (isSkippedDir(ent.name)) continue;
    }
    if (ent.isDirectory()) {
      if (isSkippedDir(ent.name)) continue;
      const childRel = relPosix ? `${relPosix}/${ent.name}` : ent.name;
      dirs.push({
        name: ent.name,
        path: childRel,
        ...buildTree(path.join(dirAbs, ent.name), childRel),
      });
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name).toLowerCase();
      if (!ALLOWED.has(ext)) continue;
      const fileRel = relPosix ? `${relPosix}/${ent.name}` : ent.name;
      files.push({
        name: ent.name,
        path: fileRel.replace(/\\/g, "/"),
        ext: ext.slice(1),
      });
    }
  }

  dirs.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  return { dirs, files };
}

function flattenFiles(node, prefix, acc) {
  const base = prefix ? `${prefix}/` : "";
  for (const f of node.files || []) {
    acc.push({ ...f, path: f.path });
  }
  for (const d of node.dirs || []) {
    flattenFiles(d, d.path, acc);
  }
}

const { dirs, files } = buildTree(ROOT, "");
const tree = { name: ".", path: "", dirs, files };
const flatFiles = [];
flattenFiles(tree, "", flatFiles);

const payload = {
  generatedAt: new Date().toISOString(),
  tree,
  files: flatFiles,
};

fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");
console.log(`Wrote ${flatFiles.length} files to manifest.json`);
