import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `).join('');}
    const openModal = (event) => {
        event.preventDefault();
        
        if (event.target.nodeName !== 'IMG') {
          return;
        };
        
      }


      var lightbox = new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: 'bottom',
 
 });
 

gallery.addEventListener('click', openModal);
gallery.innerHTML = createGalleryItems(galleryItems);
console.log(galleryItems);
