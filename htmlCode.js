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
        <img onclick="lastPokemon(${id})" class="arrow" src="img/angle-left.png" alt="" />
        ${BigPokemonName}
        <img onclick="nextPokemon(${id})" class="arrow" src="img/angle-right.png" alt="" />
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
