// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0000FF';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const greenHashColor = "#00ff44";

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  );
});

// Переход на старицу Google

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm ('Подтвердите действие');
  if (answer === true) {
    window.open('https://google.com');
  }
  else {
    console.log('Отмена действия');
  }
}