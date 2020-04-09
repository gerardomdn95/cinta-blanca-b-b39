var pokemon = {
    name: "Pikachu",
    url: "https://pm1.narvii.com/6722/0ab8cce1e61ba0ef3beec0823b2c5321d1716fef_00.jpg",
    moves: [
        {
            name: "Thunderbolt",
        },
        {
            name: "Tackle",
        },
        {
            name: "Helping Hand",
        },
        {
            name: "Quick Attack",
        }
    ],
}

function findPokemon() {
    var pokeInput = document.getElementById("poke-input");

    alert(pokeInput.value);

    var pokeImage = document.getElementById("poke-image");
    var pokeName = document.getElementById("poke-name");
    var pokeMove1 = document.getElementById("poke-move-1");
    var pokeMove2 = document.getElementById("poke-move-2");
    var pokeMove3 = document.getElementById("poke-move-3");
    var pokeMove4 = document.getElementById("poke-move-4");

    pokeImage.src = pokemon.url;
    pokeName.innerHTML = pokemon.name;
    pokeMove1.innerHTML = pokemon.moves[0].name;
    pokeMove2.innerHTML = pokemon.moves[1].name;
    pokeMove3.innerHTML = pokemon.moves[2].name;
    pokeMove4.innerHTML = pokemon.moves[3].name;
}