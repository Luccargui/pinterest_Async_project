import "./cardPrinting.css";

const createOverlay = (element, wrapper) => {
  if (wrapper.querySelector(".overlay")) return;
  
  const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
  const divDivVectors = document.createElement("div");
  const divCamara = document.createElement("div");
  const imgCamara = document.createElement("img");
  const pCamara = document.createElement("p");
  const divLike = document.createElement("div");
  const imgLike = document.createElement("img");
  const pLike = document.createElement("p");
  const aVisitarBtn = document.createElement("a");
  const visitarBtn = document.createElement("button");

    divCamara.classList.add("divVector");
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
  divDivVectors.appendChild(divCamara);
  divCamara.appendChild(imgCamara);
  divCamara.appendChild(pCamara);
  divDivVectors.appendChild(divLike);
  divLike.appendChild(imgLike);
  divLike.appendChild(pLike);
  overlay.appendChild(aVisitarBtn);
  aVisitarBtn.appendChild(visitarBtn);
  wrapper.appendChild(overlay);

  return overlay;
};

const dissolveOverlay = (wrapper) => {
  const overlay = wrapper.querySelector(".overlay");
  if (overlay) overlay.remove();
};

const main = document.querySelector("main");

export const cardPrinting = (data) => {
  for (const element of data) {
    const article = document.createElement("article");
    const imgWrapper = document.createElement("figure");
    const img = document.createElement("img");
    const divText = document.createElement("div");
    const pName = document.createElement("p");
    const divInDivText = document.createElement("div");
    const aDownload = document.createElement("a");
    const downloadButton = document.createElement("button");
    const imgDownloadButton = document.createElement("img");
    const pDate = document.createElement("p");
    const aImgUser = document.createElement("a");
    const imgUser = document.createElement("img");

    article.classList.add("card");
    divInDivText.classList.add("divInDivText");
    imgWrapper.classList.add("imgWrapper");

    img.src = element.urls.regular;
    img.alt = element.alt_description;
    pName.textContent = element.user.name;

    aDownload.href = element.links.download;
    aDownload.download = element.links.download;

    imgDownloadButton.src = "./assets/media/vectorDescarga.png";
    imgDownloadButton.alt = "Descargar";
   aImgUser.href = element.user.portfolio_url;
     aImgUser.target = "_blank";
    imgUser.classList.add("profileImage");
    imgUser.src = element.user.profile_image.medium;

    const random = Math.floor(Math.random() * 5) + 1;
    if (window.innerWidth > 1400) {
      imgUser.style.border = `6px solid var(--user-color-${random})`;
    } else {
      imgUser.style.border = `4px solid var(--user-color-${random})`;
    }

    const randomSpan = Math.floor(Math.random() * 4) + 4;
    article.style.gridRow = `span ${randomSpan}`;

    const createdAt = element.created_at;
    const fecha = new Date(createdAt);
    const fechaTexto = fecha.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    pDate.textContent = fechaTexto;

    main.appendChild(article);
    article.appendChild(imgWrapper);
    imgWrapper.appendChild(img);

    article.addEventListener("mouseenter", () => createOverlay(element, imgWrapper));
    article.addEventListener("mouseleave", () => dissolveOverlay(imgWrapper));

    article.appendChild(divText);
    divText.appendChild(aImgUser);
    aImgUser.appendChild(imgUser);
    divText.appendChild(pName);
    divText.appendChild(divInDivText);

    divInDivText.appendChild(aDownload);
    aDownload.appendChild(downloadButton);
    downloadButton.appendChild(imgDownloadButton);
    divInDivText.appendChild(pDate);
  }
};

