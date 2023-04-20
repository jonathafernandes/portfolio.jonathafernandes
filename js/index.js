function showInfo(btnShow) {
    const card = btnShow.parentNode;
    const infoAdicional = card.querySelector(".info-adicional")
    if (infoAdicional.style.display === "none") {
        infoAdicional.style.display = "block"
        btnShow.textContent = "🔼"
    } else {
        infoAdicional.style.display = "none"
        btnShow.textContent = "🔽"
    }
}

const btnToTop = document.querySelector(".back-to-top")

btnToTop.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
