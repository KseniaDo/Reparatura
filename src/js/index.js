import {
    faq__submenus,
    faq__dropdowns,
    toggleHidden,
    toggleDropdown
} from '../components/faq/faq.js';

import {
    dialog,
    dialogOpener,
    dialogCloser,
    closeOnBackDropClick,
    openModalAndLockScroll,
    returnScroll,
    close,
    linksScroll,
    makeScrollTo,
    linksModalScroll,
    buttonModalScroll,
    makeScrollToModal
} from '../components/header/header.js';

import {
    formValidation,
} from '../components/form/form.js';

faq__submenus.forEach((item) => {toggleHidden(item)});

dialog.addEventListener('click', closeOnBackDropClick);
dialogOpener.addEventListener('click', function(e) {
    openModalAndLockScroll();
});
dialogCloser.addEventListener('click', (e) => {
    e.stopPropagation();
    close();
})

linksScroll.forEach((link) => {makeScrollTo(link)});
linksModalScroll.forEach((link) => {makeScrollToModal(link)});
makeScrollToModal(buttonModalScroll);

const buttonsLinks = document.querySelectorAll('.button[href="#"]');
buttonsLinks.forEach((button) => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const viewTo = button.getAttribute('href');
        document.querySelector('' + viewTo).scrollIntoView({ block: "start" });
    });
})

formValidation();