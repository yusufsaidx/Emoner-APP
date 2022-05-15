const nav = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");
const menuDivs = document.querySelectorAll(".menu div");

menu.addEventListener("click", () => {
    nav.classList.toggle("show")
    if (nav.classList.contains("show")) menuDivs.forEach(d => d.style.backgroundColor = "white")
    else menuDivs.forEach(d => d.style.backgroundColor = "black")
})