// Variable de idioma, por defecto Inglés
var idioma = "en";

let selectorIdioma = document.getElementsByClassName("banderas");

selectorIdioma[0].children[0].addEventListener("click", () => { idioma = "en" });
selectorIdioma[0].children[2].addEventListener("click", () => { idioma = "fr" });
selectorIdioma[0].children[4].addEventListener("click", () => { idioma = "de" });
selectorIdioma[0].children[6].addEventListener("click", () => { idioma = "ja" });

//Spellbook de BLU

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

let listaTitulos = document.getElementsByClassName("listaTitulos");

let botonTitulo = document.getElementById("botonTitulo");

let contenedorContenido = document.createElement("div");
let contenedor;

let numeroSpell = document.createElement("p");
let contenidoNombre = document.createElement("p");
let imagenContenido = document.createElement("img");
let contenidoDesc = document.createElement("p");
let contenidoOwnership = document.createElement("p");

window.onload = (function () {
  fetch(`https://ffxivcollect.com/api/spells?language=${idioma}`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        listaTitulos[0].appendChild(contenedorContenido);
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");

        contenedorContenido.className = "titulo";
        imagenContenido.src = element.icon
        contenidoNombre.innerHTML = `${element.sources[0].text}`
        contenidoDesc.innerHTML = `${element.name}`
        contenidoOwnership.innerHTML = `${element.owned}`
        numeroSpell.innerHTML = `#${element.order}`



        contenedorContenido.appendChild(numeroSpell);
        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoNombre);        
        contenedorContenido.appendChild(contenidoOwnership);

        numeroSpell = document.createElement("p");
        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("p");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");

      });
    })
    .catch(error => console.log('error', error));
})

let nombreTitulo = document.getElementById("buscarTituloNombre");
let borrarTitulos = document.getElementsByClassName("titulo");

let arreglar = 0;

//Spellbook de BLU, botón muestra spell por id

botonTitulo.addEventListener("click", function () {
  limpiarLista(borrarTitulos)
  let intervaloArreglo = setInterval(() => {
    if (arreglar >= 2) {
      clearInterval(intervaloArreglo);
    } else {  
    limpiarLista(borrarTitulos)
    fetch(`https://ffxivcollect.com/api/spells?order_eq=${nombreTitulo.value}&language=${idioma}`, requestOptions)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        listaTitulos[0].appendChild(contenedorContenido);
        contenedor = document.getElementsByClassName("contenedorLogros");
        contenedorContenido = document.createElement("div");
        contenedorContenido.className = "titulo";
        imagenContenido.src = element.icon
        contenidoNombre.innerHTML = `${element.sources[0].text}`
        contenidoDesc.innerHTML = `${element.name}`
        contenidoOwnership.innerHTML = `${element.owned}`
        numeroSpell.innerHTML = `#${element.order}`

        contenedorContenido.appendChild(numeroSpell);
        contenedorContenido.appendChild(imagenContenido);
        contenedorContenido.appendChild(contenidoDesc);
        contenedorContenido.appendChild(contenidoNombre);        
        contenedorContenido.appendChild(contenidoOwnership);

        numeroSpell = document.createElement("p");
        imagenContenido = document.createElement("img");
        contenidoNombre = document.createElement("p");
        contenidoDesc = document.createElement("p");
        contenidoOwnership = document.createElement("p");

      });
    })
    .catch(error => console.log('error', error));
    arreglar++;
  }
  }, 1000);
  arreglar = 0;
})

//Spellbook de BLU, botón muestra spell por nombre

let botonSpell = document.getElementById("botonSpell")

botonSpell.addEventListener("click", function () {
    limpiarLista(borrarTitulos)
    let intervaloArreglo = setInterval(() => {
      if (arreglar >= 2) {
        clearInterval(intervaloArreglo);
      } else {  
      limpiarLista(borrarTitulos)
      fetch(`https://ffxivcollect.com/api/spells?name_${idioma}_cont=${nombreTitulo.value}`, requestOptions)
      .then(response => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          listaTitulos[0].appendChild(contenedorContenido);
          contenedor = document.getElementsByClassName("contenedorLogros");
          contenedorContenido = document.createElement("div");
          contenedorContenido.className = "titulo";
          imagenContenido.src = element.icon
          contenidoNombre.innerHTML = `${element.sources[0].text}`
          contenidoDesc.innerHTML = `${element.name}`
          contenidoOwnership.innerHTML = `${element.owned}`
          numeroSpell.innerHTML = `#${element.order}`
  
          contenedorContenido.appendChild(numeroSpell);
          contenedorContenido.appendChild(imagenContenido);
          contenedorContenido.appendChild(contenidoDesc);
          contenedorContenido.appendChild(contenidoNombre);        
          contenedorContenido.appendChild(contenidoOwnership);
  
          numeroSpell = document.createElement("p");
          imagenContenido = document.createElement("img");
          contenidoNombre = document.createElement("p");
          contenidoDesc = document.createElement("p");
          contenidoOwnership = document.createElement("p");
  
        });
      })
      .catch(error => console.log('error', error));
      arreglar++;
    }
    }, 1000);
    arreglar = 0;
  })





//Funciones

function limpiarLista(lista){
  while (lista.length > 0) {
    lista[0].remove()
  }
}