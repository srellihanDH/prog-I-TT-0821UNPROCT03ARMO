let url = 'https://apis.datos.gob.ar/georef/api/provincias'

fetch(url)
    .then(function(response){
        //1er paso: obtener los datos con fetch
        return response.json();
    })
    .then(function(data){
        //Acá escribimos nuestro código
        console.log(data.provincias);
        let info = data.provincias; //obtener puntualmente los datos que neceitamos.

        //2do paso: Capturar el elemento del DOM que queremos modificar/ actualizar
        let lista = document.querySelector('.lista');
        let elementosDeLista = ''; //El contenedor de los li.

        for (let i=0; i<info.length; i++){
            elementosDeLista += `<li>${info[i].nombre}</li>`
        }
        //3er paso: enviar al DOM la información actualizada
        lista.innerHTML = elementosDeLista;

    })
    .catch(function(error){
        console.log(error);
    })