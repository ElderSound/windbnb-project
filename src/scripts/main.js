/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import { loadCharacters, toggle, loadLocation } from "./utils.js";

// nodos html
const characterList = document.querySelector("#character-list");
const locationInput = document.querySelector("#modal-search-input");
const locationOpts = document.querySelector("#location-opts");
const inputGuest = document.querySelector("#modal-guest-input");
const ButtonGuest = document.querySelector("#buttons-guest");
const display = document.querySelector("#display");
const ButtonGuestN = document.querySelector("#buttons-guest-n");
const displayN = document.querySelector("#display-n");
const openBtn = document.querySelector("#open");
const modal = document.querySelector("#modal");
const navModal = document.querySelector("#nav-modal");
const conMod = document.querySelector("#contador-modal");
const modalSearch = document.querySelector("#search-modal-button");
const filteredCity = document.querySelector("#filtered-city");

//Cards
loadCharacters(stays, characterList);

//locations

loadLocation(stays, locationOpts);

//lista de ciudades buscador

locationInput.addEventListener("click", () => {
  if (!conMod.classList.contains("hidden")) {
    conMod.classList.add("hidden");
    locationOpts.classList.add("block");
  }
  locationOpts.classList.toggle("hidden");
});

locationOpts.addEventListener("click", (e) => {
  const { target } = e;
  const { tagName } = target;
  if (tagName === "SPAN") {
    locationInput.value = target.textContent;
    locationOpts.classList.toggle("hidden");
  }
});

//Desplegar contador

inputGuest.addEventListener("click", () => {
  if (!locationOpts.classList.contains("hidden")) {
    locationOpts.classList.add("hidden");
    conMod.classList.add("block");
  }
  conMod.classList.toggle("hidden");
});

//Contador de guests

ButtonGuest.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  const { tagName } = target;
  const currentDisplay = parseInt(display.textContent) || 0;
  const currentInputValue = parseInt(inputGuest.value) || 0;

  if (tagName === "BUTTON") {
    if (target.value === "-") {
      if (currentDisplay === 0) {
        return;
      }
      display.textContent = currentDisplay - 1;
      inputGuest.value = currentInputValue - 1 + " guests";
    } else if (target.value === "+") {
      display.textContent = currentDisplay + 1;
      inputGuest.value = currentInputValue + 1 + " guests";
    }
  }
});

ButtonGuestN.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  const { tagName } = target;
  const currentDisplay = parseInt(displayN.textContent) || 0;
  const currentInputValue = parseInt(inputGuest.value) || 0;

  if (tagName === "BUTTON") {
    if (target.value === "-") {
      if (currentDisplay === 0) {
        return;
      }
      displayN.textContent = currentDisplay - 1;
      inputGuest.value = currentInputValue - 1 + " guests";
    } else if (target.value === "+") {
      displayN.textContent = currentDisplay + 1;
      inputGuest.value = currentInputValue + 1 + " guests";
    }
  }
});

//Abrir y cerrar modal
navModal.addEventListener("click", toggle);
openBtn.addEventListener("click", toggle);

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    toggle();
  }
});

//Filtrado

modalSearch.addEventListener("click", (e) => {
  let cityValue = locationInput.value.toLowerCase().split(",")[0];
  let guestValue = parseInt(inputGuest.value) || 0;
  let filtered = stays;

  if (cityValue !== "" && guestValue === 0) {
    filtered = stays.filter((stay) => stay.city.toLowerCase() === cityValue);
  } else if (cityValue === "" && guestValue > 0) {
    filtered = stays.filter((stay) => stay.maxGuests >= guestValue);
  } else if (cityValue !== "" && guestValue >= 0) {
    filtered = stays.filter(
      (stay) =>
        stay.maxGuests >= guestValue && stay.city.toLowerCase() === cityValue
    );
  }
  //Añadir el nombre de la ciudad al titulo para saber en que ciudad se estan mostrando lso resultados.
  // Solo actualizar el span si hay resultados
  if (filtered.length > 0) {
    filteredCity.textContent =
      cityValue.charAt(0).toUpperCase() + cityValue.slice(1) + ", "; // Capitaliza la primera letra
  } else {
    filteredCity.textContent = ""; // Deja el span vacío si no hay resultados
  }

  loadCharacters(filtered, characterList);
});
