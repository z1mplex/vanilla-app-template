function fetchNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(42);
        }, 2000);
    });
}

async function getNumber() {
    try {
        let number = await fetchNumber();
        console.log(number);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

getNumber();
