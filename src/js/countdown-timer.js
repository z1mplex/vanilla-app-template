
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("datetime-picker");
    const startButton = document.getElementById("start-timer");
    const daysEl = document.querySelector("[data-days]");
    const hoursEl = document.querySelector("[data-hours]");
    const minutesEl = document.querySelector("[data-minutes]");
    const secondsEl = document.querySelector("[data-seconds]");

    let countdownDate = null;
    let timerId = null;

    flatpickr(input, {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        locale: {
            firstDayOfWeek: 1
        },
        onClose(selectedDates) {
            const selectedDate = selectedDates[0];
            if (selectedDate < new Date()) {
                alert("Будь ласка, виберіть дату в майбутньому");
                startButton.disabled = true;
            } else {
                countdownDate = selectedDate;
                startButton.disabled = false;
            }
        },
    });

    startButton.addEventListener("click", () => {
        if (!countdownDate) return;

        clearInterval(timerId);

        timerId = setInterval(() => {
            const now = new Date();
            const diff = countdownDate - now;

            if (diff <= 0) {
                clearInterval(timerId);
                alert("Час вийшов!");
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            daysEl.textContent = days.toString().padStart(2, "0");
            hoursEl.textContent = hours.toString().padStart(2, "0");
            minutesEl.textContent = minutes.toString().padStart(2, "0");
            secondsEl.textContent = seconds.toString().padStart(2, "0");
        }, 1000);
    });
});
