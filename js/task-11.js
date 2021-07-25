
//создадим ссылку на наблюдаемый объект
const href = {
    targetText: document.querySelector('.animated-text')
};

//создадим функцию, в нее запишем действия которые выполнит браузер в случае выполнения УСЛОВИЙ , определенных
//самим обсервером и его настройками
const handleObserver = (entries, observer) => {
    console.log(entries);
    if (entries[0].isIntersecting) { href.targetText.classList.add("visible") }
    else {
        href.targetText.classList.remove("visible")
    }
};


//создадим экземпляр обсервера, передадим туда функцию-обработчик, и впишем объект настроек
const watcher = new IntersectionObserver(handleObserver, { trashHold: 1 });


//дадим команду "observe" обсерверу для наблюдения за элементом,
//включим его так сказать
watcher.observe(href.targetText)

