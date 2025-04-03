async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Помилка при завантаженні користувачів:", error);
    }
}

async function fetchUserById(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Помилка при завантаженні користувача:", error);
    }
}

fetchUsers();
fetchUserById(1); // Для отримання конкретного користувача
