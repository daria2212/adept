// Script for mobile menu 

var menuBtn = document.querySelector('.toggle');
var menu = document.querySelector('.main-nav');
var wayBtn = document.querySelector('.way-btn--no-js');
var inner = document.querySelector('.main-header__inner--no-js');

menuBtn.classList.remove('toggle--no-js');
menu.classList.remove('main-nav--no-js');
wayBtn.classList.remove('way-btn--no-js');
inner.classList.remove('main-header__inner--no-js');

menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuBtn.classList.toggle('toggle--closed');
    menuBtn.classList.toggle('toggle--opened');
    menu.classList.toggle('main-nav--closed');
    menu.classList.toggle('main-nav--opened');
});