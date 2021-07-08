const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let a = ingredients.forEach(
    ingredient => {
        const listEl = document.createElement('li');
        listEl.textContent = ingredient;
        // return listEl
        console.log(listEl);

    }
)

console.log(a);