export const desplegarDiv = (img, div) => {
  img.addEventListener("click", () => {
    document.querySelectorAll("nav ul:last-of-type li div.divImgMenu")
      .forEach(d => {
        if (d !== div) d.classList.remove("divImgMenu");
      });

    div.classList.toggle("divImgMenu");
  });
};