let titulo = document.getElementById("titulo")
console.log(titulo);


let esp = document.getElementsByClassName("esp")
console.log(esp[0]);

let lista = document.getElementsByClassName("ul")
console.log(lista[0]);

let tituloQS = document.querySelector("#titulo");
console.log("Exibindo com Query Selector" + tituloQS.textContent);

let esportesQS = document.querySelector(".esp");
console.log("Exibindo com Query Selector" + esportesQS.textContent);