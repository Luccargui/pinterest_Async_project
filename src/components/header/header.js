import "./header.css";

export const arrayLiMenu=[
  {name: "Inicio",
    link: "https://es.pinterest.com/",
  },
    {name: "Explorar",
    link: "https://es.pinterest.com/ideas/",
  },
    {name: "Crear",
    link: "https://es.pinterest.com/pin-creation-tool/",
  }
];
export const arrayLiVector=[
  {
    img: "./assets/media/vectorCampana.png",
    alt: "Campana",
  },
    {
    img: "./assets/media/vectorMensajes.png",
    alt: "Mensajes",
  },
    {
     img: "./assets/media/vectorUsuario.png",
     alt: "Usuario",
  }
];

export const createLi = (array, parent) => {
for (const element of array) {
  if("name" in element){
      const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = element.name;
  a.href= element.link;
  a.target="_blank";
   li.appendChild(a);
  parent.appendChild(li);
  } else{
      const li = document.createElement("li");
    const imgLi =document.createElement("img");
    imgLi.src= element.img;
    imgLi.alt=element.alt;
    li.appendChild(imgLi);
    parent.appendChild(li);
  }
}
}
const header =document.querySelector("header");
export const createHeader = ()=> {
const nav = document.createElement("nav");
const logo = document.createElement("img");
const ulMenu = document.createElement("ul");
const divInput= document.createElement("div");
const inputMenu = document.createElement("input");
const lupa =document.createElement("img");
const ulVector = document.createElement("ul");

logo.src= "./assets/media/logoAsynterest_header.png";
logo.alt = "logo";
createLi(arrayLiMenu, ulMenu);
createLi(arrayLiVector, ulVector);
inputMenu.type="text";
inputMenu.placeholder = "Buscar...";
lupa.src = "/assets/media/vectorLupa.png";
lupa.alt = "Lupa";

header.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(ulMenu);
nav.appendChild(divInput);
divInput.appendChild(lupa);
divInput.appendChild(inputMenu);
nav.appendChild(ulVector);
}
