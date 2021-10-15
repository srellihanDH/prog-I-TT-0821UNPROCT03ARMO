 let calculadora = {
    altura : 55,
    peso : 300,
    sumar: function (num1, num2) {
        let resultado = num1 + num2;
        return  `La suma ${num1} y ${num2} es ${resultado}`;
    },
    restar: function (num1, num2) {
        let resultado = num1 - num2;
        return  `La resta ${num1} y ${num2} es ${resultado}`;
    }
    
} 

let perro = {
    nombre : "Scott",
    color : "Cafe",
    ladrar : function () {
        return this.nombre + " puede ladrar";
    },
    correr : function () {
        return this.nombre + " puede correr";
    }
};
console.log(perro.correr());








