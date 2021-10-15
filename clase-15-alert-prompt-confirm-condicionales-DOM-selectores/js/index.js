// RESOLUCIÓN DEL EJERCICIO DE SUPERHEROES DE OBJ LITERALES 
/* let ironMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['volar', 'lanzar misiles', 'disparar laser'],
    energia: 100,
    getPoder: function(n) {
        let poderElegido = this.poderes[n];
        this.energia = this.energia - 10;
        return `El poder elegido de ${this.nombre} es ${poderElegido} y la energía restante es ${this.energia}`
    }
}

let hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n){
        let poderElegido= this.poderes[n];        
        this.energia = this.energia-10;

        return `poderElegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`
    }
}

console.log(ironMan.getPoder(Math.floor(Math.random()*3)));
console.log(hulk.getPoder(Math.floor(Math.random()*3)));
console.log(ironMan.getPoder(Math.floor(Math.random()*3)));
console.log(hulk.getPoder(Math.floor(Math.random()*3))); */

// ------------------------------------------------------------------------------------------------------------------------

// ALERT PROMPT & CONFIRM
// 1) Alert: 
console.log(1);
let mensaje = 'Che, te estás quedadno sin batería y la clase está picada';
alert(mensaje);
console.log(2);

// 2) Prompt: 
let consultaNombre = 'Cuál es tu nombre?';
let respuestaNombre = prompt(consultaNombre);
console.log(respuestaNombre);

// 3) Confirm 
let consultaEdad = 'Sos mayor de edad?';
let mayorEdad = confirm(consultaEdad);
console.log(mayorEdad);

// ------------------------------------------------------------------------------------------------------------------------

// CONDICIONALES 
// preguntarle el nombre al estudiante
let estudiante = prompt(consultaNombre);
// preguntarle si aprobo el primer parcial
let primerParcial = confirm('Aprobaste el primer parcial?');
// preguntarle si aprobo el segundo parcial
let segundoParcial = confirm('Aprobaste el segundo parcial?');

if (primerParcial && segundoParcial || !primerParcial && segundoParcial) {
    alert(`Genial ${estudiante}, estás en condiciones de pasar al final`)
} else if (primerParcial && !segundoParcial) {
    alert(`Lo lamento ${estudiante}, no estás en condiciones de pasar al final y tenés que recuperar`)
} else {
    alert(`Lo lamento ${estudiante}, no estás en condiciones de pasar al final ni de recuperar, tenés que recursar`)
}

// ------------------------------------------------------------------------------------------------------------------------

// DOM & SLECTORES 
// 1) Capturamos
let h1 = document.querySelector('h1');
let divDeParrafos = document.querySelector('.parrafos')
// 2) Modificamos estilos 
h1.style.backgroundColor = 'pink';
h1.style.color = 'white';
// 3) Modificar contenido 
h1.innerText = 'Lo que quiera poner'
// 4) Modificar contenido y estructura
divDeParrafos.innerHTML += '<p>Eh, me agregué después</p>'
