document.getElementById("footer").style.display = "none";

function mostrarChat() {
  console.log("Obro Chat");
  document.getElementById("footer").style.display = "block";
  document.getElementById("message").style.display = "none";
}

function tancarChat() {
  console.log("Tanco Chat");
  document.getElementById("footer").style.display = "none";
  document.getElementById("message").style.display = "block";
}
