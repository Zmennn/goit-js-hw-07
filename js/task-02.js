const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listElArray = [];

ingredients.forEach(
    ingredient => {
        const listEl = document.createElement('li');
        listEl.textContent = ingredient;
        listElArray.push(listEl);
    }
);
const list = document.querySelector('#ingredients')
list.append(...listElArray)