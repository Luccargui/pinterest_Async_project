import { desplegarDiv } from "../desplegarDiv/desplegarDiv";


export const createLi = (array, parent) => {
  for (const element of array) {
    if ("name" in element) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = element.name;
      a.href = element.link;
      if (element.link.includes("netlify")) {
        a.target = "_self";
      } else {
        a.target = "_blank";
      }
      a.target = "_blank";
      li.appendChild(a);
      parent.appendChild(li);
    } else {
      const li = document.createElement("li");
      const btnImgLi=document.createElement("button");
      const imgLi = document.createElement("img");
      const divLi = document.createElement("div");
      const pDivli = document.createElement("p");

      imgLi.src = element.img;
      imgLi.alt = element.alt;
      pDivli.textContent = element.div;

      btnImgLi.appendChild(imgLi);
      divLi.appendChild(pDivli);
      li.appendChild(btnImgLi);
      li.appendChild(divLi);
      parent.appendChild(li);

        desplegarDiv(imgLi, divLi);
    }
  }
};
