// Hagan simulación de piedra papel tijeras
// No necesitamos de for
// Unicamente necesitamos if

// strings
var j1 = prompt("Introduce opción J1");
var j2 = prompt("Introduce opción J2");

// Reasignación => a minúsculas
j1 = j1.toLowerCase();
j2 = j2.toLowerCase();

alert(j1);
alert(j2);

// J1
if(j1 === "papel" && j2 === "piedra") {
    alert("Gana J1");
} else if(j1 === "tijeras" && j2 === "papel") {
    alert("Gana J1");
} else if(j1 === "piedra" && j2 === "tijeras") {
    alert("Gana J1");
// J2
} else if(j2 === "papel" && j1 === "piedra") {
    alert("Gana J2");
} else if(j2 === "tijeras" && j1 === "papel") {
    alert("Gana J2");
} else if(j2 === "papel" && j1 === "piedra") {
    alert("Gana J2");
// Empates
} else if(j1=== "papel" && j2 === "papel") {
    alert("Empate");
} else if(j1=== "tijeras" && j2 === "tijeras") {
    alert("Empate");
} else if(j1=== "piedra" && j2 === "piedra") {
    alert("Empate");
// Manejo de errores
} else {
    alert("Alguna opción es inválida");
}