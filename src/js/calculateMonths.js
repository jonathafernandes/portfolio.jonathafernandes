const currentDateWorking = document.getElementById('current-date-working');

function getMonths() {
    const currentDate = new Date();
    const september2023 = new Date(2023, 7);
    const monthsDiff = (currentDate.getFullYear() - september2023.getFullYear()) * 12 +
        (currentDate.getMonth() - september2023.getMonth());

    return monthsDiff;
}

currentDateWorking.textContent = `${getMonths()} meses`;