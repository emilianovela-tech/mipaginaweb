document.addEventListener("DOMContentLoaded", function(){
    const boton= document.getElementById("mi-boton");

    boton.addEventListener("click", function(){
        alert("Has presionado el boton we");
});
});


// GALERÍA
const imagenes = [
    "img/mimesis.jpg",
    "img/aristoteles.jpg",
    "img/platon.jpg"
];

let indiceActual = 0;

const imagenPrincipal = document.getElementById("imagenPrincipal");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

if (imagenPrincipal && anterior && siguiente) {

    function mostrarImagen(indice) {
        imagenPrincipal.src = imagenes[indice];
    }

    siguiente.addEventListener("click", function () {

        indiceActual++;

        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }

        mostrarImagen(indiceActual);

    });

    anterior.addEventListener("click", function () {

        indiceActual--;

        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
        }

        mostrarImagen(indiceActual);

    });

    mostrarImagen(indiceActual);

}