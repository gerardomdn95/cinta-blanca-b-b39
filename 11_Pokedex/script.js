function findPokemon() {
    // Obtengo valor de input
    var pokeInput = document.getElementById("poke-input");

    // API
    // Endpoint GET
    // Promesa (Pending, Accepted, Rejected) HTTP 300
    var request = fetch("https://pokeapi.co/api/v2/pokemon/" + pokeInput.value);

    request
        .then(function (data) {
            if (data.status === 200) {
                // alert("Pokemon encontrado");
                var pokePromise = data.json();
                pokePromise
                    .then(function (pokemon) {
                        console.log()
                        // Obtendo ids de card
                        var pokeImage = document.getElementById("poke-image");
                        var pokeName = document.getElementById("poke-name");
                        var pokeMove1 = document.getElementById("poke-move-1");
                        var pokeMove2 = document.getElementById("poke-move-2");
                        var pokeMove3 = document.getElementById("poke-move-3");
                        var pokeMove4 = document.getElementById("poke-move-4");
                        // Sustituyo valores
                        pokeImage.src = pokemon.sprites.front_default;
                        pokeName.innerHTML = pokemon.name;
                        pokeMove1.innerHTML = pokemon.moves[0].move.name;
                        pokeMove2.innerHTML = pokemon.moves[1].move.name;
                        pokeMove3.innerHTML = pokemon.moves[2].move.name;
                        pokeMove4.innerHTML = pokemon.moves[3].move.name;
                    })
                    .catch(function() {
                        alert("Ocurrió un error al obtener información del Pokémon");
                    });
            } else {
                alert("Pokemon no encontrado");
            }
        })
        .catch(function() {
            alert("Ocurrió un error al comunicarse con la API");
        });
    console.log(request);
}