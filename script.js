//Menu responsivo

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    document.querySelector(".back-to-top").style.display = show ? "none" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

//Botão para voltar ao topo
var btn = document.querySelector(".back-to-top");

btn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
