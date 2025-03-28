/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import { loadCharacters } from "./utils.js";

// nodos html
const characterList = document.querySelector("#character-list");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
let limit = 5;

loadCharacters(stays, characterList);

/*filterButtons.addEventListener("click", (event) => {
  let target = event.target; // elemento sobre el cual el usuario hizo click
  let tagName = target.tagName; // nombre de la etiqueta precionada por el usuario
  if (tagName === "BUTTON") {
    // validacion para verficar que usuario haya hecho click sobre un boton.
    let data = characters;
    if (target.value !== "all") {
      data = characters.filter(
        (personaje) =>
          personaje.status.toLocaleLowerCase() ===
          target.value.toLocaleLowerCase()
      );
    }
    loadCharacters(data, characterList);
    activeButton(target);
  }
});*/

/*searchButton.addEventListener("click", (e) => {
  searchCharacter(searchInput, characters, characterList);
});

loadMore.addEventListener("click", () => {
  limit += 5;
  loadCharacters(characters.slice(0, limit), characterList);
  if (limit === characters.length) {
    loadMore.remove();
  }
});*/
