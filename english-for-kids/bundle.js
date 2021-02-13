/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/cards.js":
/*!*****************************!*\
  !*** ./src/script/cards.js ***!
  \*****************************/
/*! namespace exports */
/*! export cards [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cards": () => /* binding */ cards,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cards-img */ "./src/assets/cards-img/index.js");
/* harmony import */ var _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cards-audio */ "./src/assets/cards-audio/index.js");
;

const cards = {
  categories: [{
    name: 'Action (set A)',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dance,
    url: '/action-a'
  }, {
    name: 'Action (set B)',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.swim,
    url: '/action-b'
  }, {
    name: 'Outdoors',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.outdoors,
    url: '/outdoors'
  }, {
    name: 'House',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.house,
    url: '/house'
  }, {
    name: 'Animal (set A)',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.cat,
    url: '/animal-a'
  }, {
    name: 'Animal (set B)',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.bird,
    url: '/animal-b'
  }, {
    name: 'Clothes',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.blouse,
    url: '/clothes'
  }, {
    name: 'Emotion',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.smile,
    url: '/emotion'
  }],
  'Action (set A)': [{
    name: 'cry',
    translation: 'плакать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.cry,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.cry
  }, {
    name: 'dance',
    translation: 'танцевать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dance,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.dance
  }, {
    name: 'dive',
    translation: 'нырять',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dive,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.dive
  }, {
    name: 'draw',
    translation: 'рисовать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.draw,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.draw
  }, {
    name: 'fishing',
    translation: 'ловить рыбу',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.fish,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.fishing
  }, {
    name: 'fly',
    translation: 'летать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.fly,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.fly
  }, {
    name: 'hug',
    translation: 'обнимать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.hug,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.hug
  }, {
    name: 'jump',
    translation: 'прыгать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.jump,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.jump
  }],
  'Action (set B)': [{
    name: 'open',
    translation: 'открывать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.open,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.open1
  }, {
    name: 'play',
    translation: 'играть',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.play,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.play
  }, {
    name: 'point',
    translation: 'указывать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.point,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.point
  }, {
    name: 'ride',
    translation: 'ездить',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.ride,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.ride
  }, {
    name: 'run',
    translation: 'бегать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.run,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.run
  }, {
    name: 'sing',
    translation: 'петь',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.sing,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.sing
  }, {
    name: 'skip',
    translation: 'прыгать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.skip,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.skip
  }, {
    name: 'swim',
    translation: 'плавать',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.swim,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.swim
  }],
  Outdoors: [{
    name: 'sidewalk',
    translation: 'тротуар',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.sidewalk,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.sidewalk
  }, {
    name: 'road',
    translation: 'дорога',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.road,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.road
  }, {
    name: 'tree',
    translation: 'дерево',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.tree,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.tree
  }, {
    name: 'grass',
    translation: 'трава',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.grass,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.grass
  }, {
    name: 'river',
    translation: 'река',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.river,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.river
  }, {
    name: 'bus',
    translation: 'автобус',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.bus,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.bus
  }, {
    name: 'train',
    translation: 'поезд',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.train,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.train
  }, {
    name: 'sun',
    translation: 'солнце',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.sun,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.sun
  }],
  House: [{
    name: 'table',
    translation: 'стол',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.table,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.table
  }, {
    name: 'lamp',
    translation: 'лампа',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.lamp,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.lamp
  }, {
    name: 'door',
    translation: 'дверь',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.door,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.door
  }, {
    name: 'cupboard',
    translation: 'шкаф',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.cupboard,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.cupboard
  }, {
    name: 'fridge',
    translation: 'холодильник',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.fridge,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.fridge
  }, {
    name: 'window',
    translation: 'окно',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.window,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.window
  }, {
    name: 'armchair',
    translation: 'кресло',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.armchair,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.armchair
  }, {
    name: 'television',
    translation: 'телевизор',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.television,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.television
  }],
  'Animal (set A)': [{
    name: 'cat',
    translation: 'кот',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.cat,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.cat
  }, {
    name: 'chick',
    translation: 'цыплёнок',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.chick,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.chick
  }, {
    name: 'chicken',
    translation: 'курица',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.chicken,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.chicken
  }, {
    name: 'dog',
    translation: 'собака',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dog,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.dog
  }, {
    name: 'horse',
    translation: 'лошадь',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.horse,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.horse
  }, {
    name: 'pig',
    translation: 'свинья',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.pig,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.pig
  }, {
    name: 'rabbit',
    translation: 'кролик',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.rabbit,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.rabbit
  }, {
    name: 'sheep',
    translation: 'овца',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.sheep,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.sheep
  }],
  'Animal (set B)': [{
    name: 'bird',
    translation: 'птица',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.bird,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.bird
  }, {
    name: 'fish',
    translation: 'рыба',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.fish1,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.fish
  }, {
    name: 'frog',
    translation: 'жаба',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.frog,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.frog
  }, {
    name: 'giraffe',
    translation: 'жираф',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.giraffe,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.giraffe
  }, {
    name: 'lion',
    translation: 'лев',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.lion,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.lion
  }, {
    name: 'mouse',
    translation: 'мышь',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.mouse,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.mouse
  }, {
    name: 'turtle',
    translation: 'черепаха',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.turtle,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.turtle
  }, {
    name: 'dolphin',
    translation: 'дельфин',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dolphin,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.dolphin
  }],
  Clothes: [{
    name: 'skirt',
    translation: 'юбка',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.skirt,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.skirt
  }, {
    name: 'pants',
    translation: 'брюки',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.pants,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.pants
  }, {
    name: 'blouse',
    translation: 'блузка',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.blouse,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.blouse
  }, {
    name: 'dress',
    translation: 'платье',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.dress,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.dress
  }, {
    name: 'boot',
    translation: 'ботинок',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.boot,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.boot
  }, {
    name: 'shirt',
    translation: 'рубашка',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.shirt,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.shirt
  }, {
    name: 'coat',
    translation: 'пальто',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.coat,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.coat
  }, {
    name: 'shoe',
    translation: 'туфли',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.shoe,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.shoe
  }],
  Emotion: [{
    name: 'sad',
    translation: 'грустный',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.sad,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.sad
  }, {
    name: 'angry',
    translation: 'сердитый',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.angry,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.angry
  }, {
    name: 'happy',
    translation: 'счастливый',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.happy,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.happy
  }, {
    name: 'tired',
    translation: 'уставший',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.tired,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.tired
  }, {
    name: 'surprised',
    translation: 'удивлённый',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.surprised,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.surprised
  }, {
    name: 'scared',
    translation: 'испуганный',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.scared,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.scared
  }, {
    name: 'smile',
    translation: 'улыбка',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.smile,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.smile
  }, {
    name: 'laugh',
    translation: 'смех',
    image: _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.laugh,
    audioSrc: _assets_cards_audio__WEBPACK_IMPORTED_MODULE_1__.laugh
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_cards_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cards-img */ "./src/assets/cards-img/index.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./src/script/cards.js");
;


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const wrapper = document.querySelector('.wrapper');
const openPage = content.firstChild.nextElementSibling;
const categoryName = document.createElement('div');
const hamburgerButton = document.querySelector('.c-hamburger');
const startGameButton = document.querySelector('.playButton');
hamburgerButton.addEventListener('click', e => {
  e.stopPropagation();
  hamburgerButton.classList.toggle('is-active');
});
menuBtn.addEventListener('click', event => {
  event.stopPropagation();
  menu.classList.toggle('menu_active');
});
menu.addEventListener('click', event => {
  event.stopPropagation();
});
wrapper.addEventListener('click', () => {
  menu.classList.remove('menu_active');
  hamburgerButton.classList.remove('is-active');
});
const category = document.getElementById('category');

function renderCards(container, arrCards) {
  arrCards.forEach(card => {
    const cardWrapper = document.createElement('section');
    cardWrapper.classList.add('cardWrapper');
    cardWrapper.setAttribute('id', `${card.name}`);
    cardWrapper.insertAdjacentHTML('afterbegin', `<div class="cardWrapper__element" style="background-image: url(${card.image})"></div>`);
    const cardWrapperTextContainer = document.createElement('div');
    const cardWrapperText = document.createElement('p');
    cardWrapperText.classList.add('cardWrapper__text');
    cardWrapperText.textContent = `${card.name}`;
    cardWrapperTextContainer.classList.add('cardWrapper__title');
    container.append(cardWrapper);
    cardWrapper.append(cardWrapperTextContainer);
    cardWrapperTextContainer.append(cardWrapperText);
  });
}

function roundCardRender() {
  const containerCard = document.querySelectorAll('.cardWrapper__title');
  containerCard.forEach(el => {
    const roundCardContainer = document.createElement('div');
    roundCardContainer.classList.add('cardWrapper__roundCard');
    roundCardContainer.insertAdjacentHTML('afterbegin', '<img src="./assets/img/5313167.arrows.png" alt="arrows">');
    el.append(roundCardContainer);
    const audioArr = _cards__WEBPACK_IMPORTED_MODULE_2__.cards[`${el.closest('.container_categories').id}`];
    const audio = document.createElement('audio');
    const audioLink = audioArr.find(elem => elem.name === el.parentNode.id).audioSrc;
    audio.innerHTML = `<source src="${audioLink}" type="audio/mpeg" preload="auto">`;
    el.parentNode.appendChild(audio);

    function fPlay() {
      audio.currentTime = 0;
      audio.play();
    }

    const audioEl = el.parentNode;
    audioEl.addEventListener('click', () => fPlay());

    roundCardContainer.onclick = event => {
      const cardWrapper = event.target.closest('.cardWrapper');
      const cardTextTitle = event.target.closest('.cardWrapper__title');
      const cardText = cardTextTitle.firstChild;
      const cardCategory = event.target.closest('.container_categories').id;
      const cardCategoryArr = _cards__WEBPACK_IMPORTED_MODULE_2__.cards[`${cardCategory}`];
      const wordRu = cardCategoryArr.find(c => c.name === cardText.textContent).translation;
      const wordEn = cardText.textContent;
      cardText.textContent = '';
      event.stopPropagation();
      roundCardContainer.classList.add('hidden');
      setTimeout(() => {
        cardText.innerHTML = wordRu;
      }, 200);
      cardWrapper.classList.add('transform');
      cardText.classList.add('transformNow');
      setTimeout(() => {
        cardWrapper.addEventListener('mouseleave', () => {
          cardText.textContent = '';
          cardWrapper.classList.remove('transform');
          setTimeout(() => {
            cardText.innerHTML = wordEn;
            roundCardContainer.classList.remove('hidden');
          }, 200);
          cardText.classList.remove('transformNow');
        }, {
          once: true
        });
      }, 500);
    };
  });
}

function createContainer(parent) {
  categoryName.setAttribute('id', `${parent.id}`);
  categoryName.classList.add('container_categories');
  content.append(categoryName);
}

function playMode() {
  const gameContent = content.lastElementChild.id;
  const gameArr = _cards__WEBPACK_IMPORTED_MODULE_2__.cards[`${gameContent}`];

  startGameButton.onclick = () => {
    const item = gameArr[Math.floor(Math.random() * gameArr.length)];
    const audioPlay = new Audio();

    function playAudioGame(el) {
      audioPlay.src = el.audioSrc;
      audioPlay.play();

      const funcPlaySound = e => {
        if (!e.target.closest('section')) return;
        const correctAudio = new Audio();
        const inCorrectAudio = new Audio();

        function correctPlay() {
          correctAudio.src = './assets/audio/23d0e13.correct.mp3';
          correctAudio.play();
          const starContainer = document.createElement('div');
          const starImage = document.createElement('img');
          starImage.classList.add('starImage');
          starContainer.classList.add('starContainer');
          starImage.setAttribute('src', `${_assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.starWin}`);
          content.prepend(starContainer);
          starContainer.append(starImage);
        }

        function inCorrectPlay() {
          inCorrectAudio.src = './assets/audio/88bbaea.error.mp3';
          inCorrectAudio.play();
          const starContainer = document.createElement('div');
          const starImage = document.createElement('img');
          starImage.classList.add('starImage');
          starContainer.classList.add('starContainer');
          starImage.setAttribute('src', `${_assets_cards_img__WEBPACK_IMPORTED_MODULE_0__.star}`);
          content.prepend(starContainer);
          starContainer.append(starImage);
        }

        if (e.target.closest('section').id === item.name) {
          content.removeEventListener('click', funcPlaySound);
          correctPlay();
          gameArr.pop(el);
        } else {
          inCorrectPlay();
        }
      };

      content.addEventListener('click', funcPlaySound);
    }

    playAudioGame(item);
  };
}

function isPlayRender() {
  const cardWrapper = document.querySelectorAll('.cardWrapper');
  const cardWrapperEl = document.querySelectorAll('.cardWrapper__element');

  if (content.lastElementChild.id === 'category') {
    startGameButton.classList.add('hidden');
    cardWrapper.forEach(el => {
      el.classList.add('cardWrapperMain');
    });
    cardWrapperEl.forEach(el => {
      el.classList.add('cardWrapperMainEl');
    });
  }

  const switcherState = document.querySelector('.switch-container');
  const cardWrapperTitle = document.querySelectorAll('.cardWrapper__title');
  const cardEl = document.querySelectorAll('.cardWrapper__element');

  function isPlayable() {
    if (!document.querySelector('.switch-input').checked) {
      cardWrapper.forEach(el => {
        el.classList.add('cardWrapperMainPlay');
      });

      if (document.querySelector('.container_categories')) {
        startGameButton.classList.remove('hidden');
        playMode();
        document.querySelectorAll('audio').forEach(element => {
          const theEl = element;
          theEl.muted = true;
        }); //

        cardWrapperTitle.forEach(el => {
          el.classList.toggle('hidden');
        });
        cardEl.forEach(el => {
          el.classList.toggle('cardWrapper__elementPlay');
        });
      }
    } else {
      document.querySelectorAll('audio').forEach(element => {
        const theEl = element;
        theEl.muted = false;
      });
      startGameButton.classList.add('hidden');
      cardWrapper.forEach(el => {
        el.classList.remove('cardWrapperMainPlay');
      });
    }
  }

  isPlayable();

  switcherState.onclick = () => {
    isPlayable();
  };
}

wrapper.onclick = event => {
  const parent = event.target.closest('section');
  const isMain = event.target.closest('#category');
  if (isMain == null) return;
  if (!parent) return;
  content.removeChild(openPage);
  createContainer(parent);
  renderCards(categoryName, _cards__WEBPACK_IMPORTED_MODULE_2__.cards[`${parent.id}`]);
  roundCardRender();
  isPlayRender();
};

menu.onclick = event => {
  const menuCategory = event.target.textContent;
  const newArrCards = _cards__WEBPACK_IMPORTED_MODULE_2__.cards[`${menuCategory}`];
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
  isPlayRender();
  menu.classList.remove('menu_active');
};

renderCards(category, _cards__WEBPACK_IMPORTED_MODULE_2__.cards.categories);
isPlayRender();

/***/ }),

/***/ "./src/assets/cards-audio/angry.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/angry.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/1a39dce.angry.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/armchair.mp3":
/*!*********************************************!*\
  !*** ./src/assets/cards-audio/armchair.mp3 ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/ff241d8.armchair.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/bird.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/bird.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/1c4a5d7.bird.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/blouse.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/blouse.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/4669425.blouse.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/boot.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/boot.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/70e2635.boot.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/bus.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/bus.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/537b2ba.bus.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/cat.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/cat.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/964c52a.cat.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/chick.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/chick.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/fdd8871.chick.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/chicken.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/chicken.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/96ccf0d.chicken.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/coat.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/coat.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/b31e807.coat.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/correct.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/correct.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/23d0e13.correct.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/cry.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/cry.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/d1fde92.cry.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/cupboard.mp3":
/*!*********************************************!*\
  !*** ./src/assets/cards-audio/cupboard.mp3 ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/9a9cc9d.cupboard.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/dance.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/dance.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/074ab93.dance.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/dive.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/dive.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f85ee47.dive.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/dog.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/dog.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/19a0542.dog.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/dolphin.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/dolphin.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/ce66b0f.dolphin.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/door.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/door.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/47e760a.door.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/draw.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/draw.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/951089d.draw.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/dress.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/dress.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/6da52f4.dress.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/error.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/error.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/88bbaea.error.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/failure.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/failure.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/296640c.failure.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/fish.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/fish.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/b50e343.fish.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/fishing.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/fishing.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/8545aab.fishing.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/fly.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/fly.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/0571c78.fly.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/fridge.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/fridge.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/bc9b396.fridge.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/frog.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/frog.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/ba177eb.frog.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/giraffe.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/giraffe.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/32602fe.giraffe.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/grass.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/grass.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/d691a4d.grass.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/happy.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/happy.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/3f88b7f.happy.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/horse.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/horse.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/57d855c.horse.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/hug.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/hug.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/e072b7a.hug.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/jump.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/jump.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/57d5fc3.jump.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/lamp.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/lamp.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f36a309.lamp.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/laugh.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/laugh.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/2bc6c23.laugh.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/lion.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/lion.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/20cdcdc.lion.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/mouse.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/mouse.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/c26f9d5.mouse.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/open.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/open.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/4c8e932.open.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/pants.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/pants.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f844306.pants.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/pig.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/pig.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/57366d6.pig.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/play.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/play.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f2cbb1d.play.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/point.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/point.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/bf49985.point.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/rabbit.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/rabbit.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/2c393c5.rabbit.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/ride.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/ride.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/2d2018c.ride.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/river.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/river.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/e3468ec.river.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/road.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/road.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/4ee26b7.road.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/run.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/run.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/b4e3fab.run.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/sad.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/sad.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f72c553.sad.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/scared.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/scared.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/1f752b9.scared.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/sheep.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/sheep.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/fe16297.sheep.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/shirt.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/shirt.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/f562f9c.shirt.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/shoe.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/shoe.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/cff4c19.shoe.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/sidewalk.mp3":
/*!*********************************************!*\
  !*** ./src/assets/cards-audio/sidewalk.mp3 ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/bbb1616.sidewalk.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/sing.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/sing.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/65aed08.sing.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/skip.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/skip.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/37476b6.skip.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/skirt.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/skirt.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/602e95f.skirt.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/smile.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/smile.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/a8d7aab.smile.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/success.mp3":
/*!********************************************!*\
  !*** ./src/assets/cards-audio/success.mp3 ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/5f4128d.success.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/sun.mp3":
/*!****************************************!*\
  !*** ./src/assets/cards-audio/sun.mp3 ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/e36b837.sun.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/surprised.mp3":
/*!**********************************************!*\
  !*** ./src/assets/cards-audio/surprised.mp3 ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/b465773.surprised.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/swim.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/swim.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/e5827ef.swim.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/table.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/table.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/9aa511f.table.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/television.mp3":
/*!***********************************************!*\
  !*** ./src/assets/cards-audio/television.mp3 ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/c407100.television.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/tired.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/tired.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/58825db.tired.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/train.mp3":
/*!******************************************!*\
  !*** ./src/assets/cards-audio/train.mp3 ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/8a6efd1.train.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/tree.mp3":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/tree.mp3 ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/5712a52.tree.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/turtle.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/turtle.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/9120580.turtle.mp3");

/***/ }),

/***/ "./src/assets/cards-audio/window.mp3":
/*!*******************************************!*\
  !*** ./src/assets/cards-audio/window.mp3 ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/4bdf4e0.window.mp3");

/***/ }),

/***/ "./src/assets/cards-img/angry.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/angry.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/8c3a4be.angry.jpg");

/***/ }),

/***/ "./src/assets/cards-img/armchair.jpg":
/*!*******************************************!*\
  !*** ./src/assets/cards-img/armchair.jpg ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ffac126.armchair.jpg");

/***/ }),

/***/ "./src/assets/cards-img/arrows.png":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/arrows.png ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/5313167.arrows.png");

/***/ }),

/***/ "./src/assets/cards-img/bird.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/bird.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/8183fee.bird.jpg");

/***/ }),

/***/ "./src/assets/cards-img/blouse.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/blouse.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/20d4129.blouse.jpg");

/***/ }),

/***/ "./src/assets/cards-img/boot.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/boot.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/577e4b4.boot.jpg");

/***/ }),

/***/ "./src/assets/cards-img/bus.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/bus.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ed7678b.bus.jpg");

/***/ }),

/***/ "./src/assets/cards-img/cat.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/cat.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/dd0da6d.cat.jpg");

/***/ }),

/***/ "./src/assets/cards-img/chick.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/chick.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9ebf8f5.chick.jpg");

/***/ }),

/***/ "./src/assets/cards-img/chicken.jpg":
/*!******************************************!*\
  !*** ./src/assets/cards-img/chicken.jpg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/cd3bfe1.chicken.jpg");

/***/ }),

/***/ "./src/assets/cards-img/coat.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/coat.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/b06dd2f.coat.jpg");

/***/ }),

/***/ "./src/assets/cards-img/cry.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/cry.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/abd859b.cry.jpg");

/***/ }),

/***/ "./src/assets/cards-img/cupboard.jpg":
/*!*******************************************!*\
  !*** ./src/assets/cards-img/cupboard.jpg ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9e755b0.cupboard.jpg");

/***/ }),

/***/ "./src/assets/cards-img/dance.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/dance.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/6f8dcbb.dance.jpg");

/***/ }),

/***/ "./src/assets/cards-img/dive.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/dive.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ce5ce0e.dive.jpg");

/***/ }),

/***/ "./src/assets/cards-img/dog.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/dog.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/814e5cc.dog.jpg");

/***/ }),

/***/ "./src/assets/cards-img/dolphin.jpg":
/*!******************************************!*\
  !*** ./src/assets/cards-img/dolphin.jpg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/d360e2d.dolphin.jpg");

/***/ }),

/***/ "./src/assets/cards-img/door.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/door.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/4ce578c.door.jpg");

/***/ }),

/***/ "./src/assets/cards-img/draw.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/draw.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/231002c.draw.jpg");

/***/ }),

/***/ "./src/assets/cards-img/dress.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/dress.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/8aca6ea.dress.jpg");

/***/ }),

/***/ "./src/assets/cards-img/failure.jpg":
/*!******************************************!*\
  !*** ./src/assets/cards-img/failure.jpg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/f7b0f13.failure.jpg");

/***/ }),

/***/ "./src/assets/cards-img/fish.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/fish.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/de108b9.fish.jpg");

/***/ }),

/***/ "./src/assets/cards-img/fish1.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/fish1.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/eaa97b6.fish1.jpg");

/***/ }),

/***/ "./src/assets/cards-img/fly.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/fly.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/0979828.fly.jpg");

/***/ }),

/***/ "./src/assets/cards-img/fridge.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/fridge.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/4336a1c.fridge.jpg");

/***/ }),

/***/ "./src/assets/cards-img/frog.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/frog.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/55540f1.frog.jpg");

/***/ }),

/***/ "./src/assets/cards-img/giraffe.jpg":
/*!******************************************!*\
  !*** ./src/assets/cards-img/giraffe.jpg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/24a0b70.giraffe.jpg");

/***/ }),

/***/ "./src/assets/cards-img/grass.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/grass.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/61ecfb8.grass.jpg");

/***/ }),

/***/ "./src/assets/cards-img/happy.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/happy.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/c099ff4.happy.jpg");

/***/ }),

/***/ "./src/assets/cards-img/horse.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/horse.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/674d315.horse.jpg");

/***/ }),

/***/ "./src/assets/cards-img/house.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/house.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/a117a4e.house.jpg");

/***/ }),

/***/ "./src/assets/cards-img/hug.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/hug.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/1b89e88.hug.jpg");

/***/ }),

/***/ "./src/assets/cards-img/jump.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/jump.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/fefa41a.jump.jpg");

/***/ }),

/***/ "./src/assets/cards-img/lamp.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/lamp.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/7ffadf1.lamp.jpg");

/***/ }),

/***/ "./src/assets/cards-img/laugh.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/laugh.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/2fc142e.laugh.jpg");

/***/ }),

/***/ "./src/assets/cards-img/lion.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/lion.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/3540246.lion.jpg");

/***/ }),

/***/ "./src/assets/cards-img/mouse.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/mouse.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/4bb9ad2.mouse.jpg");

/***/ }),

/***/ "./src/assets/cards-img/open.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/open.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ecb8497.open.jpg");

/***/ }),

/***/ "./src/assets/cards-img/outdoors.jpg":
/*!*******************************************!*\
  !*** ./src/assets/cards-img/outdoors.jpg ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/87e48f2.outdoors.jpg");

/***/ }),

/***/ "./src/assets/cards-img/pants.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/pants.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/0e769df.pants.jpg");

/***/ }),

/***/ "./src/assets/cards-img/pig.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/pig.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/6a18af6.pig.jpg");

/***/ }),

/***/ "./src/assets/cards-img/play.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/play.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ed46107.play.jpg");

/***/ }),

/***/ "./src/assets/cards-img/point.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/point.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/7a6e8db.point.jpg");

/***/ }),

/***/ "./src/assets/cards-img/rabbit.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/rabbit.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/1cef884.rabbit.jpg");

/***/ }),

/***/ "./src/assets/cards-img/repeat.svg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/repeat.svg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/c910e9b.repeat.svg");

/***/ }),

/***/ "./src/assets/cards-img/ride.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/ride.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/6f1fc41.ride.jpg");

/***/ }),

/***/ "./src/assets/cards-img/river.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/river.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/1cabb4b.river.jpg");

/***/ }),

/***/ "./src/assets/cards-img/road.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/road.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/e7c6b7c.road.jpg");

/***/ }),

/***/ "./src/assets/cards-img/run.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/run.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/e1d9030.run.jpg");

/***/ }),

/***/ "./src/assets/cards-img/sad.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/sad.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/20a201b.sad.jpg");

/***/ }),

/***/ "./src/assets/cards-img/scared.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/scared.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/2e93dac.scared.jpg");

/***/ }),

/***/ "./src/assets/cards-img/sheep.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/sheep.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9071693.sheep.jpg");

/***/ }),

/***/ "./src/assets/cards-img/shirt.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/shirt.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/23eb169.shirt.jpg");

/***/ }),

/***/ "./src/assets/cards-img/shoe.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/shoe.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/989057e.shoe.jpg");

/***/ }),

/***/ "./src/assets/cards-img/sidewalk.jpg":
/*!*******************************************!*\
  !*** ./src/assets/cards-img/sidewalk.jpg ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/029547c.sidewalk.jpg");

/***/ }),

/***/ "./src/assets/cards-img/sing.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/sing.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9991121.sing.jpg");

/***/ }),

/***/ "./src/assets/cards-img/skip.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/skip.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/46d678c.skip.jpg");

/***/ }),

/***/ "./src/assets/cards-img/skirt.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/skirt.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/204f793.skirt.jpg");

/***/ }),

/***/ "./src/assets/cards-img/smile.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/smile.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9dbdb3d.smile.jpg");

/***/ }),

/***/ "./src/assets/cards-img/star-win.svg":
/*!*******************************************!*\
  !*** ./src/assets/cards-img/star-win.svg ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/6295e64.star-win.svg");

/***/ }),

/***/ "./src/assets/cards-img/star.svg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/star.svg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/51d7e25.star.svg");

/***/ }),

/***/ "./src/assets/cards-img/success.jpg":
/*!******************************************!*\
  !*** ./src/assets/cards-img/success.jpg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/eaec39d.success.jpg");

/***/ }),

/***/ "./src/assets/cards-img/sun.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards-img/sun.jpg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/2633ec8.sun.jpg");

/***/ }),

/***/ "./src/assets/cards-img/surprised.jpg":
/*!********************************************!*\
  !*** ./src/assets/cards-img/surprised.jpg ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/ab7a089.surprised.jpg");

/***/ }),

/***/ "./src/assets/cards-img/swim.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/swim.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/3053a74.swim.jpg");

/***/ }),

/***/ "./src/assets/cards-img/table.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/table.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/96471d9.table.jpg");

/***/ }),

/***/ "./src/assets/cards-img/television.jpg":
/*!*********************************************!*\
  !*** ./src/assets/cards-img/television.jpg ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/d5bd39e.television.jpg");

/***/ }),

/***/ "./src/assets/cards-img/tired.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/tired.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/904af76.tired.jpg");

/***/ }),

/***/ "./src/assets/cards-img/train.jpg":
/*!****************************************!*\
  !*** ./src/assets/cards-img/train.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/019ce49.train.jpg");

/***/ }),

/***/ "./src/assets/cards-img/tree.jpg":
/*!***************************************!*\
  !*** ./src/assets/cards-img/tree.jpg ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/e00b46e.tree.jpg");

/***/ }),

/***/ "./src/assets/cards-img/turtle.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/turtle.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/9c3654e.turtle.jpg");

/***/ }),

/***/ "./src/assets/cards-img/window.jpg":
/*!*****************************************!*\
  !*** ./src/assets/cards-img/window.jpg ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/img/fffbb51.window.jpg");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/cards-audio/index.js":
/*!*****************************************!*\
  !*** ./src/assets/cards-audio/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export angry [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/angry.mp3 .default */
/*! export armchair [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/armchair.mp3 .default */
/*! export bird [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/bird.mp3 .default */
/*! export blouse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/blouse.mp3 .default */
/*! export boot [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/boot.mp3 .default */
/*! export bus [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/bus.mp3 .default */
/*! export cat [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/cat.mp3 .default */
/*! export chick [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/chick.mp3 .default */
/*! export chicken [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/chicken.mp3 .default */
/*! export coat [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/coat.mp3 .default */
/*! export correct [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/correct.mp3 .default */
/*! export cry [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/cry.mp3 .default */
/*! export cupboard [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/cupboard.mp3 .default */
/*! export dance [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/dance.mp3 .default */
/*! export dive [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/dive.mp3 .default */
/*! export dog [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/dog.mp3 .default */
/*! export dolphin [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/dolphin.mp3 .default */
/*! export door [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/door.mp3 .default */
/*! export draw [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/draw.mp3 .default */
/*! export dress [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/dress.mp3 .default */
/*! export error1 [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/error.mp3 .default */
/*! export failure [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/failure.mp3 .default */
/*! export fish [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/fish.mp3 .default */
/*! export fishing [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/fishing.mp3 .default */
/*! export fly [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/fly.mp3 .default */
/*! export fridge [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/fridge.mp3 .default */
/*! export frog [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/frog.mp3 .default */
/*! export giraffe [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/giraffe.mp3 .default */
/*! export grass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/grass.mp3 .default */
/*! export happy [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/happy.mp3 .default */
/*! export horse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/horse.mp3 .default */
/*! export hug [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/hug.mp3 .default */
/*! export jump [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/jump.mp3 .default */
/*! export lamp [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/lamp.mp3 .default */
/*! export laugh [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/laugh.mp3 .default */
/*! export lion [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/lion.mp3 .default */
/*! export mouse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/mouse.mp3 .default */
/*! export open1 [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/open.mp3 .default */
/*! export pants [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/pants.mp3 .default */
/*! export pig [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/pig.mp3 .default */
/*! export play [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/play.mp3 .default */
/*! export point [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/point.mp3 .default */
/*! export rabbit [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/rabbit.mp3 .default */
/*! export ride [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/ride.mp3 .default */
/*! export river [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/river.mp3 .default */
/*! export road [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/road.mp3 .default */
/*! export run [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/run.mp3 .default */
/*! export sad [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/sad.mp3 .default */
/*! export scared [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/scared.mp3 .default */
/*! export sheep [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/sheep.mp3 .default */
/*! export shirt [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/shirt.mp3 .default */
/*! export shoe [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/shoe.mp3 .default */
/*! export sidewalk [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/sidewalk.mp3 .default */
/*! export sing [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/sing.mp3 .default */
/*! export skip [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/skip.mp3 .default */
/*! export skirt [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/skirt.mp3 .default */
/*! export smile [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/smile.mp3 .default */
/*! export success [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/success.mp3 .default */
/*! export sun [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/sun.mp3 .default */
/*! export surprised [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/surprised.mp3 .default */
/*! export swim [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/swim.mp3 .default */
/*! export table [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/table.mp3 .default */
/*! export television [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/television.mp3 .default */
/*! export tired [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/tired.mp3 .default */
/*! export train [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/train.mp3 .default */
/*! export tree [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/tree.mp3 .default */
/*! export turtle [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/turtle.mp3 .default */
/*! export window [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-audio/window.mp3 .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angry": () => /* reexport safe */ _angry_mp3__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "bird": () => /* reexport safe */ _bird_mp3__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "blouse": () => /* reexport safe */ _blouse_mp3__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "boot": () => /* reexport safe */ _boot_mp3__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "cat": () => /* reexport safe */ _cat_mp3__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "chicken": () => /* reexport safe */ _chicken_mp3__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "chick": () => /* reexport safe */ _chick_mp3__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "coat": () => /* reexport safe */ _coat_mp3__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "correct": () => /* reexport safe */ _correct_mp3__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "cry": () => /* reexport safe */ _cry_mp3__WEBPACK_IMPORTED_MODULE_9__.default,
/* harmony export */   "dance": () => /* reexport safe */ _dance_mp3__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "dive": () => /* reexport safe */ _dive_mp3__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "dog": () => /* reexport safe */ _dog_mp3__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "dolphin": () => /* reexport safe */ _dolphin_mp3__WEBPACK_IMPORTED_MODULE_13__.default,
/* harmony export */   "draw": () => /* reexport safe */ _draw_mp3__WEBPACK_IMPORTED_MODULE_14__.default,
/* harmony export */   "dress": () => /* reexport safe */ _dress_mp3__WEBPACK_IMPORTED_MODULE_15__.default,
/* harmony export */   "error1": () => /* reexport safe */ _error_mp3__WEBPACK_IMPORTED_MODULE_16__.default,
/* harmony export */   "failure": () => /* reexport safe */ _failure_mp3__WEBPACK_IMPORTED_MODULE_17__.default,
/* harmony export */   "fish": () => /* reexport safe */ _fish_mp3__WEBPACK_IMPORTED_MODULE_18__.default,
/* harmony export */   "fishing": () => /* reexport safe */ _fishing_mp3__WEBPACK_IMPORTED_MODULE_19__.default,
/* harmony export */   "fly": () => /* reexport safe */ _fly_mp3__WEBPACK_IMPORTED_MODULE_20__.default,
/* harmony export */   "frog": () => /* reexport safe */ _frog_mp3__WEBPACK_IMPORTED_MODULE_21__.default,
/* harmony export */   "giraffe": () => /* reexport safe */ _giraffe_mp3__WEBPACK_IMPORTED_MODULE_22__.default,
/* harmony export */   "happy": () => /* reexport safe */ _happy_mp3__WEBPACK_IMPORTED_MODULE_23__.default,
/* harmony export */   "horse": () => /* reexport safe */ _horse_mp3__WEBPACK_IMPORTED_MODULE_24__.default,
/* harmony export */   "hug": () => /* reexport safe */ _hug_mp3__WEBPACK_IMPORTED_MODULE_25__.default,
/* harmony export */   "jump": () => /* reexport safe */ _jump_mp3__WEBPACK_IMPORTED_MODULE_26__.default,
/* harmony export */   "laugh": () => /* reexport safe */ _laugh_mp3__WEBPACK_IMPORTED_MODULE_27__.default,
/* harmony export */   "lion": () => /* reexport safe */ _lion_mp3__WEBPACK_IMPORTED_MODULE_28__.default,
/* harmony export */   "mouse": () => /* reexport safe */ _mouse_mp3__WEBPACK_IMPORTED_MODULE_29__.default,
/* harmony export */   "open1": () => /* reexport safe */ _open_mp3__WEBPACK_IMPORTED_MODULE_30__.default,
/* harmony export */   "pants": () => /* reexport safe */ _pants_mp3__WEBPACK_IMPORTED_MODULE_31__.default,
/* harmony export */   "pig": () => /* reexport safe */ _pig_mp3__WEBPACK_IMPORTED_MODULE_32__.default,
/* harmony export */   "play": () => /* reexport safe */ _play_mp3__WEBPACK_IMPORTED_MODULE_33__.default,
/* harmony export */   "point": () => /* reexport safe */ _point_mp3__WEBPACK_IMPORTED_MODULE_34__.default,
/* harmony export */   "rabbit": () => /* reexport safe */ _rabbit_mp3__WEBPACK_IMPORTED_MODULE_35__.default,
/* harmony export */   "ride": () => /* reexport safe */ _ride_mp3__WEBPACK_IMPORTED_MODULE_36__.default,
/* harmony export */   "run": () => /* reexport safe */ _run_mp3__WEBPACK_IMPORTED_MODULE_37__.default,
/* harmony export */   "sad": () => /* reexport safe */ _sad_mp3__WEBPACK_IMPORTED_MODULE_38__.default,
/* harmony export */   "scared": () => /* reexport safe */ _scared_mp3__WEBPACK_IMPORTED_MODULE_39__.default,
/* harmony export */   "sheep": () => /* reexport safe */ _sheep_mp3__WEBPACK_IMPORTED_MODULE_40__.default,
/* harmony export */   "shirt": () => /* reexport safe */ _shirt_mp3__WEBPACK_IMPORTED_MODULE_41__.default,
/* harmony export */   "shoe": () => /* reexport safe */ _shoe_mp3__WEBPACK_IMPORTED_MODULE_42__.default,
/* harmony export */   "sing": () => /* reexport safe */ _sing_mp3__WEBPACK_IMPORTED_MODULE_43__.default,
/* harmony export */   "skip": () => /* reexport safe */ _skip_mp3__WEBPACK_IMPORTED_MODULE_44__.default,
/* harmony export */   "skirt": () => /* reexport safe */ _skirt_mp3__WEBPACK_IMPORTED_MODULE_45__.default,
/* harmony export */   "smile": () => /* reexport safe */ _smile_mp3__WEBPACK_IMPORTED_MODULE_46__.default,
/* harmony export */   "success": () => /* reexport safe */ _success_mp3__WEBPACK_IMPORTED_MODULE_47__.default,
/* harmony export */   "surprised": () => /* reexport safe */ _surprised_mp3__WEBPACK_IMPORTED_MODULE_48__.default,
/* harmony export */   "swim": () => /* reexport safe */ _swim_mp3__WEBPACK_IMPORTED_MODULE_49__.default,
/* harmony export */   "tired": () => /* reexport safe */ _tired_mp3__WEBPACK_IMPORTED_MODULE_50__.default,
/* harmony export */   "turtle": () => /* reexport safe */ _turtle_mp3__WEBPACK_IMPORTED_MODULE_51__.default,
/* harmony export */   "table": () => /* reexport safe */ _table_mp3__WEBPACK_IMPORTED_MODULE_52__.default,
/* harmony export */   "lamp": () => /* reexport safe */ _lamp_mp3__WEBPACK_IMPORTED_MODULE_53__.default,
/* harmony export */   "door": () => /* reexport safe */ _door_mp3__WEBPACK_IMPORTED_MODULE_54__.default,
/* harmony export */   "cupboard": () => /* reexport safe */ _cupboard_mp3__WEBPACK_IMPORTED_MODULE_55__.default,
/* harmony export */   "fridge": () => /* reexport safe */ _fridge_mp3__WEBPACK_IMPORTED_MODULE_56__.default,
/* harmony export */   "window": () => /* reexport safe */ _window_mp3__WEBPACK_IMPORTED_MODULE_57__.default,
/* harmony export */   "armchair": () => /* reexport safe */ _armchair_mp3__WEBPACK_IMPORTED_MODULE_58__.default,
/* harmony export */   "television": () => /* reexport safe */ _television_mp3__WEBPACK_IMPORTED_MODULE_59__.default,
/* harmony export */   "sidewalk": () => /* reexport safe */ _sidewalk_mp3__WEBPACK_IMPORTED_MODULE_60__.default,
/* harmony export */   "road": () => /* reexport safe */ _road_mp3__WEBPACK_IMPORTED_MODULE_61__.default,
/* harmony export */   "tree": () => /* reexport safe */ _tree_mp3__WEBPACK_IMPORTED_MODULE_62__.default,
/* harmony export */   "grass": () => /* reexport safe */ _grass_mp3__WEBPACK_IMPORTED_MODULE_63__.default,
/* harmony export */   "river": () => /* reexport safe */ _river_mp3__WEBPACK_IMPORTED_MODULE_64__.default,
/* harmony export */   "bus": () => /* reexport safe */ _bus_mp3__WEBPACK_IMPORTED_MODULE_65__.default,
/* harmony export */   "train": () => /* reexport safe */ _train_mp3__WEBPACK_IMPORTED_MODULE_66__.default,
/* harmony export */   "sun": () => /* reexport safe */ _sun_mp3__WEBPACK_IMPORTED_MODULE_67__.default
/* harmony export */ });
/* harmony import */ var _angry_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angry.mp3 */ "./src/assets/cards-audio/angry.mp3");
/* harmony import */ var _bird_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.mp3 */ "./src/assets/cards-audio/bird.mp3");
/* harmony import */ var _blouse_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blouse.mp3 */ "./src/assets/cards-audio/blouse.mp3");
/* harmony import */ var _boot_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boot.mp3 */ "./src/assets/cards-audio/boot.mp3");
/* harmony import */ var _cat_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cat.mp3 */ "./src/assets/cards-audio/cat.mp3");
/* harmony import */ var _chicken_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chicken.mp3 */ "./src/assets/cards-audio/chicken.mp3");
/* harmony import */ var _chick_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chick.mp3 */ "./src/assets/cards-audio/chick.mp3");
/* harmony import */ var _coat_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coat.mp3 */ "./src/assets/cards-audio/coat.mp3");
/* harmony import */ var _correct_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./correct.mp3 */ "./src/assets/cards-audio/correct.mp3");
/* harmony import */ var _cry_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cry.mp3 */ "./src/assets/cards-audio/cry.mp3");
/* harmony import */ var _dance_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dance.mp3 */ "./src/assets/cards-audio/dance.mp3");
/* harmony import */ var _dive_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dive.mp3 */ "./src/assets/cards-audio/dive.mp3");
/* harmony import */ var _dog_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dog.mp3 */ "./src/assets/cards-audio/dog.mp3");
/* harmony import */ var _dolphin_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dolphin.mp3 */ "./src/assets/cards-audio/dolphin.mp3");
/* harmony import */ var _draw_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./draw.mp3 */ "./src/assets/cards-audio/draw.mp3");
/* harmony import */ var _dress_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dress.mp3 */ "./src/assets/cards-audio/dress.mp3");
/* harmony import */ var _error_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error.mp3 */ "./src/assets/cards-audio/error.mp3");
/* harmony import */ var _failure_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./failure.mp3 */ "./src/assets/cards-audio/failure.mp3");
/* harmony import */ var _fish_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fish.mp3 */ "./src/assets/cards-audio/fish.mp3");
/* harmony import */ var _fishing_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fishing.mp3 */ "./src/assets/cards-audio/fishing.mp3");
/* harmony import */ var _fly_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fly.mp3 */ "./src/assets/cards-audio/fly.mp3");
/* harmony import */ var _frog_mp3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./frog.mp3 */ "./src/assets/cards-audio/frog.mp3");
/* harmony import */ var _giraffe_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./giraffe.mp3 */ "./src/assets/cards-audio/giraffe.mp3");
/* harmony import */ var _happy_mp3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./happy.mp3 */ "./src/assets/cards-audio/happy.mp3");
/* harmony import */ var _horse_mp3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./horse.mp3 */ "./src/assets/cards-audio/horse.mp3");
/* harmony import */ var _hug_mp3__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hug.mp3 */ "./src/assets/cards-audio/hug.mp3");
/* harmony import */ var _jump_mp3__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./jump.mp3 */ "./src/assets/cards-audio/jump.mp3");
/* harmony import */ var _laugh_mp3__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./laugh.mp3 */ "./src/assets/cards-audio/laugh.mp3");
/* harmony import */ var _lion_mp3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lion.mp3 */ "./src/assets/cards-audio/lion.mp3");
/* harmony import */ var _mouse_mp3__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mouse.mp3 */ "./src/assets/cards-audio/mouse.mp3");
/* harmony import */ var _open_mp3__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./open.mp3 */ "./src/assets/cards-audio/open.mp3");
/* harmony import */ var _pants_mp3__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pants.mp3 */ "./src/assets/cards-audio/pants.mp3");
/* harmony import */ var _pig_mp3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pig.mp3 */ "./src/assets/cards-audio/pig.mp3");
/* harmony import */ var _play_mp3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./play.mp3 */ "./src/assets/cards-audio/play.mp3");
/* harmony import */ var _point_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./point.mp3 */ "./src/assets/cards-audio/point.mp3");
/* harmony import */ var _rabbit_mp3__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rabbit.mp3 */ "./src/assets/cards-audio/rabbit.mp3");
/* harmony import */ var _ride_mp3__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ride.mp3 */ "./src/assets/cards-audio/ride.mp3");
/* harmony import */ var _run_mp3__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./run.mp3 */ "./src/assets/cards-audio/run.mp3");
/* harmony import */ var _sad_mp3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sad.mp3 */ "./src/assets/cards-audio/sad.mp3");
/* harmony import */ var _scared_mp3__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./scared.mp3 */ "./src/assets/cards-audio/scared.mp3");
/* harmony import */ var _sheep_mp3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sheep.mp3 */ "./src/assets/cards-audio/sheep.mp3");
/* harmony import */ var _shirt_mp3__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shirt.mp3 */ "./src/assets/cards-audio/shirt.mp3");
/* harmony import */ var _shoe_mp3__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shoe.mp3 */ "./src/assets/cards-audio/shoe.mp3");
/* harmony import */ var _sing_mp3__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sing.mp3 */ "./src/assets/cards-audio/sing.mp3");
/* harmony import */ var _skip_mp3__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./skip.mp3 */ "./src/assets/cards-audio/skip.mp3");
/* harmony import */ var _skirt_mp3__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./skirt.mp3 */ "./src/assets/cards-audio/skirt.mp3");
/* harmony import */ var _smile_mp3__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./smile.mp3 */ "./src/assets/cards-audio/smile.mp3");
/* harmony import */ var _success_mp3__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./success.mp3 */ "./src/assets/cards-audio/success.mp3");
/* harmony import */ var _surprised_mp3__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./surprised.mp3 */ "./src/assets/cards-audio/surprised.mp3");
/* harmony import */ var _swim_mp3__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./swim.mp3 */ "./src/assets/cards-audio/swim.mp3");
/* harmony import */ var _tired_mp3__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./tired.mp3 */ "./src/assets/cards-audio/tired.mp3");
/* harmony import */ var _turtle_mp3__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./turtle.mp3 */ "./src/assets/cards-audio/turtle.mp3");
/* harmony import */ var _table_mp3__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./table.mp3 */ "./src/assets/cards-audio/table.mp3");
/* harmony import */ var _lamp_mp3__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./lamp.mp3 */ "./src/assets/cards-audio/lamp.mp3");
/* harmony import */ var _door_mp3__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./door.mp3 */ "./src/assets/cards-audio/door.mp3");
/* harmony import */ var _cupboard_mp3__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./cupboard.mp3 */ "./src/assets/cards-audio/cupboard.mp3");
/* harmony import */ var _fridge_mp3__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./fridge.mp3 */ "./src/assets/cards-audio/fridge.mp3");
/* harmony import */ var _window_mp3__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./window.mp3 */ "./src/assets/cards-audio/window.mp3");
/* harmony import */ var _armchair_mp3__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./armchair.mp3 */ "./src/assets/cards-audio/armchair.mp3");
/* harmony import */ var _television_mp3__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./television.mp3 */ "./src/assets/cards-audio/television.mp3");
/* harmony import */ var _sidewalk_mp3__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./sidewalk.mp3 */ "./src/assets/cards-audio/sidewalk.mp3");
/* harmony import */ var _road_mp3__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./road.mp3 */ "./src/assets/cards-audio/road.mp3");
/* harmony import */ var _tree_mp3__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./tree.mp3 */ "./src/assets/cards-audio/tree.mp3");
/* harmony import */ var _grass_mp3__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./grass.mp3 */ "./src/assets/cards-audio/grass.mp3");
/* harmony import */ var _river_mp3__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./river.mp3 */ "./src/assets/cards-audio/river.mp3");
/* harmony import */ var _bus_mp3__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./bus.mp3 */ "./src/assets/cards-audio/bus.mp3");
/* harmony import */ var _train_mp3__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./train.mp3 */ "./src/assets/cards-audio/train.mp3");
/* harmony import */ var _sun_mp3__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./sun.mp3 */ "./src/assets/cards-audio/sun.mp3");
;







































































/***/ }),

/***/ "./src/assets/cards-img/index.js":
/*!***************************************!*\
  !*** ./src/assets/cards-img/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export angry [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/angry.jpg .default */
/*! export armchair [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/armchair.jpg .default */
/*! export arrows [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/arrows.png .default */
/*! export bird [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/bird.jpg .default */
/*! export blouse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/blouse.jpg .default */
/*! export boot [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/boot.jpg .default */
/*! export bus [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/bus.jpg .default */
/*! export cat [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/cat.jpg .default */
/*! export chick [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/chick.jpg .default */
/*! export chicken [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/chicken.jpg .default */
/*! export coat [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/coat.jpg .default */
/*! export cry [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/cry.jpg .default */
/*! export cupboard [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/cupboard.jpg .default */
/*! export dance [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/dance.jpg .default */
/*! export dive [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/dive.jpg .default */
/*! export dog [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/dog.jpg .default */
/*! export dolphin [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/dolphin.jpg .default */
/*! export door [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/door.jpg .default */
/*! export draw [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/draw.jpg .default */
/*! export dress [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/dress.jpg .default */
/*! export failure [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/failure.jpg .default */
/*! export fish [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/fish.jpg .default */
/*! export fish1 [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/fish1.jpg .default */
/*! export fly [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/fly.jpg .default */
/*! export fridge [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/fridge.jpg .default */
/*! export frog [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/frog.jpg .default */
/*! export giraffe [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/giraffe.jpg .default */
/*! export grass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/grass.jpg .default */
/*! export happy [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/happy.jpg .default */
/*! export horse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/horse.jpg .default */
/*! export house [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/house.jpg .default */
/*! export hug [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/hug.jpg .default */
/*! export jump [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/jump.jpg .default */
/*! export lamp [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/lamp.jpg .default */
/*! export laugh [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/laugh.jpg .default */
/*! export lion [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/lion.jpg .default */
/*! export mouse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/mouse.jpg .default */
/*! export open [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/open.jpg .default */
/*! export outdoors [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/outdoors.jpg .default */
/*! export pants [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/pants.jpg .default */
/*! export pig [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/pig.jpg .default */
/*! export play [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/play.jpg .default */
/*! export point [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/point.jpg .default */
/*! export rabbit [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/rabbit.jpg .default */
/*! export repeat [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/repeat.svg .default */
/*! export ride [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/ride.jpg .default */
/*! export river [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/river.jpg .default */
/*! export road [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/road.jpg .default */
/*! export run [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/run.jpg .default */
/*! export sad [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/sad.jpg .default */
/*! export scared [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/scared.jpg .default */
/*! export sheep [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/sheep.jpg .default */
/*! export shirt [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/shirt.jpg .default */
/*! export shoe [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/shoe.jpg .default */
/*! export sidewalk [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/sidewalk.jpg .default */
/*! export sing [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/sing.jpg .default */
/*! export skip [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/skip.jpg .default */
/*! export skirt [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/skirt.jpg .default */
/*! export smile [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/smile.jpg .default */
/*! export star [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/star.svg .default */
/*! export starWin [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/star-win.svg .default */
/*! export success [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/success.jpg .default */
/*! export sun [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/sun.jpg .default */
/*! export surprised [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/surprised.jpg .default */
/*! export swim [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/swim.jpg .default */
/*! export table [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/table.jpg .default */
/*! export television [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/television.jpg .default */
/*! export tired [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/tired.jpg .default */
/*! export train [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/train.jpg .default */
/*! export tree [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/tree.jpg .default */
/*! export turtle [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/turtle.jpg .default */
/*! export window [provided] [no usage info] [missing usage info prevents renaming] -> ./src/assets/cards-img/window.jpg .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angry": () => /* reexport safe */ _angry_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "arrows": () => /* reexport safe */ _arrows_png__WEBPACK_IMPORTED_MODULE_71__.default,
/* harmony export */   "bird": () => /* reexport safe */ _bird_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "blouse": () => /* reexport safe */ _blouse_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "boot": () => /* reexport safe */ _boot_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "cat": () => /* reexport safe */ _cat_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "chicken": () => /* reexport safe */ _chicken_jpg__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "chick": () => /* reexport safe */ _chick_jpg__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "coat": () => /* reexport safe */ _coat_jpg__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "cry": () => /* reexport safe */ _cry_jpg__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "dance": () => /* reexport safe */ _dance_jpg__WEBPACK_IMPORTED_MODULE_9__.default,
/* harmony export */   "dive": () => /* reexport safe */ _dive_jpg__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "dog": () => /* reexport safe */ _dog_jpg__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "dolphin": () => /* reexport safe */ _dolphin_jpg__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "draw": () => /* reexport safe */ _draw_jpg__WEBPACK_IMPORTED_MODULE_13__.default,
/* harmony export */   "dress": () => /* reexport safe */ _dress_jpg__WEBPACK_IMPORTED_MODULE_14__.default,
/* harmony export */   "failure": () => /* reexport safe */ _failure_jpg__WEBPACK_IMPORTED_MODULE_15__.default,
/* harmony export */   "fish1": () => /* reexport safe */ _fish1_jpg__WEBPACK_IMPORTED_MODULE_16__.default,
/* harmony export */   "fish": () => /* reexport safe */ _fish_jpg__WEBPACK_IMPORTED_MODULE_17__.default,
/* harmony export */   "fly": () => /* reexport safe */ _fly_jpg__WEBPACK_IMPORTED_MODULE_18__.default,
/* harmony export */   "frog": () => /* reexport safe */ _frog_jpg__WEBPACK_IMPORTED_MODULE_19__.default,
/* harmony export */   "giraffe": () => /* reexport safe */ _giraffe_jpg__WEBPACK_IMPORTED_MODULE_20__.default,
/* harmony export */   "happy": () => /* reexport safe */ _happy_jpg__WEBPACK_IMPORTED_MODULE_21__.default,
/* harmony export */   "horse": () => /* reexport safe */ _horse_jpg__WEBPACK_IMPORTED_MODULE_22__.default,
/* harmony export */   "hug": () => /* reexport safe */ _hug_jpg__WEBPACK_IMPORTED_MODULE_23__.default,
/* harmony export */   "jump": () => /* reexport safe */ _jump_jpg__WEBPACK_IMPORTED_MODULE_24__.default,
/* harmony export */   "laugh": () => /* reexport safe */ _laugh_jpg__WEBPACK_IMPORTED_MODULE_25__.default,
/* harmony export */   "lion": () => /* reexport safe */ _lion_jpg__WEBPACK_IMPORTED_MODULE_26__.default,
/* harmony export */   "mouse": () => /* reexport safe */ _mouse_jpg__WEBPACK_IMPORTED_MODULE_27__.default,
/* harmony export */   "open": () => /* reexport safe */ _open_jpg__WEBPACK_IMPORTED_MODULE_28__.default,
/* harmony export */   "pants": () => /* reexport safe */ _pants_jpg__WEBPACK_IMPORTED_MODULE_29__.default,
/* harmony export */   "pig": () => /* reexport safe */ _pig_jpg__WEBPACK_IMPORTED_MODULE_30__.default,
/* harmony export */   "play": () => /* reexport safe */ _play_jpg__WEBPACK_IMPORTED_MODULE_31__.default,
/* harmony export */   "point": () => /* reexport safe */ _point_jpg__WEBPACK_IMPORTED_MODULE_32__.default,
/* harmony export */   "rabbit": () => /* reexport safe */ _rabbit_jpg__WEBPACK_IMPORTED_MODULE_33__.default,
/* harmony export */   "repeat": () => /* reexport safe */ _repeat_svg__WEBPACK_IMPORTED_MODULE_34__.default,
/* harmony export */   "ride": () => /* reexport safe */ _ride_jpg__WEBPACK_IMPORTED_MODULE_35__.default,
/* harmony export */   "run": () => /* reexport safe */ _run_jpg__WEBPACK_IMPORTED_MODULE_36__.default,
/* harmony export */   "sad": () => /* reexport safe */ _sad_jpg__WEBPACK_IMPORTED_MODULE_37__.default,
/* harmony export */   "scared": () => /* reexport safe */ _scared_jpg__WEBPACK_IMPORTED_MODULE_38__.default,
/* harmony export */   "sheep": () => /* reexport safe */ _sheep_jpg__WEBPACK_IMPORTED_MODULE_39__.default,
/* harmony export */   "shirt": () => /* reexport safe */ _shirt_jpg__WEBPACK_IMPORTED_MODULE_40__.default,
/* harmony export */   "shoe": () => /* reexport safe */ _shoe_jpg__WEBPACK_IMPORTED_MODULE_41__.default,
/* harmony export */   "sing": () => /* reexport safe */ _sing_jpg__WEBPACK_IMPORTED_MODULE_42__.default,
/* harmony export */   "skip": () => /* reexport safe */ _skip_jpg__WEBPACK_IMPORTED_MODULE_43__.default,
/* harmony export */   "skirt": () => /* reexport safe */ _skirt_jpg__WEBPACK_IMPORTED_MODULE_44__.default,
/* harmony export */   "smile": () => /* reexport safe */ _smile_jpg__WEBPACK_IMPORTED_MODULE_45__.default,
/* harmony export */   "star": () => /* reexport safe */ _star_svg__WEBPACK_IMPORTED_MODULE_46__.default,
/* harmony export */   "starWin": () => /* reexport safe */ _star_win_svg__WEBPACK_IMPORTED_MODULE_47__.default,
/* harmony export */   "success": () => /* reexport safe */ _success_jpg__WEBPACK_IMPORTED_MODULE_48__.default,
/* harmony export */   "surprised": () => /* reexport safe */ _surprised_jpg__WEBPACK_IMPORTED_MODULE_49__.default,
/* harmony export */   "swim": () => /* reexport safe */ _swim_jpg__WEBPACK_IMPORTED_MODULE_50__.default,
/* harmony export */   "tired": () => /* reexport safe */ _tired_jpg__WEBPACK_IMPORTED_MODULE_51__.default,
/* harmony export */   "turtle": () => /* reexport safe */ _turtle_jpg__WEBPACK_IMPORTED_MODULE_52__.default,
/* harmony export */   "table": () => /* reexport safe */ _table_jpg__WEBPACK_IMPORTED_MODULE_53__.default,
/* harmony export */   "lamp": () => /* reexport safe */ _lamp_jpg__WEBPACK_IMPORTED_MODULE_54__.default,
/* harmony export */   "door": () => /* reexport safe */ _door_jpg__WEBPACK_IMPORTED_MODULE_55__.default,
/* harmony export */   "cupboard": () => /* reexport safe */ _cupboard_jpg__WEBPACK_IMPORTED_MODULE_56__.default,
/* harmony export */   "fridge": () => /* reexport safe */ _fridge_jpg__WEBPACK_IMPORTED_MODULE_57__.default,
/* harmony export */   "window": () => /* reexport safe */ _window_jpg__WEBPACK_IMPORTED_MODULE_58__.default,
/* harmony export */   "armchair": () => /* reexport safe */ _armchair_jpg__WEBPACK_IMPORTED_MODULE_59__.default,
/* harmony export */   "television": () => /* reexport safe */ _television_jpg__WEBPACK_IMPORTED_MODULE_60__.default,
/* harmony export */   "sidewalk": () => /* reexport safe */ _sidewalk_jpg__WEBPACK_IMPORTED_MODULE_61__.default,
/* harmony export */   "road": () => /* reexport safe */ _road_jpg__WEBPACK_IMPORTED_MODULE_62__.default,
/* harmony export */   "tree": () => /* reexport safe */ _tree_jpg__WEBPACK_IMPORTED_MODULE_63__.default,
/* harmony export */   "grass": () => /* reexport safe */ _grass_jpg__WEBPACK_IMPORTED_MODULE_64__.default,
/* harmony export */   "river": () => /* reexport safe */ _river_jpg__WEBPACK_IMPORTED_MODULE_65__.default,
/* harmony export */   "bus": () => /* reexport safe */ _bus_jpg__WEBPACK_IMPORTED_MODULE_66__.default,
/* harmony export */   "train": () => /* reexport safe */ _train_jpg__WEBPACK_IMPORTED_MODULE_67__.default,
/* harmony export */   "sun": () => /* reexport safe */ _sun_jpg__WEBPACK_IMPORTED_MODULE_68__.default,
/* harmony export */   "house": () => /* reexport safe */ _house_jpg__WEBPACK_IMPORTED_MODULE_69__.default,
/* harmony export */   "outdoors": () => /* reexport safe */ _outdoors_jpg__WEBPACK_IMPORTED_MODULE_70__.default
/* harmony export */ });
/* harmony import */ var _angry_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angry.jpg */ "./src/assets/cards-img/angry.jpg");
/* harmony import */ var _bird_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.jpg */ "./src/assets/cards-img/bird.jpg");
/* harmony import */ var _blouse_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blouse.jpg */ "./src/assets/cards-img/blouse.jpg");
/* harmony import */ var _boot_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boot.jpg */ "./src/assets/cards-img/boot.jpg");
/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cat.jpg */ "./src/assets/cards-img/cat.jpg");
/* harmony import */ var _chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chicken.jpg */ "./src/assets/cards-img/chicken.jpg");
/* harmony import */ var _chick_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chick.jpg */ "./src/assets/cards-img/chick.jpg");
/* harmony import */ var _coat_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coat.jpg */ "./src/assets/cards-img/coat.jpg");
/* harmony import */ var _cry_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cry.jpg */ "./src/assets/cards-img/cry.jpg");
/* harmony import */ var _dance_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dance.jpg */ "./src/assets/cards-img/dance.jpg");
/* harmony import */ var _dive_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dive.jpg */ "./src/assets/cards-img/dive.jpg");
/* harmony import */ var _dog_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dog.jpg */ "./src/assets/cards-img/dog.jpg");
/* harmony import */ var _dolphin_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dolphin.jpg */ "./src/assets/cards-img/dolphin.jpg");
/* harmony import */ var _draw_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./draw.jpg */ "./src/assets/cards-img/draw.jpg");
/* harmony import */ var _dress_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dress.jpg */ "./src/assets/cards-img/dress.jpg");
/* harmony import */ var _failure_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./failure.jpg */ "./src/assets/cards-img/failure.jpg");
/* harmony import */ var _fish1_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fish1.jpg */ "./src/assets/cards-img/fish1.jpg");
/* harmony import */ var _fish_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fish.jpg */ "./src/assets/cards-img/fish.jpg");
/* harmony import */ var _fly_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fly.jpg */ "./src/assets/cards-img/fly.jpg");
/* harmony import */ var _frog_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./frog.jpg */ "./src/assets/cards-img/frog.jpg");
/* harmony import */ var _giraffe_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./giraffe.jpg */ "./src/assets/cards-img/giraffe.jpg");
/* harmony import */ var _happy_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./happy.jpg */ "./src/assets/cards-img/happy.jpg");
/* harmony import */ var _horse_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./horse.jpg */ "./src/assets/cards-img/horse.jpg");
/* harmony import */ var _hug_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hug.jpg */ "./src/assets/cards-img/hug.jpg");
/* harmony import */ var _jump_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./jump.jpg */ "./src/assets/cards-img/jump.jpg");
/* harmony import */ var _laugh_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./laugh.jpg */ "./src/assets/cards-img/laugh.jpg");
/* harmony import */ var _lion_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lion.jpg */ "./src/assets/cards-img/lion.jpg");
/* harmony import */ var _mouse_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mouse.jpg */ "./src/assets/cards-img/mouse.jpg");
/* harmony import */ var _open_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./open.jpg */ "./src/assets/cards-img/open.jpg");
/* harmony import */ var _pants_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pants.jpg */ "./src/assets/cards-img/pants.jpg");
/* harmony import */ var _pig_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pig.jpg */ "./src/assets/cards-img/pig.jpg");
/* harmony import */ var _play_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./play.jpg */ "./src/assets/cards-img/play.jpg");
/* harmony import */ var _point_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./point.jpg */ "./src/assets/cards-img/point.jpg");
/* harmony import */ var _rabbit_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rabbit.jpg */ "./src/assets/cards-img/rabbit.jpg");
/* harmony import */ var _repeat_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./repeat.svg */ "./src/assets/cards-img/repeat.svg");
/* harmony import */ var _ride_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ride.jpg */ "./src/assets/cards-img/ride.jpg");
/* harmony import */ var _run_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./run.jpg */ "./src/assets/cards-img/run.jpg");
/* harmony import */ var _sad_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sad.jpg */ "./src/assets/cards-img/sad.jpg");
/* harmony import */ var _scared_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./scared.jpg */ "./src/assets/cards-img/scared.jpg");
/* harmony import */ var _sheep_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./sheep.jpg */ "./src/assets/cards-img/sheep.jpg");
/* harmony import */ var _shirt_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shirt.jpg */ "./src/assets/cards-img/shirt.jpg");
/* harmony import */ var _shoe_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shoe.jpg */ "./src/assets/cards-img/shoe.jpg");
/* harmony import */ var _sing_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sing.jpg */ "./src/assets/cards-img/sing.jpg");
/* harmony import */ var _skip_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./skip.jpg */ "./src/assets/cards-img/skip.jpg");
/* harmony import */ var _skirt_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./skirt.jpg */ "./src/assets/cards-img/skirt.jpg");
/* harmony import */ var _smile_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./smile.jpg */ "./src/assets/cards-img/smile.jpg");
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./star.svg */ "./src/assets/cards-img/star.svg");
/* harmony import */ var _star_win_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./star-win.svg */ "./src/assets/cards-img/star-win.svg");
/* harmony import */ var _success_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./success.jpg */ "./src/assets/cards-img/success.jpg");
/* harmony import */ var _surprised_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./surprised.jpg */ "./src/assets/cards-img/surprised.jpg");
/* harmony import */ var _swim_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./swim.jpg */ "./src/assets/cards-img/swim.jpg");
/* harmony import */ var _tired_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./tired.jpg */ "./src/assets/cards-img/tired.jpg");
/* harmony import */ var _turtle_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./turtle.jpg */ "./src/assets/cards-img/turtle.jpg");
/* harmony import */ var _table_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./table.jpg */ "./src/assets/cards-img/table.jpg");
/* harmony import */ var _lamp_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./lamp.jpg */ "./src/assets/cards-img/lamp.jpg");
/* harmony import */ var _door_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./door.jpg */ "./src/assets/cards-img/door.jpg");
/* harmony import */ var _cupboard_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./cupboard.jpg */ "./src/assets/cards-img/cupboard.jpg");
/* harmony import */ var _fridge_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./fridge.jpg */ "./src/assets/cards-img/fridge.jpg");
/* harmony import */ var _window_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./window.jpg */ "./src/assets/cards-img/window.jpg");
/* harmony import */ var _armchair_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./armchair.jpg */ "./src/assets/cards-img/armchair.jpg");
/* harmony import */ var _television_jpg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./television.jpg */ "./src/assets/cards-img/television.jpg");
/* harmony import */ var _sidewalk_jpg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./sidewalk.jpg */ "./src/assets/cards-img/sidewalk.jpg");
/* harmony import */ var _road_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./road.jpg */ "./src/assets/cards-img/road.jpg");
/* harmony import */ var _tree_jpg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./tree.jpg */ "./src/assets/cards-img/tree.jpg");
/* harmony import */ var _grass_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./grass.jpg */ "./src/assets/cards-img/grass.jpg");
/* harmony import */ var _river_jpg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./river.jpg */ "./src/assets/cards-img/river.jpg");
/* harmony import */ var _bus_jpg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./bus.jpg */ "./src/assets/cards-img/bus.jpg");
/* harmony import */ var _train_jpg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./train.jpg */ "./src/assets/cards-img/train.jpg");
/* harmony import */ var _sun_jpg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./sun.jpg */ "./src/assets/cards-img/sun.jpg");
/* harmony import */ var _house_jpg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./house.jpg */ "./src/assets/cards-img/house.jpg");
/* harmony import */ var _outdoors_jpg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./outdoors.jpg */ "./src/assets/cards-img/outdoors.jpg");
/* harmony import */ var _arrows_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./arrows.png */ "./src/assets/cards-img/arrows.png");
;












































































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map