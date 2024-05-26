import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function errorMassage() {
    iziToast.show({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
        backgroundColor: 'rgb(239, 64, 64)',
        theme: 'dark',
    });
}


export function renderGallery(images, gallery) {
    
    const galleryArr = [];
    images.hits.forEach(image => {
        galleryArr.push( `
                <li class="gallery-item">
                    <div class="gallerys">
                        <a class="gallery-link" href="${image.largeImageURL}">
                            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}";
                        </a>
                    </div>
                    <div class="gallery-item-description">
                        <ul class="gallery-item-list">
                            <li class="gallery-item-list-item">
                                <h3>likes</h3>
                                <p>${image.likes}</p>
                            </li>
                            <li class="gallery-item-list-item">
                                <h3>views</h3>
                                <p>${image.views}</p>
                                </li>
                            <li class="gallery-item-list-item">
                                <h3>comments</h3>
                                <p>${image.comments}</p>
                            </li>
                            <li class="gallery-item-list-item">
                                <h3>downolads</h3>
                                <p>${image.downloads}</p>
                            </li>
                        </ul>
                    </div>
                </li>`
            )
    });
    const addGallery = `${galleryArr.join('')}`;
    console.log(addGallery);
    gallery.innerHTML = addGallery;
}
