
const header__burger = document.querySelector('.icon-menu');
const header_menu = document.querySelector('.menu_body');
const back = document.querySelector('body');
const header__list = document.querySelector('.menu_list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}
//СЛАЙДЕР
let ofset = 0;
const slider_body = document.querySelector('.slider_body');
const slider_next = document.querySelector('.slider_next');
const slider_prev = document.querySelector('.slider_prev');


slider_next.addEventListener('click',function() {
    ofset = ofset + 360;
    if(ofset > 1180){
        ofset = 0
    }
    slider_body.style.left = -ofset + 'px'

})
slider_prev.addEventListener('click',function() {
    ofset = ofset - 360;
    if(ofset < 0){
        ofset = 1180
    }
    slider_body.style.left = -ofset + 'px'
    
})