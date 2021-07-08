const categories = document.querySelectorAll('ul#categories>li');

console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => {

    const title = category.querySelector('h2').textContent;
    console.log(`Категория: ${title}`);

    const quantitySubCategories = category.querySelectorAll('li').length;
    console.log(`Количество элементов:${quantitySubCategories}`);
})


