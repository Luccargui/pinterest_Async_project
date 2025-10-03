import './style.css';
import { createHeader, desplegarDiv} from "./components/header/header.js";
import { cardPrinting } from "./components/cardPrinting/cardPrinting.js";
import { filteredCards, filtrarCards } from "./components/busquedaFilter/busquedaFilter.js";

const AK = "zu7Cz9ftWUgInnVTFRvTYTNQCaAY8wNd4LpLsYPJAG0";

let globalData = []; 

async function apiUnsplash() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${AK}`);
      globalData = await response.json();
      console.log(globalData);
      cardPrinting(globalData);
  } catch (error) {
      console.error("Error en apiUnsplash:", error);
  }
}

apiUnsplash();
createHeader();


const logo = document.querySelector("header>nav>img"); 
const inputMenu = document.querySelector("header>nav>div>input");

logo.addEventListener("click", () => {
  document.querySelector("main").innerHTML = ""; 
  cardPrinting(globalData);
});

 
  const filterPrinting = (e) => {
  const searchValue = e.target.value;
  filtrarCards(searchValue, globalData);
  e.target.value = ""; 
  document.querySelector("main").innerHTML = "";
  if (filteredCards.length > 0) {
    cardPrinting(filteredCards);
  } else {
    cardPrinting(globalData); 
  }
};

const lupa = document.querySelector("header>nav>div:first-of-type>img");

lupa.addEventListener("change", filterPrinting);
inputMenu.addEventListener("change", filterPrinting); 

