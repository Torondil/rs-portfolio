const burger = document.querySelector('.burger'),
  wrapperLogo = document.getElementById('header-wrapper'),
  logoTitleBurger = document.querySelector('.logo__title'),
  burgerBgr = document.querySelector('.burger__background'),
  logoContainerBurger = document.querySelector('.logo'),
  burgerContainer = document.getElementById('burger-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  burgerContainer.classList.toggle('burger__container_active');
  logoTitleBurger.classList.toggle('logo__title_burger-active');
  wrapperLogo.classList.toggle('header-wrapper_active');
  logoContainerBurger.classList.toggle('logo_burger-active');
  burgerBgr.classList.toggle('burger__background_active');
  document.body.classList.toggle('body_active');
});

burgerBgr.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  burgerContainer.classList.toggle('burger__container_active');
  logoTitleBurger.classList.toggle('logo__title_burger-active');
  wrapperLogo.classList.toggle('header-wrapper_active');
  logoContainerBurger.classList.toggle('logo_burger-active');
  burgerBgr.classList.toggle('burger__background_active');
  document.body.classList.toggle('body_active');
});

var data;

function getFile (fileName) {
  var request = new XMLHttpRequest();
  request.open('GET', fileName);
  request.onloadend = function() {
      parse(request.responseText);
  }
  request.send();
}

getFile('../pets/pets.json');

function parse(obj) {
  data = JSON.parse(obj);
  console.log(data);
}
