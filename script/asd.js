// Variable de idioma, por defecto Inglés
var idioma = "en";

let selectorIdioma = document.getElementsByClassName("banderas");

selectorIdioma[0].children[0].addEventListener("click", () => { idioma = "en" });
selectorIdioma[0].children[2].addEventListener("click", () => { idioma = "fr" });
selectorIdioma[0].children[4].addEventListener("click", () => { idioma = "de" });
selectorIdioma[0].children[6].addEventListener("click", () => { idioma = "ja" });

// Imagen de mi personaje, junto con informacion del mismo, para la pagina inicial

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

let imagen = document.getElementById("coco");
let info = document.getElementById("caracteristicasCoco");



fetch(`https://ffxivcollect.com/api/characters/38104305?language=${idioma}`, requestOptions)
  .then(response => response.json())
  .then(result => imagen.innerHTML = `<img src=${result.portrait}>`)
  .catch(error => console.log('error', error));

fetch(`https://ffxivcollect.com/api/characters/38104305?language=${idioma}`, requestOptions)
  .then(response => response.json())
  .then(result => info.children[0].innerHTML = `My character name is ${result.name} from ${result.server}, in ${result.data_center}. Feel free to reach out to me for any questions`)
  .catch(error => console.log('error', error));

//Logros

let lista = document.getElementsByClassName("lista");

let botonLogro = document.getElementById("botonLogro");

let contenedorContenido = document.createElement("div");
let contenedor;

let imagenContenido = document.createElement("img");
let contenidoNombre = document.createElement("a");
let contenidoDesc = document.createElement("p");
let contenidoOwnership = document.createElement("p");

window.onload = (function () {
  fetch(`https://ffxivcollect.com/api/achievements?language=${idioma}&limit=30`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");
        contenedorContenido.className = "logro";
        imagenContenido.src = element.icon
        contenidoNombre.href = `https://www.garlandtools.org/db/#achievement/${element.id}`
        contenidoNombre.target = "_blank"
        contenidoNombre.innerHTML = element.name
        contenidoDesc.innerHTML = `<p>${element.description}</p>`
        contenidoOwnership.innerHTML = `<p>${element.owned}</p>`

        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoNombre);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoOwnership);

        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("a");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");
        lista[0].appendChild(contenedorContenido);

      });
    })
    .catch(error => console.log('error', error));
})

let nombreLogro = document.getElementById("buscarLogroNombre");
let descripcionLogro = document.getElementById("buscarLogroDesc");
let borrarLogros = document.getElementsByClassName("logro");

let arreglar = 0;
//Logros, botón muestra logro

botonLogro.addEventListener("click", function () {
    limpiarLista(borrarLogros)
    fetch(`https://ffxivcollect.com/api/achievements?name_${idioma}_cont=${nombreLogro.value}&description_${idioma}_cont=${descripcionLogro.value}`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");
        contenedorContenido.className = "logro";
        imagenContenido.src = element.icon
        contenidoNombre.href = `https://www.garlandtools.org/db/#achievement/${element.id}`
        contenidoNombre.target = "_blank"
        contenidoNombre.innerHTML = element.name
        contenidoDesc.innerHTML = `${element.description}`
        contenidoOwnership.innerHTML = `${element.owned}`

        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoNombre);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoOwnership);

        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("a");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");
        lista[0].appendChild(contenedorContenido);
      })
    })
    .catch(error => console.log('error', error));
    arreglar++;
})




//Funciones

function limpiarLista(lista){
  while (lista.length > 0) {
    lista[0].remove()
  }
}