//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })

//Crear un array que iremos completando con datos.
let favoritos = [];

//Recuperar storage
let recuperoStorage = localStorage.getItem('favoritos');

if(recuperoStorage != null){
    //1ro tenemos que transformarlo de cadena de texto y después lo guardamos en favoritos.
    favoritos = JSON.parse(recuperoStorage);
}

//Hacer click en el link. Primero debemos capturar el elemnto.
let fav= document.querySelector('.fav');

//Chequear que el id esté en el array de favoritos
if(favoritos.includes(id)){
    fav.innerText="Quitar de favoritos";
}

fav.addEventListener('click', function(evento){
    evento.preventDefault();

    if(favoritos.includes(id)){
        //Si el id está en el array.
        let indice = favoritos.indexOf(id);
        //Borrar a partir del índice, un elemento.
        favoritos.splice(indice, 1)
        fav.innerText="Agregar a favoritos"
    } else {
         //Agregar un dato al array.
        favoritos.push(id);
        fav.innerText="Quitar de favoritos";
    }
 
    //Guardar el array en el storage
    let favsToString = JSON.stringify(favoritos); //Transformamos el array en una cadena de texto.
    localStorage.setItem('favoritos', favsToString); //Guardamos el array en el storage.

    console.log(localStorage);

})



    