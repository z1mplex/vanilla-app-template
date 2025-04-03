// task5.js
async function fetchPhotos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        let photos = await response.json();
        
        photos.forEach(photo => {
            let img = document.createElement("img");
            img.src = photo.url;
            img.alt = photo.title;
            document.getElementById("photosContainer").appendChild(img);
        });
    } catch (error) {
        console.error("Помилка при завантаженні фото:", error);
    }
}

document.getElementById("loadPhotos").addEventListener("click", fetchPhotos);
