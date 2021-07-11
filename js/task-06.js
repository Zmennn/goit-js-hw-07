const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidCheck);
inputEl.addEventListener('focus', onFocusClean);

function onValidCheck(event) {

    event.currentTarget.value.length == inputEl.dataset.length ?
        event.currentTarget.classList.add('valid')
        : event.currentTarget.classList.add('invalid');
};

function onFocusClean(event) {
    event.currentTarget.classList.remove('valid', 'invalid');
};