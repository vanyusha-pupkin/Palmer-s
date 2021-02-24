var sliderControl_1 = document.querySelector('.controls__toggle--1');
var sliderControl_2 = document.querySelector('.controls__toggle--2');
var sliderControl_3 = document.querySelector('.controls__toggle--3');

var sliderItem_1 = document.querySelector('.slider-main__item--1');
var sliderItem_2 = document.querySelector('.slider-main__item--2');
var sliderItem_3 = document.querySelector('.slider-main__item--3');


sliderControl_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItem_1.classList.add('is-active');
  sliderItem_2.classList.remove('is-active');
  sliderItem_3.classList.remove('is-active');

  sliderControl_1.classList.add('is-active');
  sliderControl_2.classList.remove('is-active');
  sliderControl_3.classList.remove('is-active');
})

sliderControl_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItem_1.classList.remove('is-active');
  sliderItem_2.classList.add('is-active');
  sliderItem_3.classList.remove('is-active');

  sliderControl_1.classList.remove('is-active');
  sliderControl_2.classList.add('is-active');
  sliderControl_3.classList.remove('is-active');
})

sliderControl_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItem_1.classList.remove('is-active');
  sliderItem_2.classList.remove('is-active');
  sliderItem_3.classList.add('is-active');

  sliderControl_1.classList.remove('is-active');
  sliderControl_2.classList.remove('is-active');
  sliderControl_3.classList.add('is-active');
})
