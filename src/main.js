const form = document.querySelector(".search-form");
const galllary = document.querySelector(".gallary-box");
import {search} from "./js/pixabay-api";

form.addEventListener("submit", event => {
    event.preventDefault();
    const q = form.elements.searchItem.value.replace(" ", "+");
    search(q).then(
        (images) => console.log(images)
    )
    .catch((error) => console.log(`error ${error}`));

})