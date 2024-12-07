// Seleccionamos el elemento con id "titulo"
const titulo = document.getElementById("titulo");

// Seleccionamos el botón con id "cambiartexto"
const boton = document.getElementById("cambiartexto");

// Añadimos un evento al botón para que, al hacer clic, cambie el texto
boton.addEventListener("click", () => {
    titulo.innerText = "!Texto cambiado por JavaScript!";
    titulo.style.color = "blue"; // Cambiar el color del texto
});

// Referencias al input y al botón de actualizar
const entrada = document.getElementById("entradatexto");
const botonActualizar = document.getElementById("actualizartexto");

// Cambiar el texto del título al valor ingresado en el input
botonActualizar.addEventListener("click", () => {
    titulo.innerText = entrada.value;
    titulo.style.color = "#333"; // Volver a color base
    titulo.classList.remove("titulo-impreso"); // Remover estilos de impresión si están
});

// Referencia al botón de imprimir
const botonImprimir = document.getElementById("imprimirtexto");

// Imprimir 5 veces el valor ingresado en el input y colocar el resultado en el input
botonImprimir.addEventListener("click", () => {
    let valor = entrada.value.trim(); // Obtenemos y limpiamos el texto del input
    if (valor !== "") {
        let textoRepetido = valor.repeat(5); // Repetir el texto 5 veces
        titulo.innerText = textoRepetido; // Mostrar el texto repetido en el título
        titulo.classList.add("titulo-impreso"); // Cambiar el estilo del título
        entrada.value = textoRepetido; // Colocar el texto repetido en el input
    } else {
        titulo.innerText = "Por favor, escribe algo en el cuadro de texto";
        titulo.style.color = "red"; // Cambiar a rojo si está vacío
        titulo.classList.remove("titulo-impreso"); // Remover estilos de impresión si están
    }
});