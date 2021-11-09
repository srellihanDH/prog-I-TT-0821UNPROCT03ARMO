console.log('favoritos');
//Recupero storage
let recuperoStorage = localStorage.getItem('favoritos');
//y transformar de json en array
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos); 


//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.lista');
let personajesFavoritos = '';


//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritos == null || favoritos.length == 0){
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    //for para recorrer el array.
    for (let i=0; i<favoritos.length; i++){
        buscarYMostarFavoritos(favoritos[i]);
    }

}


function buscarYMostarFavoritos(id){
    //fetch para buscar cada elemento del array. 
    let url = `https://rickandmortyapi.com/api/character/${id}`

    fetch(url)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos += `<article>
                                <img src=${data.image}>
                                <p>Nombre: ${data.name}</p>
                                <p>Status: ${data.status}</p>
                                <a href="detalle.html?id=${data.id}">Ver más</a>
                            </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos;            
        })
        .catch( function(error){
            console.log(error);
        })

}

//¿Podemos refactorizar este código?¿Cómo? Si, armando la función.


