const btnToTop = document.querySelector(".back-to-top")

btnToTop.style.display = "none";

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        btnToTop.style.display = "block";
    } else { 
        btnToTop.style.display = "none";
    }
});

btnToTop.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});