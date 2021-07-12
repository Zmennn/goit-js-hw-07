//Слушатели событий сгруппированны так чтобы можно было вывести только одну коллекцию на экран.
//Так задача вроде как сложнее, но ее работа логичнее и красивее, как по мне)


const refs = {
    inputEl: document.querySelector('#controls input'),
    buttonRenderEl: document.querySelector('[data-action="render"]'),
    buttonDestroyEl: document.querySelector('[data-action="destroy"]'),
    containerEl: document.querySelector('#boxes'),
};
let amount = 0;


refs.inputEl.addEventListener('input', onInputAmount);



function onInputAmount(event) {
    refs.buttonRenderEl.addEventListener('click', onRender);

    amount = event.currentTarget.value;
};

function onRender(event) {
    refs.inputEl.removeEventListener('input', onInputAmount);
    refs.buttonDestroyEl.addEventListener('click', onDestroy);
    refs.buttonRenderEl.removeEventListener('click', onRender);

    let size = 30;
    const elements = [];

    for (let i = 0; i < amount; i += 1) {
        const element = document.createElement('div');
        element.classList.add(`number-${i}`);
        element.style.marginBottom = `${5}px`;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
        elements.push(element);
        size += 10;
    };
    refs.containerEl.append(...elements);
};

function onDestroy(event) {
    refs.buttonDestroyEl.removeEventListener('click', onDestroy);
    refs.buttonRenderEl.addEventListener('click', onRender);
    refs.inputEl.addEventListener('input', onInputAmount);

    for (let i = 0; i < amount; i += 1) {
        const destroyEl = document.querySelector(`.number-${i}`);
        destroyEl.remove()
    }
};

