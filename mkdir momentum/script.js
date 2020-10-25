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
  if (min == 00 && second == 00) {
    getImage();
  }
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
    if (focus.innerHTML !== '') {
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

const baseDay = './assets/images/day/',
  baseEvening = './assets/images/evening/',
  baseMorning = './assets/images/morning/',
  baseNight = './assets/images/night/';

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 1;
let j = 1;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  console.log(src);
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

function getImage() {
  let today = new Date();
  hour = today.getHours();
  if (6 <= hour && hour <= 12) {
    // Morning
    var a = baseMorning;
  } else if (12 <= hour && hour <= 18) {
    // Day
    var a = baseDay;
  } else if (18 <= hour && hour <= 24) {
    // Evening
    var a = baseEvening;
  } else {
    // Night
    var a = baseNight;
  }
  const index = i % images.length;
  const imageSrc = a + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  console.log(today);
  setTimeout(function() { btn.disabled = false }, 1000);
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

// Цитата
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');

async function getQuote() {
  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const res = await fetch(url);
  const data = await res.json();
  var quoteRandom = data.quotes[Math.floor(Math.random()*data.quotes.length)];
  blockquote.textContent = quoteRandom.quote;
  figcaption.textContent = quoteRandom.author;
}

document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if (6 <= hour && hour <= 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('./assets/images/morning/01.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (12 <= hour && hour <= 18) {
    // Day
    document.body.style.backgroundImage =
      "url('./assets/images/day/01.jpg')";
    greeting.textContent = 'Good Day, ';
  } else if (18 <= hour && hour <= 24) {
    // Evening
    document.body.style.backgroundImage =
      "url('./assets/images/evening/01.jpg')";
    greeting.textContent = 'Good Evening, ';
  } else {
    // Night
    document.body.style.backgroundImage =
      "url('./assets/images/night/01.jpg')";
    greeting.textContent = 'Good Night, ';
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

// Weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=1813d6676e7a9fc29828aa2fea87886b&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
  } catch(err) {
    alert('Метеорологических данных по такому городу нет!');
  }
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
    localStorage.setItem('city', event.target.innerHTML)
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('click', () => city.innerHTML = '')

function getCity() {
  if (localStorage.getItem('city') === null) {
    city.innerHTML = 'Минск';
    localStorage.сity = 'Минск';
  } else {
    city.innerHTML = localStorage.getItem('city');
  }
}

getCity();
