'use strict';
const toggleBtn = document.querySelector('.theme-toggle');
const headerLinks = document.querySelectorAll('.header .link');
const header = document.querySelector('.header');
const feedbackInput = document.querySelector('#feedbackInput');
const feedbackHeading = document.querySelector('.feedback-heading');
const regimeItem = document.querySelectorAll('.regime-item');
const aboutWrapper = document.querySelector('.about__wrapper');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menu');
const innerBurgerMenu = document.querySelector('.menu__list');
const logo = document.querySelector('.logo');
const signup = document.querySelector('.signup');


signup.addEventListener('click', ()=>{

});

burger.addEventListener('click',()=>{
    burgerMenu.classList.toggle('block');
    innerBurgerMenu.classList.toggle('flex');
    if (window.innerWidth < 500) {
        innerBurgerMenu.classList.remove('block');
    }
});

// window.addEventListener('resize', ()=>{
//     if (window.innerWidth < 426){
//         // burgerMenu.style.display = 'none';
//         burgerMenu.classList.add('block');
//     } else{
//         // burgerMenu.style.display = 'block'
//         burgerMenu.classList.remove('block');
//     };
// });

window.addEventListener('resize',()=>{

    if(window.innerWidth < 1025){
        for (let index = 0; index < regimeItem.length; index++) {
            regimeItem[index].style.textAlign = 'center';
        }
        aboutWrapper.style.alignItems = 'center';
    };
});



