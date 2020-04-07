// Variables Primitivas
var nombre = "Gerardo"; // String
var edad = 24;  // Number
var mayorDeEdad = true; // Booleano

// Variables Compuestas
// Arreglo - Array -> Serie de datos ordenados

// Índice
//              0           1           2              3
var paises = ["Colombia", "México", "Costa Rica", "El Salvador"];
paises[4] = "España";
paises[5] = "Italia";

console.log(paises);

for (var i = 0; i <= 5; i++) {
    console.log(paises[i]);
}

var numeros = [];

for (var i = 0; i <= 100; i++) {
    numeros[i] = i;
}

console.log(numeros);

var arreglo2 = [[1, 2], 19, true, "Hola", false];

console.log(arreglo2);
