
let colle= document.getElementById("colle")



let myFunction10

window.myFunction10=()=> {
    
    let creation = document.createElement(`p`) 
    //let creation2= document.createElement("BUTTON") 

    creation.className = "bg-light d-flex justify-content-between";

        creation.innerHTML = copie.value +  "<input type=checkbox >";
        //creation2.innerHTML= "x"
        

        colle.appendChild(creation);
        //listePrenoms.appendChild(creation2)
        copie.value= ""
   
        //listePrenoms.addEventListener("click", myFunction3);
    }
    


    
    function myFunction2() {
        listePrenoms.removeChild(listePrenoms.lastChild)
    };
    
    
    function myFunction3() {
        listePrenoms.removeChild(listePrenoms.lastChild)
        
}