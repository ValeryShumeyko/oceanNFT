const iconMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('.header__menu');
const menuList = document.querySelector('.menu__list');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        nav.classList.toggle('flex-column');
        nav.classList.remove('justify-content-between')
        menuList.classList.toggle('d-flex');
        menuList.classList.toggle('flex-column');
    });
}
new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //количество слайдов для показа
    slidesPerView: 'auto',
    //отступ между слайдами
    spaceBetween: 30,
    //количество пролистываемых слайдов
    slidesPerGroup: 1,
    //брейкпоинты
    breakpoints: {
        2400: {
            spaceBetween: 300,
        },
        2000: {
            spaceBetween: 250,
        },
        1900: {
            spaceBetween: 200,
        },
        1800: {
            spaceBetween: 160,
        },
        1700: {
            spaceBetween: 120,
        },
        1600: {
            spaceBetween: 80,
        },
        1500: {
            spaceBetween: 30,
        },
        992: {
            spaceBetween: 20,
        }
    },
    //бесконечное прокручивание
    loop: true,
    //количество дублирующих слайдов
    loopedSlides: 3,
    //свободный режим
    freeMode: true,
});

var images = document.getElementsByClassName("explore-images");
var actives = document.getElementsByClassName('explore-images_active');
window.onload = init;
function init() {
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(eventObj) {
            var currentActive = actives[0];
            if (currentActive)
            currentActive.classList.remove('explore-images_active');

            if (currentActive !== this)
            this.classList.add('explore-images_active');

            var character = document.getElementById('explore-character');
            var image = eventObj.target;
            var name = image.id;
            name = name + ".png";
            character.src = 'img/explore-collections/' + name;
        };
    }
};

let followUsMenu = document.getElementsByClassName('follow-us_menu');
for (let i = 0; i < followUsMenu.length; i++) {
    followUsMenu[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
}

