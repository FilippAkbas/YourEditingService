

const mobileBirger = document.querySelector('.mobile_burger');
mobileBirger.addEventListener('click', ()=> {
    mobileBirger.classList.toggle('active');
    if(mobileBirger.classList.contains('active')) {
        document.querySelector('.header__menu').classList.add('active');
    } else {
        document.querySelector('.header__menu').classList.remove('active');
    }
})

const ProjectSwiper = new Swiper('.projects-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1620: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
    },
});
const priceSwiper = new Swiper('.price-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1620: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1900: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
    },
});
const businessSwiper = new Swiper('.business-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1620: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.business-button-next',
        prevEl: '.business-button-prev',
    },
});
const familySwiper = new Swiper('.family-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1620: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.family-button-next',
        prevEl: '.family-button-prev',
    },
});
const weddingsSwiper = new Swiper('.weddings-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1620: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.weddings-button-next',
        prevEl: '.weddings-button-prev',
    },
});

document.querySelectorAll('.faq-list .item').forEach(item => {
    console.log(item)
    let height = item.querySelector('.faq-list__title').clientHeight

    item.onclick = function () {
        this.classList.toggle('item_active');

        if(this.classList.contains('item_active')){
            item.querySelector('.faq-list__title button').innerHTML = "-";
        } else {
            item.querySelector('.faq-list__title button').innerHTML = "+";
        }
    }
})