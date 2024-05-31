// Element using DOM

// let msg = document.getElementById("message");
// console.log(msg);

// let btn = document.getElementsByName("language");
// console.log(btn);

// let TagHead = document.getElementsByTagName("h1");
// console.log(TagHead);

// let con = document.getElementById("container");
// let msgs = con.getElementsByClassName("message");
// console.log(msgs);

// let prints = document.querySelector(".message");
//querySelectorAll("div, h1")
// console.log(prints);

// Traversing elements

// let txt = document.querySelector(".text");
// console.log(txt.parentNode);

// let parent = document.querySelector(".title1");
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.childNodes);

// select the next siblings, previous siblings of an element

// let second = document.querySelector(".second");
// console.log(second.previousElementSibling);
// console.log(second.nextElementSibling);

// manipulating elements
// 1) createElement() Method
// let div = document.createElement("div");
// div.innerHTML = "<h3>Welcome to the Saravanan</h3>";

// div.id = "title2";
// div.className = "title2";
// document.body.appendChild(div);
// console.log(div);
// 2) appendChild() Method,

// use appendChild() method to add a node to the end of the list of child nodes of a specified parent node.

// the appendChild() can be used to move an existing child node to the new position within the document.

// let menu = document.getElementById("menu");

// let list = document.createElement("li");
// list.innerHTML = "Contact";

// menu.appendChild(list);

//textContent,
// To get the text content of a node and its descendants, you use the textContent property

// let menu = document.getElementById("menu");

// menu.textContent = "Hello!";
// console.log(menu.textContent);
// console.log(menu.innerText);

// innerHTML

// menu.innerHTML = "<h1>Hello!<h1>";
// menu.textContent = "<h1>Hello!<h1>";

// after Method()

// We can use after() method to insert one or more nodes after the element.

// let menu = document.getElementById("menu");

// syntax after method
// Element.after(node)

// menu.after(str1, str2, ...strN);
