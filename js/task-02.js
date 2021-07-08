const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const makeListElArray = ingredients => {
    return ingredients.map(
        ingredient => {
            const listEl = document.createElement('li');
            listEl.textContent = ingredient;
            return listEl
        }
    )
};

const listElArray = makeListElArray(ingredients);
const list = document.querySelector('#ingredients');
list.append(...listElArray);