export const regExpNumber = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
export const regExpFIO = /^[А-Я]{1}[а-я]*(\s[А-Я]{1}[а-я]*)?(\s[А-Я]{1}[а-я]*)?$/;

export const form = document.querySelector('.form__person');
export const inputsUser = Array.from(form.querySelectorAll('.form__input'));
export const inputUserCheckbox = form.querySelector('.form__input-checkbox-js');
export const buttonElement = form.querySelector('.form__btn');
export const formErrorElement = form.querySelector('.form__empty-error');

export function checkingCorrectInput(inputElement, regExp) {
    if (regExp.test(inputElement.value)) {
        // inputElement.style.outline = "1px solid green";
        inputElement.setCustomValidity('');
    } else {
        // inputElement.style.outline = "1px solid red";
        inputElement.setCustomValidity('Некорретно введены данные!');
    }
}

function toggleInputError(inputElement) {
    if (!inputElement.validity.valid) {
        toggleErrorSpan(inputElement, inputElement.validationMessage);
    } else {
        toggleErrorSpan(inputElement);
    }
}

function toggleButton() {
    if (hasInvalidInput()) {
        buttonElement.classList.add('button-inactive');
        buttonElement.setAttribute('aria-disabled', 'true');
    } else {
        buttonElement.classList.remove('button-inactive');
        buttonElement.setAttribute('aria-disabled', 'false');
        formErrorElement.textContent = '';
    }
}

function hasInvalidInput() {
    return (
        inputsUser.some(inputElement => !inputElement.validity.valid || !inputUserCheckbox.validity.valid)
    )
}

function toggleErrorSpan(inputElement, errorMessage) {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);

    if (errorMessage) {
        inputElement.classList.add('form__type-input-error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('form__error-active');
    } else {
        inputElement.classList.remove('form__type-input-error');
        errorElement.textContent = '';
        errorElement.classList.remove('form__error-active');
    }
}

function formError() {
    const errorMessage = 'Заполните все поля для отправки.';
    formErrorElement.textContent = errorMessage;
}

export function formValidation() {
    toggleButton();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (hasInvalidInput()) {
            formError();
            inputsUser.forEach((inputElement) => {
                if (inputElement.getAttribute('name') == "name") {
                    checkingCorrectInput(inputElement, regExpFIO);
                } else {
                    checkingCorrectInput(inputElement, regExpNumber);
                }
                toggleInputError(inputElement);
            })
            toggleInputError(inputUserCheckbox);
        } else {
            buttonElement.textContent = 'успешно отправлено!';
        }
    });

    inputsUser.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            if (inputElement.getAttribute('name') == "name") {
                checkingCorrectInput(inputElement, regExpFIO);
            } else {
                checkingCorrectInput(inputElement, regExpNumber);
            }
            toggleButton();
        })

        inputElement.addEventListener('blur', () => {
            toggleInputError(inputElement);
        })

        inputElement.addEventListener('focus', () => {
            toggleErrorSpan(inputElement);
        })
    })

    inputUserCheckbox.addEventListener('change', () => {
        toggleInputError(inputUserCheckbox);
        toggleButton();
    })    
}