
const refs = {
    videoPlayer: document.querySelector('video'),

};

//Функция включающая и останавливающая видео
const handleVideoObserver = (entries) => {

    if (entries[0].isIntersecting) {
        refs.videoPlayer.play();
    } else {

        refs.videoPlayer.pause();
    }
};


//конструктор обсервера с настройками, срабатывание происходит при появлении половины 
//проигрывателя в окне
const watcher = new IntersectionObserver(handleVideoObserver, { trashHold: 1 });


//запустим обсервер
watcher.observe(refs.videoPlayer);



