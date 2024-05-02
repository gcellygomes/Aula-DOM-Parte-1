/* 
console.log("Funciona!!!");
window.console.log("Pelo Window");
console.log(window.location.href);
console.log(window.navigator.language);
console.log(window.navigator.platform);
console.log(window.navigator.userAgent);

console.log(window.screen.width);
console.log(window.screen.height); */

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

/*
let listaOrdenada =document.querySelector("listaOrdenada");
*/

console.log(document.querySelectorAll(".ordenada"));
console.log(document.querySelectorAll("#Item01"));

