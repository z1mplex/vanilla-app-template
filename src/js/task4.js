// task4.js
async function fetchComments(postId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        let comments = await response.json();
        
        comments.forEach(comment => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;
            document.getElementById("commentsContainer").appendChild(li);
        });
    } catch (error) {
        console.error("Помилка при завантаженні коментарів:", error);
    }
}
