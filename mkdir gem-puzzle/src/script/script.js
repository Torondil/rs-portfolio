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
  top: 0,
  left: 0,
};

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
  movesHTML.innerHTML = `Moves: ${count}`;
}

function start() {
  const numbers = [...Array(15).keys()]
    .sort(() => Math.random() - 0.5);

  for (let i = 1; i <= 15; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = numbers[i - 1] + 1;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
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
