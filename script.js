const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
//Toggle mobile menu
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu whe the close button is clicked
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu whe the nav link is clicked

    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });

// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//Responsives Breakpoints

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});


//LANGUAGE SCRIPT

const langButtons = document.querySelectorAll("[data-language]");
const textToChange = document.querySelectorAll("[data-section]");
console.log(textToChange);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fetch(`../lang/${button.dataset.language}.json`)
      .then(res => res.json())
      .then(data => {
        textToChange.forEach((el) => {
          const section = el.dataset.section;
          const value = el.dataset.value;

          el.innerHTML = data[section][value];
        })
      })
  })
})


// Cards mobile efect

document.addEventListener('DOMContentLoaded', function() {
        // Selecciona todas las tarjetas
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            // Usa el evento click, que funciona bien para toques en móvil
            card.addEventListener('click', function() {
                // 1. Quitar la clase 'flipped' de cualquier otra tarjeta abierta (para desvoltearla)
                cards.forEach(otherCard => {
                    // Solo desvoltear si no es la tarjeta que acabamos de tocar
                    if (otherCard !== card && otherCard.classList.contains('flipped')) {
                        otherCard.classList.remove('flipped');
                    }
                });

                // 2. Alternar la clase 'flipped' en la tarjeta actual
                // Si ya estaba volteada (flipped), se quita la clase (vuelve al frente).
                // Si no estaba volteada, se añade la clase (se voltea).
                card.classList.toggle('flipped');
            });
        });
    });
