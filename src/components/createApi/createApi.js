import { cardPrinting } from "..cardPrinting.js";

export let data = [];
export let searchValue = "";

export async function apiUnsplash() {
  try {
    let url = "";

    if (!searchValue) {
  
      url = `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}`;
    } else {
   
      url = `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${import.meta.env.VITE_ACCESS_KEY}`;
    }

    const response = await fetch(url);
    const result = await response.json();


    data = result.results || result;

    if (!data || data.length === 0) {
      document.querySelector("main").innerHTML = `
        <p class="no-results">No se encontraron resultados para "${searchValue}".</p>
      `;
      return;
    }

    console.log(data);
    cardPrinting(data);
  } catch (error) {
    console.error("Error en apiUnsplash:", error);
  }
}


export function searchingvalue(e) {
  e.preventDefault();
  const inputMenu = document.querySelector("header>nav>div>input");
  searchValue = inputMenu.value.trim().toLowerCase();

  inputMenu.value = ""; 
  document.querySelector("main").innerHTML = "";

  apiUnsplash();
}

export function setupSearchListeners() {
  const lupa = document.querySelector(".lupa");
  const inputMenu = document.querySelector("header>nav>div>input");

  lupa.addEventListener("click", searchingvalue);
  inputMenu.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchingvalue(e);
  });
}
