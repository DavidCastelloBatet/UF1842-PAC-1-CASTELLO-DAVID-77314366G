// He creat un input type image i li poso un event onclick
// per tal de que, quan fagi click al boto, cridi a la funcio
// imprimirPantalla()

function imprimirPantalla() {
  // comprovo que l'onclick funciona
  console.log("pantalla impresa");
  // amb el metode print() de l'objecte window, puc
  // cridar la funcionalitat que obre el "menu" per
  // la impresio per impresora
  window.print();
}
