const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.navtabs');
const backMenu = document.querySelectorAll('#list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    Menu.classList.toggle('active');  
})

