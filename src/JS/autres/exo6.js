let linkExo6= document.getElementById("linkExo6")
let erase3= document.getElementById("espaceCalculette2")
let GO6= () =>{
  //let ensemble6= document.querySelector("section")
 
    erase3.remove()

}
linkExo6.addEventListener("click", GO6)



// EEEEEEXXXXXOOOOOOOO2                                                                                                                            

let chiffre1=document.getElementById("un")
let chiffre2=document.getElementById("deux")
let chiffre3=document.getElementById("trois")
let chiffre4=document.getElementById("quatre")
let chiffre5=document.getElementById("cinq")
let chiffre6=document.getElementById("six")
let chiffre7=document.getElementById("sept")
let chiffre8=document.getElementById("huit")
let chiffre9=document.getElementById("neuf")
let chiffre0=document.getElementById("zero")
let operationAddition=document.getElementById("addition")
let operationMultiplication=document.getElementById("multiplication")
let operationDivision=document.getElementById("division")
let operationSoustraction=document.getElementById("soustraction")
let ecran= document.getElementById("ecran")

//let eraseAll= document.getElementById("eraseAll")




let affichage
window.affichage= (val) =>{ ecran.value+= val}


let fEraseAll
window.fEraseAll=()=>{ecran.value= ""}

// let fEraseLastElement
// window.fEraseLastElement=()=>{ecran.value.last-child.remove()}


let fResultat
window.fResultat=()=>{ 
let contenu = ecran.value 
let tmp = eval(contenu) 
ecran.value = tmp 

let timeErase=()=>
{
  ecran.value= ""
}
setTimeout(timeErase, 3000)


}

