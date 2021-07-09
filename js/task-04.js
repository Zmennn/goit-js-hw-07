let total = 0
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueOutput = document.querySelector('#value');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    total -= 1;
    valueOutput.textContent = total;
};
function onIncrementButtonClick() {
    total += 1;
    valueOutput.textContent = total;
};