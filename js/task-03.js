const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const makeStringGalleryMarkup = image => `<li class="gallery__list"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`;

const makeAllStringGalleryMarkup = images
    .map(makeStringGalleryMarkup)
    .join('');

const listEl = document.querySelector('#gallery');

listEl.insertAdjacentHTML("afterbegin", makeAllStringGalleryMarkup)





