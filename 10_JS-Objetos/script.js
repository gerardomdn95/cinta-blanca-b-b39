var arreglo = [1, 3, 5, 8];

// No tienen un orden
// Llave: valor

// JSON

// JavaScript
// Object
// Notation

var objeto = {
    // Atributos
    nombre: "La noche estrellada",
    autor:  "Van Gogh",
    tecnica: "Óleo sobre un lienzo",
    colores: ["#FFFFFF", "#000000"],
    anio: 1889,
    lugar: "Ámsterdam",
    mensaje: "Es una obra muy linda",
    museo: "Museo de Van Gogh",
    url: "https://www.caras.com.mx/wp-content/uploads/2018/05/El-secreto-mejor-guardado-de-La-noche-estrellada-de-Van-Gogh.jpg",
    // Métodos
    calcularEdad: function() { 
        return 2020 - this.anio;
    },
    numeroColores: function() { 
        if(this.colores.length === 1) {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " color.";
        } else {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " colores.";
        }
    },
    obtenerInfo: function() {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio;
    }
}

var pintura = {
    nombre: "Las Meninas",
    url: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/9f/9fdc/9fdc7800-9ade-48b0-ab8b-edee94ea877f/41866afd-6396-45e7-bd26-944263cf92f7.jpg",
    anio: 1656,
    autor: "Diego Velázquez",

    obtenerInfo: function() {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio;
    }
}

// Objeto
// DOM => Document Object Model
var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById("objeto-url");

// HTML                  Objeto
objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo();
objetoUrl.src = objeto.url;
objetoUrl.alt = objeto.nombre;

var pinturaNombre = document.getElementById("pintura-nombre");
var pinturaMensaje = document.getElementById("pintura-mensaje");
var pinturaUrl = document.getElementById("pintura-url");

pinturaNombre.innerHTML = pintura.nombre;
pinturaMensaje.innerHTML = pintura.obtenerInfo();
pinturaUrl.src = pintura.url;
pinturaUrl.alt = pintura.nombre;

// console.log(objetoNombre.innerHTML);

// console.log(objeto);
// console.log(objeto.autor);

// console.log(objeto.calcularEdad());
// console.log(objeto.numeroColores());
// console.log(objeto.obtenerInfo());

// console.error("Esto es un error");
// console.warn("Posiblemante esto es un error");
// console.log("Un log normal");

function dimeMiNombre() {
    var nombre = document.getElementById("nombre");
    var miNombre = document.getElementById("mi-nombre");

    miNombre.innerHTML = nombre.value;
}

var miNombre = "Gerardo";



// Formulario
// Hamburguesa -> Vegana, Carne
// Refresco o Cerveza
// Con papas o sin papas

// Onclick ()

// Sin refrescar el navegador
// Imagen => Hamburguesa vegana con cerveza y papas
