import './autres/exo2.js';

let ajouter= document.getElementById("exo1-txt");
ajouter.innerHTML= "Mon texte remodifiée";


let selection= document.querySelector('h1')

console.log(selection.classList[0]);
selection.classList.remove("bg-success")
selection.classList.add("bg-warning", "text-dark")
console.log(selection.classList)

