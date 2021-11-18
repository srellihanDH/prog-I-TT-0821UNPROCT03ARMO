//Validando formulario
console.log('validando');

let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault() //Evita el envío del formulario.
    console.log('No me mando...');

    //chequear que tenga datos
    if(inputField.value == ""){
        message.innerText = "El campo es obligatorio";
        inputField.style.outline = "2px solid red" //Podemos modificar el estilo.
    } else if(inputField.value.length < 3){
        message.innerText = "Debe escribir al menos 3 caracteres."
    } else {
        this.submit()
    }
})

inputField.addEventListener('focus', function(){
    message.innerText = '';
    inputField.style.outline = "auto" 
}) 