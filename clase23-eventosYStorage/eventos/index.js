console.log("Probando eventos");

let h1 = document.querySelector('h1');

h1.addEventListener('click', function(milanesa){
    console.log(milanesa);
    alert('Me clickeaste');
})

//keydown incluye tambien a las teclas de funciones: flechas, ctrl, shift...
window.addEventListener('keypress', function(evento){
    console.log(evento);
})

let link = document.querySelector('a');
link.addEventListener('click', function(evento){
    evento.preventDefault();


    
})