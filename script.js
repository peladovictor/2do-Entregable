function mostrarMensaje() {
  alert("Mensaje enviado");
}
document.getElementById("leer-mas-btn").addEventListener("click", function() {
  document.getElementById("advertencia").style.display = "block";
});

document.getElementById("cerrar-btn").addEventListener("click", function() {
  document.getElementById("advertencia").style.display = "none";
});
