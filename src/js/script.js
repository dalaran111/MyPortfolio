// Menu Trigger
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link'),
      promoLink = document.querySelector('.promo__link'),
      promoLinkActive = document.querySelector('.promo__link_active'),
      overlayElem = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

promoLink.addEventListener('click', (e) => {
    promoLink.className = "promo__link_active";
    promoLinkActive.className = "promo__link";
});

promoLinkActive.addEventListener('click', (e) => {
    promoLink.className = "promo__link";
    promoLinkActive.className = "promo__link_active";
});
//