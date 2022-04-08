

// ================================================== 
let burger = document.querySelector('.header__box-burger');
let nav = document.querySelector('.header__box-nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active')
  if (nav.style.display === 'block'){
    nav.style.display = 'none';
  }
  else {
    nav.style.display = 'block';
  }
});

// ===========================================================

$('.slyder1__box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ===========================================================

$('.slyder2__box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ==========================================

let accord = document.querySelectorAll('.questions__item-wrap');
let show = document.querySelectorAll('.questions__item-txt');

let imgee = document.querySelectorAll('.questions__image-arrow');

 

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener('click', function() {
    show[i].classList.toggle('questions__item-txt-active');
    imgee[i].classList.toggle('questions__image-arrow--active');    
  });

}