/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function loadCharacters(array, elementHTML) {
  elementHTML.innerHTML = "";
  let contador = array.length; //cuenta la cantidad de tarjetas que se estan mostrando
  document.querySelector("#count").textContent =
    contador >= 12 ? 12 + "+ " : contador + " ";

  array.forEach(function (item) {
    const template = characterTemplate(
      item.photo,
      item.superHost,
      item.type,
      item.beds,
      item.title,
      item.rating
    );

    elementHTML.innerHTML += template;
  });
}

export function characterTemplate(img, superHost, name, beds, status, stars) {
  let newBed = "";
  if (beds === null) {
    newBed = "hidden";
  }
  if (superHost === true) {
    const template = `
        <li class="flex flex-col overflow-hidden w-full pb-4 md:text-xs">
              <figure class="w-full overflow-hidden h-60 rounded-lg">
            <img src="${img}" alt="${name}" class="w-full h-full object-cover rounded-lg block ">
             </figure >
            <div aria-label="card content" class="flex justify-between py-4 px-1 flex-grow ">
              <div class="flex items-center space-x-1">
            <span class=" text-gray-600 font-bold border border-gray-600 px-1 py-1 rounded-full lg:text-xs">SUPERHOST</span>
                <h3 class="text-gray-600 text-xl md:text-xs font-semibold">${name}<span class="${newBed}">.${beds} beds</span></h3>
                </div>  
                <span class=" flex items-center space-x-2 pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eb5757" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                 </svg>${stars}</span>
                </div>
                <p class="text-gray-900 font-bold relative px-2">
                    <span>${status}</span>  
                </p>    
        </li>
    `;
    return template;
  } else {
    const template = `
        <li class="flex flex-col overflow-hidden w-full pb-4 md:text-xs ">
            <figure class="w-full overflow-hidden h-60 rounded-lg">
            <img src="${img}" alt="${name}" class="w-full h-full object-cover rounded-lg block">
             </figure >
            <div aria-label="card content" class="flex justify-between py-4 px-2 flex-grow">
                <h3 class=" text-gray-600 text-xl md:text-xs font-semibold">${name}<span class="${newBed}">.${beds} beds</span></h3>
                <span class=" flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eb5757" class="size-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
             </svg>${stars}</span>
                 </div>
                <p class=" text-gray-900 font-bold px-2 ">
                    <span>${status}</span> 
                </p>
        </li>
    `;
    return template;
  }
}

export function toggle() {
  modal.classList.toggle("hidden");
}

// Estoy descifrando este codigo porq se me filtraba todas las ciudades osea me salian como 10 y se repetian , pedi ayuda para ver que no se repitan.

export function loadLocation(array, element) {
  element.innerHTML = "";

  // Arreglo para almacenar las combinaciones únicas de ciudad y país
  let addedLocations = [];

  array.forEach(function (item) {
    // Combinamos ciudad y país en una sola cadena
    const location = `${item.city}, ${item.country}`;

    // Solo agregar si aún no se ha agregado esta combinación
    if (!addedLocations.includes(location)) {
      addedLocations.push(location); // Agregar a las combinaciones ya vistas

      // Crear el template y agregarlo al HTML
      const template = `
        <li class="p-1 my-2 flex items-center space-x-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B5563" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>${item.city}, ${item.country}</span>
        </li>
      `;
      element.innerHTML += template;
    }
  });
}
