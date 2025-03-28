/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function loadCharacters(array, elementHTML) {
  elementHTML.innerHTML = "";

  array.forEach(function (item) {
    const template = characterTemplate(
      item.photo,
      item.superHost,
      item.type,
      item.bed,
      item.title,
      item.rating
    );

    elementHTML.innerHTML += template;
  });
}

export function characterTemplate(img, superHost, name, bed, status, stars) {
  if (superHost === true) {
    const template = `
        <li class="flex flex-col rounded-lg shadow-md overflow-hidden w-full pb-4 sm:flex-row sm:h-60 sm:pb-0">

            <img src="${img}" alt="${name}" class="w-full object-cover sm:w-1/2 rounded-lg">

            <div aria-label="card content" class="flex justify-between p-4">
              <div class="flex items-center space-x-2">
            <span class=" text-gray-600 font-bold border border-gray-600 px-1 py-1 rounded-full ">SUPERHOST</span>
                <h3 class="text-gray-600 text-xl font-semibold">${name}</h3>
                </div>  
                <span class=" flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eb5757" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>${stars}</span>
</div>
                <p class="text-gray-600 font-bold relative before:absolute before:size-2 before:bg-gray-300 ml-4 before:-left-4 before:top-2.5 before:rounded-full">
                    <span>${status}</span> - 
                </p>

                 
            
        </li>
    `;
    return template;
  } else {
    const template = `
        <li class="flex flex-col rounded-lg shadow-md overflow-hidden w-full pb-4 sm:flex-row sm:h-60 sm:pb-0">

            <img src="${img}" alt="${name}" class="w-full object-cover sm:w-1/2 rounded-lg">

            <div aria-label="card content" class="flex justify-between p-4">
                <h3 class=" text-gray-600 text-xl font-semibold">${name}</h3>
                <span class=" flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eb5757" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>${stars}</span>
</div>
                <p class=" text-gray-600 font-bold relative before:absolute before:size-2 before:bg-gray-300 ml-4 before:-left-4 before:top-2.5 before:rounded-full">
                    <span>${status}</span> - 
                </p>

                 
            
        </li>
    `;
    return template;
  }
}
