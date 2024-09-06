// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const modalGallery = document.querySelector(".gallery")

const createGallery = (photos) => {
    return photos
    .map((photos) => {
        const{preview, original, description} = photos;
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      data-source="${original}
      alt="${description}" />
   </a>
</li> `;    
    })
    .join("");
}

const renderGallery = () => {
    modalGallery.innerHTML = createGallery(galleryItems);
 };
 renderGallery();
 
 const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionDelay: 250,  
  })
