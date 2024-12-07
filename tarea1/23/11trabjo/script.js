// seleccionamos el elemento del id "titulo"
const titulo= document.getElementById("titulo");

//selecionamos el boton con id "cambiar texto"
const boton = document.getElementById("cambiartexto");

//añadimos un evento al boton para que, al hacer clic cabie el texto
boton.addEventListener("click", ()=> {
    titulo.innerText="!Texto cambiado por Javacript¡";
});

boton.addEventListener("click", ()=> {
    titulo.innerText="!Texto cambiado por JavaScript¡";
    titulo.style.color="blue"; // cambiar color de texto
})

const entrada = document.getElementById("entradatexto");
const botonActualizar=document.getElementById("actualizartexto");

botonActualizar.addEventListener("click",  ()=> {
 titulo.innerText = entrada.value;// cambia el texto al valor del input
});