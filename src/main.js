import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImages } from "./js/pixabay-api.js";

import { refreshUI, clearUI } from "./js/render-function.js";

const form = document.querySelector(`form`);
const loader = document.querySelector(`.loader-container`);

form.addEventListener("submit", event => {
    event.preventDefault();

    const searchValue = form.elements.search.value.trim();
    if(searchValue === ""){
        return 
    }

    loader.style.display = 'flex';

    clearUI();
    

    searchImages(searchValue)
        .then((jsonImages) => {

            const images = jsonImages["hits"];

            console.log(images);

            if(images.length === 0) {
                iziToast.info({
                    title: "Info",
                    message: "Sorry, there are no images matching your search query. Please try again!"
                });
            } else {
                refreshUI(images);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loader.style.display = `none`;
        })
})