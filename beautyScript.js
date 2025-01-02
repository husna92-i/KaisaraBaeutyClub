// SLIDER
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25, 
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

// Select all buttons
const buttons = document.querySelectorAll('.button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const url = event.target.getAttribute('data-url');
        if (url) {
            window.location.href = url; // Redirect to the URL
        }
    });
});

     
