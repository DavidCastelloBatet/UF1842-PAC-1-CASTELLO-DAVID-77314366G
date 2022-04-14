// prenc com a base https://www.w3schools.com/jsref/prop_radio_checked.asp
// tambe prenc com a base l'html i el CSS facilitat i els hi he
// fet petites modificacions.

// NOTA: M'he donat conte que els dos metodes de la clase son exactament
// iguals excepte per aquest fragment ("[value='True']") i el 'True' del
// checked. He intentat pasar-ho per parametres pero em donava error de
// sintaxis a ("[value='True']"). No he trobat la manera de fer-ho, així que
// ho he deixat amb els dos metode hardcodejats, pero que funciona.

// i a partir d'aqui:

// per la pròpia funcionalitat de l'input type radio,
// quan agrupes amb la mateixa propietat name sols pot seleccionar
// o una opcio o l'altre, però mai les dos

class Seleccio {
  // creo metode que selecciona tots els inputs amb valor
  // True i recorrent el NodeList resultant (seleccio), setejo el checked
  // a True (Rechazar).

  esborrarTot() {
    let seleccio = document.querySelectorAll("[value='True']");
    for (let i = 0; i < seleccio.length; i++) {
      seleccio[i].checked = "True";
    }
    console.log(seleccio);
  }

  // creo metode que selecciona tots els inputs amb valor
  // False i recorrent el NodeList resultant (seleccio), setejo el checked
  // a False (Acceptar).
  seleccionarToT() {
    let seleccio = document.querySelectorAll('[value="False"]');
    for (let i = 0; i < seleccio.length; i++) {
      seleccio[i].checked = "False";
    }
    console.log(seleccio);
  }
}
// instancio la classe
let seleccionar = new Seleccio();

// al html, faig servir dos events:
// un oclick al boto Rechazar Todo, des d'on crido al metode esborrarTot() i
// un altre onclick al boto Aceptar Todo, des d'on crido al metode seleccionarTot()
