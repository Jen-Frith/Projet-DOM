
let body= document.getElementById("body")
let linkExo2= document.getElementById("linkExo2")
let GO2= () =>{
    let ensemble= document.querySelector("div")
    ensemble.remove()
    body.innerHTML= `<ul class="nav nav-pills nav-justified">
    <li class="nav-item">
      <a class="nav-link active" href="#">Exo 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="GO2()">Exo 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Exo 3</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Exo 4</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Exo 5</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Exo 6</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Exo 7</a>
      </li>
  </ul>


<div class=container> <div class=jumbotron>  <h1 class=display-4>Hello, world!</h1> <p class=lead>Grâce à cette fonctionnalité nous pouvons naviguer sur notre page sans charger notre HTML =).</p> <hr class=my-4>  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>   <a class=btn btn-primary btn-lg href=# role=button>Learn more</a> </div></div>"
`
}

linkExo2.addEventListener ("click", GO2)


