export const dialog = document.getElementById('header__popup');
export const dialogOpener = document.querySelector('.header__button_open');
export const dialogCloser = document.querySelector('.modal__button_close');

export const linksScroll = document.querySelectorAll('.links-scroll_js');

export const linksModalScroll = document.querySelectorAll('.links-modal-scroll_js');
export const buttonModalScroll = document.querySelector('.modal-window__button');

export function makeScrollTo(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const viewTo = item.getAttribute('href');
        document.querySelector('' + viewTo).scrollIntoView({ block: "start" });
    })
}

export function closeOnBackDropClick({ currentTarget, target }) {
    const dialog = currentTarget;
    const isClickedOnBackDrop = target === dialog;
    if (isClickedOnBackDrop) {
        dialog.close();
    }
}

export function openModalAndLockScroll() {
    dialog.showModal();
    document.body.classList.add('scroll-lock');
}

export function returnScroll() {
    document.body.classList.remove('scroll-lock');
}

export function close() {
    dialog.close();
    returnScroll();
}

export function makeScrollToModal(item) {
    item.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        const viewTo = item.getAttribute('href');
        close();
        document.querySelector('' + viewTo).scrollIntoView({ block: "start" });
    })
}