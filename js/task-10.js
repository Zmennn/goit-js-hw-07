// Сделать фиксированый скрол на старнице для менюшки

// 1) Посчитать висоту хедера
// 2) Отслеживаем позицию скролла
// 2) Добавлять клас если скрол больше висоту хедера


let header = document.querySelector(".header");
let nav = document.querySelector(".nav");


// метод .clientHeight возвращает высоту блока на странице 
console.log('высота хедера', header.clientHeight);

let headerH = header.clientHeight;



function toggleMenu() {

    //pageYOffset  вернет величину скролла по вертикальной оси
    console.log('величина скролла', pageYOffset);


    if (pageYOffset > headerH) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
}

//При скролле обратимся к функции, которая сравнит величину скролла с высотой верхнего 
// блока и произведет операции с классом
window.addEventListener("scroll", toggleMenu);