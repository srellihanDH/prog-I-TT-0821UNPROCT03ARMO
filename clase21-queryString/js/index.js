console.log("index.js");

let url = "https://rickandmortyapi.com/api/character"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola.
        let info = data.results; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let lista = document.querySelector('.lista');
        let elementosLista = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<info.length; i++){
            elementosLista += `<article>
                                <img src=${info[i].image}>
                                <p>Nombre: ${info[i].name}</p>
                                <p>Status: ${info[i].status}</p>
                                <a href="detalle.html?id=${info[i].id}">Ver más</a>
                            </article>`
        }
        console.log(elementosLista);

        //Paso 3: reinviar datos actualizados al DOM
        lista.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })