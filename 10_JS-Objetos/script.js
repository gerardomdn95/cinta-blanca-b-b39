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

    // Métodos
    calcularEdad: function() { 
        return 2020 - this.anio 
    },
    numeroColores: function() { 
        if(this.colores.length === 1) {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " color."
        } else {
            return "La pintura " + this.nombre + " tiene " + this.colores.length + " colores."
        }
    },
    obtenerInfo: function() {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio;
    }
}

console.log(objeto);
console.log(objeto.autor);

console.log(objeto.calcularEdad());
console.log(objeto.numeroColores());
console.log(objeto.obtenerInfo());
