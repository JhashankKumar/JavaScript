console.log("Day 18: DOM Manipulations");

// What will we learn today?

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Travarsing/Navigating DOM
// - Mnaipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks

// Creating Elements
{
  const pElem = document.createElement("p");
  pElem.innerText = "This is a text added dynamically.";
  const selectedValue = document.querySelector(".first_p");

  // insertBefore will add the element before the selected element
  // document.body.insertBefore(pElem, selectedValue);

  // appendChild will add the element at the end of the body
  document.body.appendChild(pElem);

  /*
    if both insertBefore and appendChild are used, then the last one will be executed 
    and the element will be added at the end of the body.
    */

  /*
    1. there is no method to add an element before the body, so insertBefore will not 
    work in that case.
    
    2. if the selected element is not present in the DOM, then insertBefore will not work

    3. There is no method like insertAfter, so we can use 
    insertBefore with nextElementSibling to add an element after the selected element.
    */
  console.log(pElem);
}

// Insert Elements
{
  /*
        const span = document.createElement("span");
        span.innerText = "I am a Span";
        const pElem = document.querySelector("p")
        // console.log(pElem.nextElementSibling);
        document.body.insertBefore(span, pElem.nextElementSibling);
    */
}

// Modifying Content

{

    const pElem = document.querySelector("p");

    // innerText will treat the content as text and will not parse it as HTML
    // pElem.innerText = "<u>Hello How</u> are You doing?"

    // innerHTML will treat the content as HTML and will parse it as HTML
    // pElem.innerHTML = "<u>Hello How</u> are You doing?"

    /*
     But innerHTML is not safe to use as it can lead to XSS attacks. 
     So, it is better to use innerText or textContent instead of innerHTML.

     use domPurify library to sanitize the HTML content before using innerHTML.
    */
    const divElem = document.querySelector("div");

    // innerText will return the text content of the element and its children
    // textContent will return the text content of the element and its children, including the hidden elements.
    console.log("Inner Text", divElem.innerText);
    console.log("Text Content", divElem.textContent);

    /*
    difference between innerText and textContent is that innerText will return the 
    text content of the element and its children, but it will not return the text 
    content of the hidden elements. Whereas textContent will return the text content 
    of the element and its children, including the hidden elements.
    
    */
}

// Removing/replacing Elements

{
  
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    // console.log(itemToRemove);
    // list.removeChild(itemToRemove);
    // console.log(list.children)

    /*
     replaceChildren will remove all the children of the element and add the new children to it.
    */
    // const pElem = document.querySelector("p");
    // list.replaceChildren(pElem)

    // const h1Elem = document.querySelector("h1");
    // list.replaceChildren(h1Elem)

    // .remove() method will remove the element from the DOM
    // document.getElementById("removeMe").remove()
    
}

// Read, Write, and Remove Attributes
{
  /*
    const imageElem = document.querySelector("img")

    console.log(imageElem.getAttribute('alt'))

    imageElem.setAttribute("src", "banner.png");
    imageElem.setAttribute("alt", "banner");

    imageElem.removeAttribute("height");

    imageElem.hasAttribute("src") // true
    imageElem.hasAttribute("height") // false
    */
}

// Travarsing/Navigating DOM

{
  // parentElement and parentNode
  //const span = document.getElementById("text");
  // console.log("Parent Element", span.parentElement.parentElement);
  // console.log("Parent Node", span.parentNode.parentNode);
  // childern and childNodes
  // const mainElem = document.getElementById("main-id");
  // console.log("Children", mainElem.children);
  // console.log("Child Node", mainElem.childNodes);
  // console.log("First Child", mainElem.firstChild);
  // console.log("First Child Element", mainElem.firstElementChild);
  // nextSibling
  // nextElementSibling
  // previousSibling
  // previousElementSibling
}

// Mnaipulating Styles
{
  /*const pElem = document.getElementById("p-id");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";
    */
}

// Manipulating Classes
{
  /*
    const mainDivElem = document.getElementById("main-id");

    // console.log(mainDivElem.className)
    // mainDivElem.className = "secondary-class";
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);

    mainDivElem.classList.add("test");

    mainDivElem.classList.remove("layout");

    mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));

    console.log("Does it have main-class?", mainDivElem.classList.contains("main-class"));

    mainDivElem.classList.toggle("test");
    mainDivElem.classList.toggle("test");
    */
}

// Controlling Visibilities
{
  /*
    const mainDivElem = document.getElementById("main-id");
    //mainDivElem.style.display = "block";

    //mainDivElem.style.visibility = "hidden"

    mainDivElem.style.opacity = "1"
    */
}
