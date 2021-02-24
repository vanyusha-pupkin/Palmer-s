
var hamburger = document.querySelector('.page-header__burger');
var mainNav = document.querySelector('.main-nav__list');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('open')
})
