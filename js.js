 //help
tippy('[data-tippy-content]', {
     
    placement: 'right',
  });

//----------------------------------------------------------------

//карусель
  const btnLeft = document.querySelector('.reviews__cards__imgleft');
  const btnRight = document.querySelector('.reviews__cards__imgright');
  const carusellEl = document.querySelector('.reviews__cards__carusel');
  const cardsEl = document.querySelectorAll('.reviews__cards__one');
  
  
  const cardWidth = cardsEl[0].offsetWidth;
  
  const totalCards = cardsEl.length;
  
  let currentPosition = 0;
  
  const maxPosition = -((totalCards - 1) * 70) / totalCards;
  
  btnRight.addEventListener('click', function (e) {
    if (currentPosition > maxPosition) {
      currentPosition -= 101.3 / totalCards;
      if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
      }
      carusellEl.style.transform = `translateX(${currentPosition}%)`;
    }
  });
  
  btnLeft.addEventListener('click', function (e) {
    if (currentPosition < 0) {
      currentPosition += 100 / totalCards;
      if (currentPosition > 0) {
        currentPosition = 0;
      }
      carusellEl.style.transform = `translateX(${currentPosition}%)`;
    }
  }); 
  //--------------------------------------------------------------------


const radioActive = document.querySelector('.card__basic__price__month__active');
const radioNone = document.querySelector('.card__basic__price__month__input');
const priceEl = document.querySelector('.card__basic__price__month__price');
const monthEl =document.querySelector('.card__basic__price__month__data');
const textEl = document.querySelector('.card__basic__price__month__text');
const priceEl2 = document.querySelector('.card__basic__price__month__price2');
const monthEl2 = document.querySelector('.card__basic__price__month__data2');
const textEl2 = document.querySelector('.card__basic__price__month__text2');
 
console.log(monthEl2);

radioActive.addEventListener('change', () => {
  if (radioActive.checked) {
     
    priceEl2.classList.add('color');
    monthEl2.classList.add('color');
    textEl2.classList.add('color');

     
    priceEl.classList.remove('color');
    monthEl.classList.remove('color');
    textEl.classList.remove('color');

    priceEl2.classList.remove('color2');
    monthEl2.classList.remove('color2');
    textEl2.classList.remove('color2');
    radioNone.checked = false;
  } 
});

radioNone.addEventListener('change', () => {
  if (radioNone.checked) {
     
    priceEl.classList.add('color');
    monthEl.classList.add('color');
    textEl.classList.add('color');

    priceEl2.classList.add('color2');
    monthEl2.classList.add('color2');
    textEl2.classList.add('color2');
    
    priceEl2.classList.remove('color');
    monthEl2.classList.remove('color');
    textEl2.classList.remove('color');

     
    radioActive.checked = false;
  }
})
 
 