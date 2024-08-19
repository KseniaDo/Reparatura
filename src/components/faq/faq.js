export const faq__submenus = document.querySelectorAll('.list__item[data-has-children]');
export const faq__dropdowns = document.querySelectorAll('.list__item[data-has-children] > .list');

export function toggleHidden(item) {
    const dropdown = item.querySelector(':scope > .list');
    dropdown.setAttribute('hidden', '');

    item.addEventListener('click', function(e) {
        toggleDropdown(item, dropdown);
    });
}

export function toggleDropdown(button, dropdown) {
    if (button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('hidden', '');
    } else {
        button.setAttribute('aria-expanded', 'true');
        dropdown.removeAttribute('hidden');
    }
}