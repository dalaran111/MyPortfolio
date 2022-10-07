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

// Promo buttons trigger
promoLink.addEventListener('click', (e) => {
    promoLink.className = "promo__link_active";
    promoLinkActive.className = "promo__link";
});

promoLinkActive.addEventListener('click', (e) => {
    promoLink.className = "promo__link";
    promoLinkActive.className = "promo__link_active";
});

// Page up
document.querySelector('.pageup').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.addEventListener('scroll', function() {
    document.querySelector('.pageup').hidden = (scrollY < 900);
});

// Sidepanel
window.addEventListener('scroll', function() {
    if (scrollY>350) {
        document.querySelector('.sidepanel').style.color = "black"
    } else document.querySelector('.sidepanel').style.color = "#fffa";
});

//Age calc
function ageCalc() {
    var birthDate = new Date(1996, 6 - 1, 4);
    var now = new Date(),
    age = now.getFullYear() - birthDate.getFullYear();
    return (now.setFullYear(1996) < birthDate.setFullYear(1996) ? age - 1 : age);
}
document.querySelector('.aboutme__age').innerHTML = ageCalc();

//
