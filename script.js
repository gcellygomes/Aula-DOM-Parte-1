//Primeira parte da aula
/* 
console.log("Funciona!!!");
window.console.log("Pelo Window");
console.log(window.location.href);
console.log(window.navigator.language);
console.log(window.navigator.platform);
console.log(window.navigator.userAgent);
console.log(window.screen.height);

console.log(window.screen.width);
*/
/* 
console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.body.children);

let titulo = document.body.children[0];
console.log(titulo);

let lista = document.body.children[1];
console.log(lista);

console.log(lista.firstChild);
console.log(lista.lastChild);
console.log(lista.parentElement);

console.log(document.getElementById("listinha"));
console.log(document.getElementById("Item 01"));
 */

/*
let listaOrdenada =document.querySelector("listaOrdenada");
*/
//Segunda parte da aula


console.log(document.querySelectorAll(".ordenada"));  
console.log(document.querySelector("#Item01"));

console.log(document.querySelector(".ordenada").matches(".ordenada"));

let lista = document.querySelector(".ordenada");

console.log(lista.matches("listinha"));

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("ordenada"));

let titulo = document.getElementById("titulo");
titulo.innerText = "<i>Mudei</i>";

let logo = document.getElementsByTagName("img") [0];
logo.setAttribute("alt"," logo da ETEAB");
logo.removeAttribute("alt");
console.log(logo.getAttribute("alt"));

titulo.classList.add("vermelho");
titulo.classList.remove("vermelho");

titulo.classList.add("roxo");
titulo.classList.contains("roxo");

titulo.classList.toggle("negrito");
