const menuButton = document.querySelector('.nav-btn');
const menu = document.querySelector('.main-menu');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
});