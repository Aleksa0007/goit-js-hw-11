import SimpleLightbox from  "simplelightbox" ;
import  "simplelightbox/dist/simple-lightbox.min.css" ;

const lightbox = new SimpleLightbox('.gallery-container a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const gallery = document.querySelector(".gallery-container");

export function refreshUI(images) {

    const htmlMarkup = images
    .map((image) => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${image["largeImageURL"]}">
                <img class="gallery-image" src="${image["webformatURL"]}" alt="${image["tags"]}" />
            </a>
        </li>`)
    .join("");
    
    gallery.innerHTML = htmlMarkup;

    lightbox.refresh();
}