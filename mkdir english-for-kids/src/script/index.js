import '../styles/style.css';
import { cards } from './cards';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const wrapper = document.querySelector('.wrapper');
const openPage = content.firstChild.nextElementSibling;
const categoryName = document.createElement('div');
// const isMain = true;
// const isPlay = false;

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.toggle('menu_active');
});

menu.addEventListener('click', (event) => {
  event.stopPropagation();
});

wrapper.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});

const category = document.getElementById('category');

function renderCards(container, arrCards) {
  arrCards.forEach((card) => {
    const cardWrapper = document.createElement('section');
    cardWrapper.classList.add('cardWrapper');
    cardWrapper.setAttribute('id', `${card.name}`);
    cardWrapper.insertAdjacentHTML('afterbegin', `<div class="cardWrapper__element" style="background-image: url(${card.image})"></div>`);
    const cardWrapperTextContainer = document.createElement('div');
    const cardWrapperText = document.createElement('p');
    cardWrapperText.classList.add('cardWrapper__text');
    cardWrapperText.textContent = (`${card.name}`);
    cardWrapperTextContainer.classList.add('cardWrapper__title');
    container.append(cardWrapper);
    cardWrapper.append(cardWrapperTextContainer);
    cardWrapperTextContainer.append(cardWrapperText);
  });
}

function roundCardRender() {
  const containerCard = document.querySelectorAll('.cardWrapper__title');
  containerCard.forEach((el) => {
    const roundCardContainer = document.createElement('div');
    roundCardContainer.classList.add('cardWrapper__roundCard');
    roundCardContainer.insertAdjacentHTML('afterbegin', '<img src="./assets/img/5313167.arrows.png" alt="arrows">');
    el.append(roundCardContainer);

    roundCardContainer.onclick = (event) => {
      const cardWrapper = event.target.closest('.cardWrapper');
      const cardTextTitle = event.target.closest('.cardWrapper__title');
      const cardText = cardTextTitle.firstChild;
      const cardCategory = event.target.closest('.container_categories').id;
      const cardCategoryArr = cards[`${cardCategory}`];
      const wordRu = cardCategoryArr.find((c) => c.name === cardText.textContent).translation;
      const wordEn = cardText.textContent;
      cardText.textContent = '';
      roundCardContainer.classList.add('hidden');
      setTimeout(() => {
        cardText.innerHTML = wordRu;
      }, 200);
      cardWrapper.classList.add('transform');
      cardText.classList.add('transformNow');
      if (cardWrapper.classList.contains('transform')) {
        console.log(cardWrapper.classList.contains('transform'));
      }
      setTimeout(() => {
        cardWrapper.addEventListener('mouseleave', () => {
          cardText.textContent = '';
          cardWrapper.classList.remove('transform');
          setTimeout(() => {
            cardText.innerHTML = wordEn;
            roundCardContainer.classList.remove('hidden');
          }, 200);
          cardText.classList.remove('transformNow');
        }, { once: true });
      }, 500);
    };
  });
}

function createContainer(parent) {
  categoryName.setAttribute('id', `${parent.id}`);
  categoryName.classList.add('container_categories');
  content.append(categoryName);
}

wrapper.onclick = (event) => {
  const parent = event.target.closest('section');
  const isMain = event.target.closest('#category');
  if (isMain == null) return;
  if (!parent) return;
  content.removeChild(openPage);
  createContainer(parent);
  renderCards(categoryName, cards[`${parent.id}`]);
  roundCardRender();
};

menu.onclick = (event) => {
  const menuCategory = event.target.textContent;
  const newArrCards = cards[`${menuCategory}`];
  if (event.target.nodeName !== 'A') return;
  if (menuCategory === 'Main Page') {
    document.location.reload();
  }
  while (categoryName.firstChild) {
    categoryName.removeChild(categoryName.firstChild);
  }
  content.innerHTML = '';
  createContainer(event.target);
  renderCards(categoryName, newArrCards);
  roundCardRender();
  menu.classList.remove('menu_active');
};

renderCards(category, cards.categories);
