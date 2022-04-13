//  Aplico estils diversos

document.querySelector("h1").style.fontSize = "30px";
document.querySelector("h1").style.marginBottom = "50px";
document.querySelector("h1").style.textAlign = "center";
// amb el querySelectorAll, obtinc una llista d'elements
// en form de llista de nodes
let parrafos = document.querySelectorAll("p");
console.log(parrafos);
// recorro la llista de nodes per aplicar estils a cada node
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.marginLeft = "50px";
  parrafos[i].style.marginRight = "50px";
  parrafos[i].style.alignContent = "justify";
  parrafos[i].style.fontSize = "25px";
  parrafos[i].style.margin = "30px 50px 30px 50px";
}

// a diferencia dels elements anteriors creo la variable boto per
// poder accedir a les propietats de button (i per no escriure
// tant, no nos engañemos...)
let boto = document.querySelector("button").style;

// situo al boto i li aplico uns estils
// faig el display: none; perqué m'interesa que no
// ocupi espai.
boto.display = "none";
boto.float = "right";
boto.top = "450px";
boto.right = "50px";
boto.border = "none";
boto.backgroundColor = "Transparent";

// creo la funcionalitat del boto, cridada des d'un event onclick
// a l'HTML
function tiraParriba() {
  console.log("apretat tira parriba");
  // literalment, situo l'scroll a la coordenada 0,0 de la finestra.
  window.scrollTo(0, 0);
  console.log("Posicio en pixels: " + window.pageYOffset);
}

// Per obtindre la posicio de l'scroll vertical faig servir
// l'event onscroll per detectar el moviment de l'scroll y
// pageYOffset per obtindre el valor en pixels del desplaçament
// vertical.
window.onscroll = function () {
  // obtenim la posicio vertical i la guardo
  let posicioVertical = window.pageYOffset;
  console.log(`Posicio vertical actual en px: ${posicioVertical}`);
  // comprovo quan la posició del boto, i si esta a 400 o mes px
  // el faig visible, sino continua invisible
  if (posicioVertical >= 400) {
    boto.display = "block";
    // faig posicio sticky perque m'interessa que "em seguixi"
    // quan continuo fent scroll avall
    boto.position = "sticky";
  } else {
    boto.display = "none";
  }
};
