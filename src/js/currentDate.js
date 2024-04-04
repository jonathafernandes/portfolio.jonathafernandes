const currentDateWorking = document.getElementById('current-date-working');
const currentYear = document.getElementById('current-year');

function getMonths() {
    const currentDate = new Date();
    const september2023 = new Date(2023, 7);
    const monthsDiff = (currentDate.getFullYear() - september2023.getFullYear()) * 12 +
        (currentDate.getMonth() - september2023.getMonth());

    return monthsDiff;
}

function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

currentDateWorking.textContent = `${getMonths()} meses`;

currentYear.innerHTML = `&copy; ${getCurrentYear()} Jonatha Fernandes.`;

