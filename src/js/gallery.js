import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// comment to future
const galleryList = document.querySelector('.gallery');

galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '30px';

function createGallery(images) {
  const makeitem = images
    .map(
      ({ preview, original, description }) => `
  <li>
    <a href='${original}'>
        <img src="${preview}" alt="${description}" >
    </a>
  </li>
    `
    )
    .join('');
  galleryList.insertAdjacentHTML('afterbegin', makeitem);
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
