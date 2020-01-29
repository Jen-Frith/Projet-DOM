let body= document.getElementById("body")
let linkExo3= document.getElementById("linkExo3")

let GO3= () =>{
  let ensemble= document.getElementById("ensemble")
  ensemble.remove()
  // exo1txt.innerHTML= "Salut inconnu" 
  
  // let txtDroite= document.getElementById("txt-droite")
  // // txtDroite.remove()
  // txtDroite.innerHTML += `<input id="prenom" value= ""> + <button id="validation"> OK </button>`
  
}

linkExo3.addEventListener("click", GO3)






let validation= document.getElementById("validation")
console.log(validation)

let GO3bis=() =>{
  let exo1txt= document.getElementById("txt-droite2")
  let exo10txt= document.getElementById("txt-droite")

  let prenom= document.querySelector("input")
  let a= document.createElement("span")
  
  a.innerHTML= prenom.value;
  
  console.log(prenom.value)
  exo1txt.remove()
  exo10txt.appendChild(a)
  prenom.value= ""
  
}
validation.addEventListener("click", GO3bis)

