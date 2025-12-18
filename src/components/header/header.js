import "./header.css";
import { arrayLiMenu } from "../../data/arrayLiMenu/arrayLiMenu";
import { arrayLiVector } from "../../data/arrayLiVector/arrayLiVector";
import { createLi } from "../createLi/createLi";




const header = document.querySelector("header");

export const createHeader = () => {
  const nav = document.createElement("nav");
  const aLogo = document.createElement("a");
  const logo = document.createElement("img");
  const ulMenu = document.createElement("ul");
  const divInput = document.createElement("div");
  const inputMenu = document.createElement("input");
  const lupa = document.createElement("img");
  const ulVector = document.createElement("ul");

  aLogo.href="./src/main.js";

  logo.src = "./assets/media/logoAsynterest_header.png";
  logo.alt = "logo";

  createLi(arrayLiMenu, ulMenu);
  createLi(arrayLiVector, ulVector);

  inputMenu.type = "text";
  inputMenu.placeholder = "Buscar...";
  lupa.src = "./assets/media/vectorLupa.png";
  lupa.alt = "Lupa";
  lupa.classList.add("lupa");

  header.appendChild(nav);
  nav.appendChild(aLogo);
  aLogo.appendChild(logo);
  nav.appendChild(ulMenu);
  nav.appendChild(divInput);
  divInput.appendChild(lupa);
  divInput.appendChild(inputMenu);
  nav.appendChild(ulVector);
};
