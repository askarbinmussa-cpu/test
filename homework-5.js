// Задание №1: Создал функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль.

function showWeather (city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию.`);
}
showWeather(`Алматы`, 5);

// Задание №2: Создал переменную, которая хранит внутри себя скорость света; Добавил функцию сравнения скорости со скоростью света.

const SPEED_OF_LIGHT = 300000;
function compareSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log(`Сверхсветовая скорость`);
  } else if (speed < SPEED_OF_LIGHT) {
    console.log(`Субсветовая скорость`);
  } else {
    console.log(`Скорость света`);
  }
}
compareSpeed(100000);
compareSpeed(300000);
compareSpeed(400000);

// Задание №3: Создал переменную №1, которая содержит продукт и переменную №2, которая содержит его цену;

const productName = `Iphone 18 Pro Max`;
const productPrice = 1500;
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    let needed = productPrice - budget;
    console.log(`Вам не хватает ${needed} $, пополните баланс`);
  }
}
buyProduct(2000);
buyProduct(1000);

// Задание №4: Создал функцию приветствия пользователя.

function greetUser(userName) {
  console.log(`Здравствуйте, ${userName}! Добро пожаловать на сайт.`);
}
greetUser('Аскар абу Зарр');

// Задание №5: Создал 4 переменные.

const myFavoriteCountry = 'КСА';
const myFavoriteCity = 'Мекку';
const mySecondFavoriteCity = 'Медину';
let myAge = 30;
console.log(`Я люблю ${myFavoriteCountry}!`);
console.log(`Я совершу хиджру в ${myFavoriteCity} или в ${mySecondFavoriteCity} ин щаа Аллах!`);
console.log(`Я Аскар абу Зарр, мне ${myAge}лет!`);