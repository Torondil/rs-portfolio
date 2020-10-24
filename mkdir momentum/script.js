const time = document.querySelector('.time'),
greeting = document.querySelector('.greeting'),
name = document.querySelector('.name'),
focus = document.querySelector('.focus'),
date = document.querySelector('.date'),
nameMemory = localStorage.name;
monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function showTime() {
  let today = new Date(),
  min = today.getMinutes(),
  hour = today.getHours(),
  second = today.getSeconds(),
  month = today.getMonth(),
  dateNumber = today.getDate(),
  dayOfWeek = today.toLocaleString('ru', {weekday: 'long'});
  date.innerHTML = `${dayOfWeek}, ${dateNumber} ${monthList[month]}`;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(second)}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function deleteName(e) {
  name.innerHTML = '';
}

function deleteFocus(e) {
  focus.innerHTML = '';
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.innerHTML = '[Enter Name]';
    localStorage.name = '[Enter Name]';
  } else {
    name.innerHTML = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress' && (e.which == 13 || e.keyCode == 13)) {
    name.blur();
    if (name.innerHTML !== '') {
      localStorage.setItem('name', e.target.innerHTML);
    }
  } else {
    if(name.innerHTML !== '') {
      localStorage.setItem('name', e.target.innerHTML);
    }
    else if (name.innerHTML == '' && e.type !== 'keypress') {
      name.innerHTML = localStorage.getItem('name');
    }
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.innerHTML = '[Enter Focus]';
    localStorage.focus = '[Enter Focus]';
  } else {
    focus.innerHTML = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress' && (e.which == 13 || e.keyCode == 13)) {
    focus.blur();
    if (name.innerHTML !== '') {
      localStorage.setItem('focus', e.target.innerHTML);
    }
  } else {
    if(focus.innerHTML !== '') {
      localStorage.setItem('focus', e.target.innerHTML);
    }
    else if (focus.innerHTML == '' && e.type !== 'keypress') {
      focus.innerHTML = localStorage.getItem('focus');
    }
  }
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

name.addEventListener('click', deleteName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', deleteFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
showTime();
getName();
getFocus();
setBgGreet();


// function setBgImage() {
//   внутри условие поменять картинку когда
//   if (min == 00 && sec == 00) {
//       if (hour < 12 && 06 < hour) {
//   и так далее
//   вызывается getImage(baseMorning, imagesMorning, 1); это метод поменять картинку
//   }

//   сам же метод setBgImage() вызывается отдельно в самом низу
// async function getQuote() {
//   const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
//   const res = await fetch(url);
//   console.log('res', res)
//   const data = await res.json();
//   console.log('data', data)
// }

// document.addEventListener('DOMContentLoaded', getQuote);
