const apiKey = "46140865-1cf24fb63bb06dafc67be25f6";

export function searchImages(searchString) {
  
    return new Promise ((resolve, rejected) => {
        
        const searchParams = new URLSearchParams({
            key : apiKey,
            q : searchString,
            image_type : "photo",
            orientation : "horizontal",
            safesearch : true,
         });

        let url = `https://pixabay.com/api/?${searchParams}` 

        fetch(url) 
            .then((response) => response.json()) 
            .then((data) => {
              resolve(data); 
            })
            .catch((error) => {
              rejected(error);
            })
    })
}
