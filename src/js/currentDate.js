const currentYear = document.getElementById('current-year');

function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

currentYear.innerHTML = `&copy; ${getCurrentYear()} Jonatha Fernandes.`;

