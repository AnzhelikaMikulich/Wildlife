
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

if ($('.slider_body').length > 0){
    $('.slider_body').slick({
        dots: false,
        arrows: true,
        slidesToShow:3,
        autoplaySpeed:3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class = "slick-next" ></button>',
        prevArrow: '<button type="button" class = "slick-prev" ></button>',
        responsive:[{
            breakpoint:1200,
            settings:{
                slidesToShow:2,
            }
        },{
            breakpoint:886,
            settings:{
                slidesToShow:1,
            }
        }
        
    ]
    })
}