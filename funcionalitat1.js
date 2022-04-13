// A funcionalitat1.html, He creat un formulari tipus select on cada value
// sera un tamany de font i un text on s'aplicara una font de 20px per defecte

// Aplico 20px per defecte al texte
let texte = document.getElementById("textAModificar");
texte.style.fontSize = "20px";
console.log("Font inicial: 20px");

// a partir d'un event onchange que crida funcio, agafare el valor del formulari
// i cambiare el tamany del texte segons seleccio.
function getValorSeleccionat() {
  // aqui agafo el valor seleccionat del formulari
  let tamanyFont = document.getElementById("tamany").value;
  console.log("Font actual: " + tamanyFont);
  // i aqui li aplico la nova font al texte
  texte.style.fontSize = tamanyFont;
}
