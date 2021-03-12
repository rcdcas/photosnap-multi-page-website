const burgerBtn = document.querySelector('.burger');
const menuPhone = document.querySelector('.menu__phone');
const backdrop = document.querySelector('.backdrop');

function burgerActivator() {
  menuPhone.classList.add('menu__phone--active');
  backdrop.classList.add('backdrop--block');
  setTimeout(() => backdrop.classList.add('backdrop--click'), 1);
}

function backdropClick() {
  menuPhone.classList.remove('menu__phone--active');
  setTimeout(() => backdrop.classList.remove('backdrop--block'), 301);
  backdrop.classList.remove('backdrop--click');
}

burgerBtn.addEventListener('click', burgerActivator);
backdrop.addEventListener('click', backdropClick);
