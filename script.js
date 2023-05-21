const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navtabs");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector("#list").forEach(n => n.
addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))