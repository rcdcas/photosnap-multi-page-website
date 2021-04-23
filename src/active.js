(function () {
  const burgerBtn = document.querySelector('.burger');
  const menuPhone = document.querySelector('.menu__phone');
  const backdrop = document.querySelector('.backdrop');
  const rate = 301;
  let lastClick = Date.now() - rate;

  function backdropCloseMenuhandler(event) {
    console.log(event);
    burgerBtn.classList.remove('burger--pop');
    menuPhone.classList.remove('menu__phone--active');
    backdrop.classList.remove('backdrop--opacity');
    setTimeout(() => backdrop.classList.remove('backdrop--block'), 300);
  }
  function burgerBtnHandler() {
    if (Date.now() - lastClick >= rate) {
      lastClick = Date.now();

      console.log(this.classList.length);
      if (this.classList.length < 2) {
        burgerBtn.classList.add('burger--pop');
        menuPhone.classList.add('menu__phone--active');
        backdrop.classList.add('backdrop--block');
        setTimeout(() => backdrop.classList.add('backdrop--opacity'), 20);
      } else {
        burgerBtn.classList.remove('burger--pop');
        menuPhone.classList.remove('menu__phone--active');
        backdrop.classList.remove('backdrop--opacity');
        setTimeout(() => backdrop.classList.remove('backdrop--block'), 300);
      }
    }
  }

  backdrop.addEventListener('click', backdropCloseMenuhandler);
  burgerBtn.addEventListener('click', burgerBtnHandler);
})();
