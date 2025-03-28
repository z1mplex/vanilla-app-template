document.addEventListener("DOMContentLoaded", () => {
    let timeoutId;
    let intervalId;
    let counter = 0;

    function displayMessage(message, type = "info") {
        console.log(`[LOG] ${message}`);
        const messageBox = document.createElement("div");
        messageBox.textContent = message;
        messageBox.classList.add("message", type);
        
        document.body.appendChild(messageBox);

        setTimeout(() => {
            messageBox.remove();
        }, 3000);
    }

    // Завдання 1: setTimeout
    document.getElementById("start-timeout").addEventListener("click", () => {
        timeoutId = setTimeout(() => {
            console.log("Час вийшов!");
            displayMessage("Час вийшов!", "success");
        }, 5000);
        console.log("Запущено setTimeout на 5 секунд...");
    });

    document.getElementById("cancel-timeout").addEventListener("click", () => {
        clearTimeout(timeoutId);
        displayMessage("Таймер скасовано!", "error");
        console.log("Таймер скасовано!");
    });

    // Завдання 2: setInterval
    document.getElementById("start-interval").addEventListener("click", () => {
        intervalId = setInterval(() => {
            counter++;
            console.log(`Лічильник: ${counter}`);
            displayMessage(`Лічильник: ${counter}`, "info");
        }, 1000);
        console.log("Лічильник запущено.");
    });

    document.getElementById("stop-interval").addEventListener("click", () => {
        clearInterval(intervalId);
        displayMessage("Лічильник зупинено!", "error");
        console.log("Лічильник зупинено!");
    });

    // Завдання 3: Fetch API
    document.getElementById("fetch-data").addEventListener("click", () => {
        console.log("Надсилаємо запит до API...");
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => {
                console.log("Отримані дані:", data);
                displayMessage("Отримано дані!", "success");
            })
            .catch(error => {
                console.error("Помилка запиту:", error);
                displayMessage("Помилка запиту!", "error");
            });
    });
});
