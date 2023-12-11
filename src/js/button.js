const btnToTop = document.querySelector(".back-to-top")

btnToTop.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
