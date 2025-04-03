// task3.js
let currentPage = 1;
const limit = 5;

async function fetchPosts(page, limit) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        let posts = await response.json();
        
        posts.forEach(post => {
            let li = document.createElement("li");
            li.textContent = post.title;
            document.getElementById("postsContainer").appendChild(li);
        });
    } catch (error) {
        console.error("Помилка при завантаженні постів:", error);
    }
}

document.getElementById("loadMore").addEventListener("click", () => {
    currentPage++;
    fetchPosts(currentPage, limit);
});

document.getElementById("reloadButton").addEventListener("click", () => {
    document.getElementById("postsContainer").innerHTML = "";  // Очищаємо список постів
    currentPage = 1;
    fetchPosts(currentPage, limit);  // Завантажуємо першу сторінку
});

// Завантажуємо першу сторінку
fetchPosts(currentPage, limit);
