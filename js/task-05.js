const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {

    event.currentTarget.value.trim() ?
        textEl.textContent = event.currentTarget.value :
        textEl.textContent = 'незнакомец'

};