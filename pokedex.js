//pintar Pokemons
function addPokemonToHTML(name,id,types,image) {
    let listaOrdenada = document.getElementById('pokedex');
    let elementoLista = document.createElement('li');
    let imagenLista = document.createElement('img');
    let titulo1 = document.createElement('p');
    let subtitulo1 =document.createElement('p');
    let titulo2 = document.createElement('p');
    let subtitulo2 =document.createElement('p');
    let idPokemon = document.createElement('p');
    let numeroPokemon = document.createElement('p');
    imagenLista.src = image;
    imagenLista.alt = 'Imagen de Pokemon';
    imagenLista.title = 'Pokemon ' + name;
    
    listaOrdenada.appendChild(elementoLista);
    elementoLista.appendChild(imagenLista);
    elementoLista.appendChild(numeroPokemon);
    elementoLista.appendChild(titulo1);
    elementoLista.appendChild(subtitulo1);
    elementoLista.appendChild(titulo2);
    elementoLista.appendChild(subtitulo2);

    titulo1.appendChild(document.createTextNode('nombre: '));
    subtitulo1.appendChild(document.createTextNode(name));
    titulo2.appendChild(document.createTextNode('Tipos: '));
    subtitulo2.appendChild(document.createTextNode(types));
    numeroPokemon.appendChild(document.createTextNode(id + '.'));

    //asignar clases a los elementos
    elementoLista.className = 'card'; 
    imagenLista.className = 'card-image';
    titulo1.className = 'card-title';
    subtitulo1.className ='card-subtitle';
    titulo2.className = 'card-title';
    subtitulo2.className ='card-subtitle';
    numeroPokemon.className = 'card-title';
}

// Traer info de la API 
fetch('https://pokeapi.co/api/v2/pokemon/?limit=150/')
    .then((respuestaDelApi) => respuestaDelApi.json())
    .then((respuestaEnJson) => {
        let listaPokemons = respuestaEnJson.results;
        for (i=0; i <=listaPokemons.length; i++) {
            let pokemon = listaPokemons[i];
            let url = pokemon.url;

            fetch(url)
              .then((respuestaDelApi2) => respuestaDelApi2.json())
              .then((respuestaEnJson2) => {
                let idPokemon = respuestaEnJson2.id;
                let namePokemon = respuestaEnJson2.name;
                let imagenPokemon = respuestaEnJson2.sprites.front_default;
                let typesPokemon = respuestaEnJson2.types;
                let nombreTipoPokemon = [];
                for(tipo of typesPokemon) {
                    nombreTipoPokemon.push(tipo.type.name);   
                    console.log(nombreTipoPokemon);
                }
                
                addPokemonToHTML(namePokemon, idPokemon,nombreTipoPokemon,imagenPokemon);
              });
        }
        
    });

    




