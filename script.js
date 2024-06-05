let currentPokemon;
let backgroundColorPokemon;
let currentPokemonType1;
let currentPokemonType2;
let pokemonId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

async function loadPokemon() {
  for (let i = 0; i < pokemonId.length; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId[i]}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    renderPokemonBasic(currentPokemon);
  }
}

function renderPokemonBasic(currentPokemon) {
  let currentPokemonType2;
  let currentPokemonImg = currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  currentPokemonType1 = currentPokemon["types"]["0"]["type"]["name"];
  backgroundColorPokemon = getBackgroundColor(currentPokemonType1);

  if (currentPokemon["types"].length > 1) {
    currentPokemonType2 = currentPokemon["types"]["1"]["type"]["name"];
  } else {
    currentPokemonType2 = null;
  }

  if (currentPokemonType2) {
    type2Pokemon = `<div class="type2">${currentPokemonType2}</div>`;
  } else {
    type2Pokemon = "";
  }

  document.getElementById(
    "pokedex"
  ).innerHTML += `<div onclick="renderPokemonDetail(${currentPokemon})" class="pokemonBasic ${backgroundColorPokemon}">
    <div class="pokemonName">${currentPokemon["name"]}</div>
    <img class="pokemonImg" src="${currentPokemonImg}">
    <div class="type1 ${backgroundColorPokemon}">${currentPokemonType1}</div class="type2 ${backgroundColorPokemon}">
    ${type2Pokemon}
  </div>`;
}

function getBackgroundColor(currentPokemonType1) {
  switch (currentPokemonType1) {
    case "fire":
      return "fireBackground";
    case "water":
      return "waterBackground";
    case "grass":
      return "grassBackground";
    case "bug":
      return "bugBackground";
    case "normal":
      return "normalBackground";
    case "poison":
      return "poisonBackground";
  }
}

function renderPokemonDetail() {
  document.getElementById("window").classList.add("window");
  document.getElementById("pokemonDetail").innerHTML += `<div class="pokemonDetail ${backgroundColorPokemon}">
    <div class="name-id">
      <div class="pokemonNameDetail">${currentPokemon["name"]}</div>
      <div class="pokemonIdDetail">#0${currentPokemon["id"]}</div>
      <div class="pokemonType"> ${currentPokemonType1} </div>
      <div class="pokemonType2">${type2Pokemon}</div>
    </div>
    <div class="whiteOverlay"></div>
  </div>`;
}
