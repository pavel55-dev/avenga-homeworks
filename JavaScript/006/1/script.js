let firstDiv = document.getElementById("first")
let paragraphs = document.getElementsByTagName("p")
let lastDiv = document.getElementsByClassName("thirdDiv")[0]
let selectHeader = lastDiv.children[1]
let selectHeader2 = lastDiv.children[0]

let paragraph = document.getElementsByClassName("paragraph second")[0]
paragraph.innerText = "text"

selectHeader2.innerText = "Hello World"
selectHeader.innerText = "Hello JS"
