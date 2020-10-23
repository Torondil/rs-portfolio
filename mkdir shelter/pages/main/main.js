const burger = document.querySelector('.burger'),
  burgerContainer = document.getElementById('burger-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  burgerContainer.classList.toggle('burger__container_active');
});
