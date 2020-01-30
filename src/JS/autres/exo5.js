let linkExo5= document.getElementById("linkExo5")
let erase= document.getElementById("jespere")
let GO5= () =>{
  let ensemble5= document.querySelector("section")
  ensemble5.remove()
    erase.remove()

}
linkExo5.addEventListener("click", GO5)




let OK= document.getElementById("OK")
let effacer= document.getElementById("effacer")
let effacerTout= document.getElementById("effacerTout")




let GO5a =()=> {
    
    let creation = document.createElement("span") 
    //let creation2= document.createElement("BUTTON") 

        creation.innerHTML =  ` <img src="./aide/img/magie.png" alt="">
        <button onclick= GO5d()> X </button>`;
        //creation2.innerHTML= "x"
        
        listePrenoms.appendChild(creation);
     
    }
    
OK.addEventListener("click", GO5a)



    
let GO5b=()=> {
        listePrenoms.removeChild(listePrenoms.lastChild)
    }

    effacer.addEventListener("click", GO5b)
    
    

    
let GO5c=() =>{
    document.getElementById('listePrenoms').innerHTML = ""
        
}

effacerTout.addEventListener("click", GO5c)


let GO5d=() =>{
    e.currentTarge.remove()
}