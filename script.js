import { barcelona, roma, paris, londres } from './ciudades.js'

// obtener los elementos del DOM 
let enlaces = document.querySelectorAll('a') //lo que hace es seleccionar todos los enlaces
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agregar un evento click a cada enlace
enlaces.forEach(function (enlace) { //enlaces es un iterable, no es un array. Lo que se hace es por cada elemento enlace, se ejecuta la funcion siguiente:
    enlace.addEventListener('click', function () { //esto es un evento pero en js, lo que hace es escuchar el click, es asi como esta escrito, y el segundo parametro es que cuando lo escuche realice la siguiente funcion
        //remover el active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })
        //agregar active al que corresponda
        this.classList.add('active')

        //traer la informacion del objeto correspondiente a la eleccion, segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo

    });


});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

