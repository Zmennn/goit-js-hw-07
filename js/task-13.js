const href = {
    firstParagraph: document.querySelector('[data-position="1"]'),
    secondParagraph: document.querySelector('[data-position="2"]'),
    thirdParagraph: document.querySelector('[data-position="3"]'),
    fourthParagraph: document.querySelector('[data-position="4"]'),
    fifthParagraph: document.querySelector('[data-position="5"]'),
    sixthParagraph: document.querySelector('[data-position="6"]'),
};

const handleObserver = (entries) => {

    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("is-visible")
        } else {
            element.target.classList.remove("is-visible")
        }
    }

    )
};

const watcher = new IntersectionObserver(handleObserver, { trashHold: 0.9 });

watcher.observe(href.firstParagraph);
watcher.observe(href.secondParagraph);
watcher.observe(href.thirdParagraph);
watcher.observe(href.fourthParagraph);
watcher.observe(href.fifthParagraph);
watcher.observe(href.sixthParagraph);
