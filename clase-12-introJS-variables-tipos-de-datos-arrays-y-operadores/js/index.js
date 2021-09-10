// VARIABLES 
/*
var: No vamos a estar usando la variable de tipo var
let: Vamos a usar este tipo de variable para todo, menos constantes
const: Vamos a usar este tipo de variable para constantes (valores que sepamos que no van a cambiar a lo largo del tiempo)
*/

// Declaración de una variable de tipo let
let miNombre;
let miApellido;
let miEdad;
console.log(miNombre); // si no le asigno un valor a una variable de tipo let, javascript me va a decir que no está definido aún

// Asignación de un valor a una variable de tipo let
miNombre = "Sebastián";
miApellido = 'Rellihan';
miEdad = 21;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);

// Asignación y declaración de una variable de tipo const 

const pi = 3.14; // recuerden que hay que asignarle un valor al declarar una constante. No podemos declararla y luego asignarle el valor más tarde como hicimos más arriba con las de tipo let.

console.log(pi);

// TEMPLATE LITERALS O TEMPLATE STRINGS

console.log(`Mi nombre es ${miNombre} ${miApellido} y tengo ${miEdad} años`);

// TIPOS DE DATOS

// Numerico 
let numeroRandom = 8; // Recuerden que si tenemos decimales, usamos un punto para separar los mismos

// String 
let unString = "Esto es un string, osea una cadena de caracteres" // También podemos escribirlo con comillas simples

// Booleano
let verdadero = true;
let falso = false;

// Undefined
let sinValor;

// NaN (Not a number)
let notANumber = "a"*2;

// null
let cantidadDeAlumnosEnDigitalHouse = null;

console.log("-------------------------");
console.log(numeroRandom);
console.log(unString);
console.log(verdadero);
console.log(falso);
console.log(sinValor);
console.log(notANumber);
console.log(cantidadDeAlumnosEnDigitalHouse);

console.log("");

// ARRAYS 
let series = ["Friends", "Rick & Morty", "Game of Thrones", "Dexter", "Los simuladores", "How I met your mother", "Br Ba", "Prison Break", "Gossip girl", "La casa de papel"];

console.log("Mi array de series es: ", series);

series.pop();

console.log(series);

series.push("Brooklyn 99");

console.log(series);

console.log(series.length);

console.log(series[5]);

