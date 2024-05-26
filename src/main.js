const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery-list");
const loader = document.querySelector("#loader");
let galleryList = document.querySelector(".gallerys");

import {search} from "./js/pixabay-api";
import {errorMassage} from "./js/render-functions";
import {renderGallery} from "./js/render-functions";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

form.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = "";
    loader.style.display = "block";
    const q = form.elements.searchItem.value.replace(" ", "+");
    search(q).then(
        (images) => {
            loader.style.display = "none";
            if(images.hits.length != 0) {
                renderGallery(images, gallery);
                galleryList.refresh();
            }else{
                errorMassage();
            }
        }
    )
    .catch((error) => console.log(`error ${error}`));

})

galleryList = new SimpleLightbox('.gallerys a', {
    captionDelay: 200,
  });
