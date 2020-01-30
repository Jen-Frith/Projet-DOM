let linkExo4= document.getElementById("linkExo4")

let GO4= () =>{
  let ensemble4= document.querySelector("section")
  ensemble4.remove()


}
linkExo4.addEventListener("click", GO4)




let click= document.getElementById("clickPlace")
let GO4bis= () =>{
    
    let a= document.getElementById ("carre")
    a.classList.toggle("d-none")
    
    let b= document.getElementById ("carre2")
    b.classList.toggle("d-none")


}





let compt= 0

let compteur= ()=>{
let spinou= document.createElement("span")  
let compteurs= document.getElementById("compteurs")

//spinou.innerHTML=" " +compt

compteurs.appendChild(spinou)

  //document.getElementById('nb').innerHTML = compt; 
  compt++
  compteurs.innerHTML ="Nombre de clicks " + compt;

}

click.addEventListener("click", GO4bis)
click.addEventListener("click", compteur)




let resetCompt=() =>{
  compt=0
  compteurs.innerHTML ="Nombre de clicks " + compt;
}

compteurs.addEventListener("click", resetCompt)