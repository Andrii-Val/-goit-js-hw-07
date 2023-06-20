import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `).join('');
}

const openModal = (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  
  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600" />
  `);

  instance.show();
}

gallery.innerHTML = createGalleryMarkup(galleryItems);
gallery.addEventListener('click', openModal);

console.log(galleryItems);
