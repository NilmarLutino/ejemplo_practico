// Obtener el elemento del párrafo y el botón
var mensaje = document.getElementById("mensaje");
var boton = document.getElementById("boton");

// Definir la función que se ejecuta en respuesta a un clic en el botón
function cambiarMensaje() {
  mensaje.innerHTML = "¡El mensaje ha cambiado!";
}

// Agregar el evento clic al botón y llamar a la función cambiarMensaje
boton.addEventListener("click", cambiarMensaje);
