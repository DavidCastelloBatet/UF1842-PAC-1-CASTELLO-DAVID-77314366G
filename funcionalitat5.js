function seleccionarToT() {
  let seleccio = document.querySelectorAll('[value="False"]');
  for (let i = 0; i < seleccio.length; i++) {
    seleccio[i].checked = "False";
  }
  console.log(seleccio);
}

function esborrarTot() {
  let seleccio = document.querySelectorAll('[value="True"]');
  for (let i = 0; i < seleccio.length; i++) {
    seleccio[i].checked = "True";
  }
  console.log(seleccio);
}
