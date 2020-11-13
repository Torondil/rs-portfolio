import '../styles/style.css';
import '../styles/font.css';

import '../index.html';

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
  left: 0,
};

let sec = 0;
let min = 0;
function tick() {
  sec += 1;
  document.getElementById('timer')
    .innerHTML = `Time: ${min}:${sec}`;

  if (sec === 60) {
    document.getElementById('timer')
      .innerHTML = `Time: ${min}:00`;
    min += 1;
    sec = 0;
  }
  if (sec < 10) {
    document.getElementById('timer')
      .innerHTML = `Time: ${min}:0${sec}`;
  }

  if (min < 10) {
    document.getElementById('timer')
      .innerHTML = `Time: 0${min}:${sec}`;
  }

  if (sec < 10 && min < 10) {
    document.getElementById('timer')
      .innerHTML = `Time: 0${min}:0${sec}`;
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

const restart = document.createElement('audio');
restart.id = 'audio';
restart.innerHTML = '<source src="../dist/assets/iren.mp3" type="audio/mpeg" preload="auto">';
document.body.appendChild(restart);

function restartPlay() {
  restart.currentTime = 0;
  restart.play();
}

timerHTML.addEventListener('click', () => { restartPlay(); });

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
  movesHTML.innerHTML = `Moves: ${count}`;
  // eslint-disable-next-line no-shadow
  const isFinished = cells.every((cell) => cell.value === cell.top * 4 + cell.left);
  if (isFinished) {
    alert(`Ура! Вы решили головоломку за ${document.getElementById('timer')
      .innerHTML.substring(6, 11)} и ${movesHTML.innerHTML.substring(7, 10)} ходов`);
  }
}

function start() {
  const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

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
      element: cell,
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
