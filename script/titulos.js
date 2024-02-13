// Variable de idioma, por defecto Inglés
var idioma = "en";

let selectorIdioma = document.getElementsByClassName("banderas");

selectorIdioma[0].children[0].addEventListener("click", () => { idioma = "en" });
selectorIdioma[0].children[2].addEventListener("click", () => { idioma = "fr" });
selectorIdioma[0].children[4].addEventListener("click", () => { idioma = "de" });
selectorIdioma[0].children[6].addEventListener("click", () => { idioma = "ja" });

//Titulos

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

let listaTitulos = document.getElementsByClassName("listaTitulos");

let botonTitulo = document.getElementById("botonTitulo");

let contenedorContenido = document.createElement("div");
let contenedor;

let contenidoNombre = document.createElement("a");
let imagenContenido = document.createElement("img");
let contenidoDesc = document.createElement("p");
let contenidoOwnership = document.createElement("p");

window.onload = (function () {
  fetch(`https://ffxivcollect.com/api/titles?language=${idioma}&limit=30`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");
        contenedorContenido.className = "titulo";
        imagenContenido.src = element.icon
        contenidoNombre.href = `https://www.garlandtools.org/db/#achievement/${element.achievement.id}`
        contenidoNombre.target = "_blank"
        contenidoNombre.innerHTML = `${element.achievement.name}`
        contenidoDesc.innerHTML = `♂ ${element.name} / ⧬ ${element.female_name}`
        contenidoOwnership.innerHTML = `Ownership: ${element.owned}`

        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoNombre);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoOwnership);

        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("a");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");
        listaTitulos[0].appendChild(contenedorContenido);

      });
    })
    .catch(error => console.log('error', error));
})

let nombreTitulo = document.getElementById("buscarTituloNombre");
let borrarTitulos = document.getElementsByClassName("titulo");

let arreglar = 0;
//Titulos, botón muestra titulo

botonTitulo.addEventListener("click", function () {
    limpiarLista(borrarTitulos)
    fetch(`https://ffxivcollect.com/api/titles?language=${idioma}&name_${idioma}_or_female_name_${idioma}_cont=${nombreTitulo.value}`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");
        contenedorContenido.className = "titulo";
        imagenContenido.src = element.icon
        contenidoNombre.href = `https://www.garlandtools.org/db/#achievement/${element.achievement.id}`
        contenidoNombre.target = "_blank"
        contenidoNombre.innerHTML = `${element.achievement.name}`
        contenidoDesc.innerHTML = `♂ ${element.name} / ⧬ ${element.female_name}`
        contenidoOwnership.innerHTML = `Ownership: ${element.owned}`

        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoNombre);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoOwnership);

        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("a");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");
        listaTitulos[0].appendChild(contenedorContenido);

      });
    })
    .catch(error => console.log('error', error));
  arreglar = 0;
})







//Funciones

function limpiarLista(lista){
  while (lista.length > 0) {
    lista[0].remove()
  }
}