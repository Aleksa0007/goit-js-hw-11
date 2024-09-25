import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImages } from "./js/pixabay-api.js";

import { refreshUI } from "./js/render-function.js";


const form = document.querySelector(`form`);

form.addEventListener("submit", event => {
    event.preventDefault();

    const searchValue = form.elements.search.value.trim();
    if(searchValue === ""){
        return
    }

    searchImages(searchValue)
        .then((jsonImages) => {

            const images = jsonImages["hits"];

            console.log(images);
            refreshUI(images);
        })
        .catch((error) => {
            console.log(error);
        })
})

