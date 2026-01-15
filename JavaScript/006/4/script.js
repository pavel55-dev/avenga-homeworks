const h1 = document.getElementById("myTitle");
h1.innerText = "Hello, World!";

const p = document.getElementsByClassName("paragraph")[0];
p.innerText = "This is a simple JavaScript DOM manipulation example.";

const paragraphSecond = document.getElementsByClassName("paragraph second")[0];
paragraphSecond.innerText = "This paragraph has multiple classes.";

const anotherDiv = document.getElementsByClassName("anotherDiv")[0];
const textModifed = anotherDiv.lastElementChild
textModifed.innerText = "The text of this last child element has been modified.";

const thirdDiv = document.querySelectorAll("div")[2];
thirdDiv.querySelector("h1").innerText = "The H1 text has been updated.";
thirdDiv.querySelector("h3").innerText = "The H3 text has been updated.";


