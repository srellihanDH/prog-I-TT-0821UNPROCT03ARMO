let base = 6;
let tabla = [];

for(let i=1; i<11; i++){
    tabla.push(base*i);
    console.log(tabla);
}
console.log(tabla);

//Genancias.

let ganancias = [1,23,3456,323,-345,234,5643,876,-45,567]
let total = 0;

for (let i=0; i<ganancias.length; i++){
    total += ganancias[i];
   // console.log(total);
}

console.log(total);

//let resultado = ganancias[0] + ganancias[1]