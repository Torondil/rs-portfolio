/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);
;

const containerHTML = document.createElement('div');
containerHTML.className = 'container';
document.body.appendChild(containerHTML);
const fieldHTML = document.createElement('div');
const footerHTML = document.createElement('div');
const playHTML = document.createElement('button');
const movesHTML = document.createElement('span');
const timerHTML = document.createElement('span');
let count = 0;
fieldHTML.className = 'field';
footerHTML.className = 'footer';
containerHTML.appendChild(fieldHTML);
containerHTML.appendChild(footerHTML);
playHTML.className = 'play';
playHTML.innerHTML = 'Restart';
movesHTML.className = 'moves';
movesHTML.innerHTML = 'Moves: 0';
timerHTML.id = 'timer';
timerHTML.innerHTML = 'Time: 00:00';
footerHTML.appendChild(playHTML);
footerHTML.appendChild(movesHTML);
footerHTML.appendChild(timerHTML);
const field = document.querySelector('.field');
const playBtn = document.querySelector('.play');
const cellSize = 80;
const empty = {
  value: 0,
  top: 0,
  left: 0
};
let sec = 0;
let min = 0;

function tick() {
  sec += 1;
  timerHTML.innerHTML = `Time: ${min}:${sec}`;

  if (sec === 60) {
    timerHTML.innerHTML = `Time: ${min}:00`;
    min += 1;
    sec = 0;
  }

  if (sec < 10) {
    timerHTML.innerHTML = `Time: ${min}:0${sec}`;
  }

  if (min < 10) {
    timerHTML.innerHTML = `Time: 0${min}:${sec}`;
  }

  if (sec < 10 && min < 10) {
    timerHTML.innerHTML = `Time: 0${min}:0${sec}`;
  }
}

function init() {
  setInterval(tick, 1000);
}

document.body.addEventListener('onload', init());
const audio = document.createElement('audio');
audio.id = 'audio';
audio.innerHTML = '<source src="../dist/assets/sfx-13.mp3" type="audio/mpeg" preload="auto">';
document.body.appendChild(audio);

function fPlay() {
  audio.currentTime = 0;
  audio.play();
}

const cells = [];
cells.push(empty);

function move(index) {
  const cell = cells[index];
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);

  if (leftDiff + topDiff > 1) {
    return;
  }

  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;
  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;
  count += 1;
  fPlay();
  movesHTML.innerHTML = `Moves: ${count}`; // eslint-disable-next-line no-shadow

  const isFinished = cells.every(cell => cell.value === cell.top * 4 + cell.left);

  if (isFinished) {
    alert(`Ура! Вы решили головоломку за ${document.getElementById('timer').innerHTML.substring(6, 11)} и ${movesHTML.innerHTML.substring(7, 10)} ходов`);
  }
}

function start() {
  const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

  for (let i = 1; i <= 15; i += 1) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;
    const left = i % 4;
    const top = (i - left) / 4;
    cells.push({
      value,
      left,
      top,
      element: cell
    });
    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;
    field.append(cell);
    cell.addEventListener('click', () => {
      move(i);
    });
  }
}

start();
playBtn.addEventListener('click', () => {
  min = 0;
  sec = 0;
  timerHTML.innerHTML = 'Time: 00:00';
  cells.length = 0;
  cells.push(empty);
  cells[0].left = 0;
  cells[0].top = 0;
  movesHTML.innerHTML = 'Moves: 0';
  count = 0;
  const a = document.querySelectorAll('.cell').length;

  for (let j = 1; j <= a; j += 1) {
    const elem = document.querySelector('.cell');
    elem.remove();
  }

  start();
});

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Gem-puzzle</title>\r\n</head>\r\n<body>\r\n</body>\r\n</html>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map