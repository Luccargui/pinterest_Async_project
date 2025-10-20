import "./overlay.css";

export const createOverlay =(element, wrapper) => {
      if (wrapper.querySelector(".overlay")) return;
  
  const overlay = document.createElement("div");
    overlay.classList.add("overlay");

  const divDivVectors = document.createElement("div");
  const btnCamara = document.createElement("button");
  const imgCamara = document.createElement("img");
  const pCamara = document.createElement("p");
  const divLike = document.createElement("div");
  const imgLike = document.createElement("img");
  const pLike = document.createElement("p");
  const aVisitarBtn = document.createElement("a");
  const visitarBtn = document.createElement("button");

    btnCamara.classList.add("divVector");
    divLike.classList.add("divVector");

    imgCamara.src = "./assets/media/vectorCamara.png";
    imgCamara.alt = "camara";
    pCamara.textContent = element.user.total_photos;

    imgLike.src = "./assets/media/vectorCorazon.png";
    imgLike.alt = "like";
    pLike.textContent = element.likes;

    aVisitarBtn.href = element.links.html;
    aVisitarBtn.target = "_blank";
    visitarBtn.textContent = "Visitar";

  let likeActive = false;

  divLike.addEventListener("click", () => {
    likeActive = !likeActive;
    let total = parseInt(pLike.textContent, 10);
    pLike.textContent = likeActive ? total + 1 : total - 1;
      divLike.classList.toggle("active"); 
      divLike.classList.toggle("animado"); 
  });

  overlay.appendChild(divDivVectors);
  divDivVectors.appendChild(btnCamara);
  btnCamara.appendChild(imgCamara);
  btnCamara.appendChild(pCamara);
  divDivVectors.appendChild(divLike);
  divLike.appendChild(imgLike);
  divLike.appendChild(pLike);
  overlay.appendChild(aVisitarBtn);
  aVisitarBtn.appendChild(visitarBtn);
  wrapper.appendChild(overlay);

  return overlay;
};

export const dissolveOverlay = (wrapper) => {
  const overlay = wrapper.querySelector(".overlay");
  if (overlay) overlay.remove();
};