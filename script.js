let pokemons = [];
let searchedPokemonsArray = [];
id = 1;
let currentPokemonCount = 24;
let hp;
let attack;
let defense;
let specialAttack;
let specialDefense;
let speed;

async function init(start = 1, ende = 24) {
  for (let i = start; i <= ende; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    pokemons.push(currentPokemon);

    document.getElementById("overlay").classList.add("d-none");

    let PokemonType1 = currentPokemon["types"]["0"]["type"]["name"];
    let PokemonImg = currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
    let backgroundPokemon = backgroundColor(PokemonType1);
    let typeBackgroundColorPokemon = typeBackgroundColor(PokemonType1);
    let BigPokemonName = currentPokemon["name"].charAt(0).toUpperCase() + currentPokemon["name"].slice(1);

    pokemonTypes(currentPokemon, typeBackgroundColorPokemon);

    document.getElementById("pokedex").innerHTML += pokedexHTML(i, id, PokemonImg, backgroundPokemon, BigPokemonName, typeBackgroundColorPokemon, PokemonType1);
  }
}

function removeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
  document.getElementById("overlay").classList.remove("greyfilter");
  document.getElementById("pokedexDetail").classList.add("d-none");
  document.getElementById("body").style.overflow = "unset";
}

function whichPokemon(id) {
  if (pokemons.length == 0) {
    let currentPokemon = searchedPokemonsArray[id - 1];
    pokedexDetail(id, currentPokemon);
  } else {
    let currentPokemon = pokemons[id - 1];
    pokedexDetail(id, currentPokemon);
  }
}

function pokedexDetail(id, currentPokemon) {
  addOverlay();
  disableScroll();
  scrollTop();

  baseStats(id, currentPokemon);

  let PokemonType1 = currentPokemon["types"]["0"]["type"]["name"];
  let PokemonImg = currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  let backgroundPokemon = backgroundColor(PokemonType1);
  let typeBackgroundColorPokemon = typeBackgroundColor(PokemonType1);
  let BigPokemonName = currentPokemon["name"].charAt(0).toUpperCase() + currentPokemon["name"].slice(1);

  pokemonTypes(currentPokemon, typeBackgroundColorPokemon);

  document.getElementById("pokedexDetail").innerHTML += pokedexDetailHTML(id, PokemonImg, backgroundPokemon, BigPokemonName, typeBackgroundColorPokemon, PokemonType1);
}

function nextPokemon(id) {
  id++;
  if (id > pokemons.length && searchedPokemonsArray.length == 0) {
    id = 1;
  } else if (id > searchedPokemonsArray.length && pokemons.length == 0) {
    id = 1;
  }
  whichPokemon(id);
}

function lastPokemon(id) {
  id--;
  if (id < 1 && searchedPokemonsArray.length == 0) {
    id = pokemons.length;
  }
  if (id < 1 && pokemons.length == 0) {
    id = searchedPokemonsArray.length;
  } else {
  }
  whichPokemon(id);
}

function addOverlay() {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("overlay").classList.add("greyfilter");
  document.getElementById("pokedexDetail").classList.remove("d-none");
}

function backgroundColor(PokemonType1) {
  switch (PokemonType1) {
    case "grass":
      return "grass";
    case "water":
      return "water";
    case "fire":
      return "fire";
    case "normal":
      return "normal";
    case "bug":
      return "bug";
    case "poison":
      return "poison";
    case "electric":
      return "electric";
    case "ice":
      return "ice";
    case "flying":
      return "flying";
    case "fighting":
      return "fighting";
    case "ground":
      return "ground";
    case "psychic":
      return "psychic";
    case "rock":
      return "rock";
    case "fairy":
      return "fairy";
    case "ghost":
      return "ghost";
  }
}

function typeBackgroundColor(PokemonType1) {
  switch (PokemonType1) {
    case "grass":
      return "grassType";
    case "water":
      return "waterType";
    case "fire":
      return "fireType";
    case "normal":
      return "normalType";
    case "bug":
      return "bugType";
    case "poison":
      return "poisonType";
    case "electric":
      return "electricType";
    case "ice":
      return "iceType";
    case "flying":
      return "flyingType";
    case "fighting":
      return "fightingType";
    case "ground":
      return "groundType";
    case "psychic":
      return "psychicType";
    case "rock":
      return "rockType";
    case "fairy":
      return "fairyType";
    case "ghost":
      return "ghostType";
  }
}

function pokemonTypes(currentPokemon, typeBackgroundColorPokemon) {
  if (currentPokemon["types"].length > 1) {
    PokemonType2 = currentPokemon["types"]["1"]["type"]["name"];
  } else {
    PokemonType2 = null;
  }
  if (PokemonType2) {
    Type2Pokemon = `<div class="type2 ${typeBackgroundColorPokemon}">${PokemonType2}</div>`;
  } else {
    Type2Pokemon = "";
  }
}

function baseStats(id, currentPokemon) {
  let stats = currentPokemon.stats; // speichert das Array der Statistiken in der Variable stats

  hp = stats.find((stat) => stat.stat.name === "hp").base_stat; // sucht in dem jeweiligen Array nach "hp" und speichert den base_stat in der Variable hp ab
  attack = stats.find((stat) => stat.stat.name === "attack").base_stat;
  defense = stats.find((stat) => stat.stat.name === "defense").base_stat;
  specialAttack = stats.find((stat) => stat.stat.name === "special-attack").base_stat;
  specialDefense = stats.find((stat) => stat.stat.name === "special-defense").base_stat;
  speed = stats.find((stat) => stat.stat.name === "speed").base_stat;
}

function pokedexHTML(i, id, PokemonImg, backgroundPokemon, BigPokemonName, typeBackgroundColorPokemon, PokemonType1) {
  return `<div
  onclick="whichPokemon(${i}, ${id})"
  class="pokedex ${backgroundPokemon}">
  <div class="pokemon-name">${BigPokemonName}</div>
  <div class="name-type-pos">
    <div class="types">
      <div class="type1 ${typeBackgroundColorPokemon}">${PokemonType1}</div>
      <div>${Type2Pokemon}</div>
    </div>
    <div class="pokemon-img-container">
      <img class="pokemon-img" src="${PokemonImg}" alt="" />
    </div>
  </div>
</div>`;
}

function pokedexDetailHTML(id, PokemonImg, backgroundPokemon, BigPokemonName, typeBackgroundColorPokemon, PokemonType1) {
  return ` <div class="detailCard ${backgroundPokemon}">
    <div class="pokemon-name-detail">
      <img onclick="lastPokemon(${id})" class="arrow" src="/img/angle-left.png" alt="" />
      ${BigPokemonName}
      <img onclick="nextPokemon(${id})" class="arrow" src="/img/angle-right.png" alt="" />
    </div>

    <div id="typedetail" class="typesDetail">
      <div class="type1 ${typeBackgroundColorPokemon}">${PokemonType1}</div>
      <div>${Type2Pokemon}</div>
    </div>
    <div class="pokemon-img-container">
      <img class="pokemon-img-detail" src="${PokemonImg}" alt="" />
    </div>
    <div class="detailCardStats">
      <table>
        <tr>
          <td>HP</td>
          <td>${hp}</td>
          <td>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="${hp}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style="width: ${hp}%"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>${attack}</td>
          <td>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style="width: ${attack}%"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>${defense}</td>
          <td>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style="width: ${defense}%"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Sp. Atk</td>
          <td>${specialAttack}</td>
          <td>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style="width: ${specialAttack}%"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Sp. Def</td>
          <td>${specialDefense}</td>
          <td>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style="width: ${specialDefense}%"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>${speed}</td>
          <td class="bar-lenght">
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style="width: ${speed}%"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>`;
}

function disableScroll() {
  document.getElementById("body").style.overflow = "hidden";
}

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

async function morePokemon() {
  let start = currentPokemonCount + 1;
  let end = currentPokemonCount + 24;
  showLoadingSpinner();
  await init(start, end);
  hideLoadingSpinner();
  currentPokemonCount = end;
}

function searchPokemon(search) {
  document.getElementById("pokedex").innerHTML = "";
  let searchedPokemons = pokemons.filter((pokemons) => pokemons.name.includes(search));
  loadSearchedPokemon(searchedPokemons);
  pokemons = [];
}

function searchAllowed(value) {
  if (value.length >= 3) {
    searchPokemon(value);
  } else if (value.length > 0) {
  } else {
    document.getElementById("pokedex").innerHTML = "";
    pokemons = [];
    searchedPokemonsArray = [];
    loadAndShowPkm();
  }
}

function loadSearchedPokemon(searchedPokemons) {
  for (let i = 0; i < searchedPokemons.length; ) {
    let currentPokemon = searchedPokemons[i++];
    searchedPokemonsArray.push(currentPokemon);
    document.getElementById("overlay").classList.add("d-none");

    let PokemonType1 = currentPokemon["types"]["0"]["type"]["name"];
    let PokemonImg = currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
    let backgroundPokemon = backgroundColor(PokemonType1);
    let typeBackgroundColorPokemon = typeBackgroundColor(PokemonType1);
    let BigPokemonName = currentPokemon["name"].charAt(0).toUpperCase() + currentPokemon["name"].slice(1);

    pokemonTypes(currentPokemon, typeBackgroundColorPokemon);

    document.getElementById("pokedex").innerHTML += pokedexHTML(i, id, PokemonImg, backgroundPokemon, BigPokemonName, typeBackgroundColorPokemon, PokemonType1);
  }
}

async function showLoadingSpinner() {
  document.getElementById("loader").classList.remove("d-none");
  document.getElementById("pokedex").classList.add("d-none");
  document.getElementById("button").classList.add("d-none");
}

async function loadAndShowPkm() {
  showLoadingSpinner();
  await init();
  hideLoadingSpinner();
}

function hideLoadingSpinner() {
  document.getElementById("loader").classList.add("d-none");
  document.getElementById("pokedex").classList.remove("d-none");
  document.getElementById("button").classList.remove("d-none");
}
