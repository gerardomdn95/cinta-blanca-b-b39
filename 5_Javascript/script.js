// alert("Funciona");

// Variables 
// Espacio dedicado para almacenar un dato

// DEFINICIÓN DE VARIABLES
//  Nombre = valor;
var numero = 5;
// Número

var checkbox = false;
// Booleana

var nombre = "Gerardo";
// String

// Mostrar variables dentro de la consola
console.log(numero);
console.log(checkbox);
console.log(nombre);

var x = 9;
var y = 4;
var z = 3;

// Suma
var suma = x + z;
// Concatenar +
console.log("La suma de " + x + " + " + z + " es " + suma);

// Resta -
var resta = x - z;
console.log("La resta es " + resta);

// Multiplicación *
var mult = x * z;
console.log("La resta es " + mult);

// División /
var div = x / z;
console.log("La resta es " + (x / z));

// Módulo
console.log("🔥");
var modulo = 3 % 2;
// Si el residuo es 0 => es par
// Si el residuo es != 0 => es impar
console.log(modulo);

// Enumerar variables
console.log(suma, resta, mult, div);

// Operadores relacionales

// Mayor que
console.log(9 > 3); // true

// Menor que
console.log(3 < 1); // false

// Igual que
console.log(5 == 5); // true

// Diferente
console.log(3 != 3); // false

console.log("Gerardo" == "gerardo"); // false

// Comparación sencilla
console.log("⭐️");
console.log("5" == 5);

// Comparación estricta SIEMPRE
console.log("5" === 5);
console.log("5" !== 5);

console.log(5 >= 5);
console.log(3 <= -5);

// Funciones
function sumaNumeros(a, b) {
    var resultado = a + b;
    return resultado;
}

//               Función
// 
// Parámetros    Algoritmo     Resultado
// 
//  Punto A      ________
//           ==> l      l
//               l      l  ==>  Tarifa
//  Punto B      l______l

console.log(sumaNumeros(5, 9));
console.log(sumaNumeros(9, 1));
console.log(sumaNumeros(3, 90));

// Error
// console.log(variable);

// Código inaccesible
var edad = prompt("Ingresa tu edad.");
edad = parseInt(edad);
console.log(edad);
