// oculto la part del xat
document.getElementById("footer").style.display = "none";

// Creo una classe Chat amb dos metodes, sense propietats
class Chat {
  // creo metode mostrar chat
  mostrarChat() {
    console.log("Obro Chat");
    document.getElementById("footer").style.display = "block";
    document.getElementById("message").style.display = "none";
  }

  tancarChat() {
    // creo metode ocultar chat
    console.log("Tanco Chat");
    document.getElementById("footer").style.display = "none";
    document.getElementById("message").style.display = "block";
  }
}

// Instancio la classe
const chatSat = new Chat();
// Un cop instanciada, desde un event onclick posat al boto amb
// la imatge de Globus Suport, cridare al metode
// chatSat.mostrarChat(), que mostrara el xat.
// Des d'un altre event onclick, posat a la imatge
// de la creu de tancar, criderare al metode
// chatSat.tancarChat(), per tal de tancar-lo.
