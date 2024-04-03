let currentPokemon;

async function loadPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log(currentPokemon);
  renderPokemonBasic();
}

function renderPokemonBasic() {
  document.getElementById("pokemonName").innerHTML = currentPokemon["name"];
  document.getElementById("pokemonImg").src =
    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("pokemonName").innerHTML = currentPokemon["name"];
}
