//Menu responsivo:

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = "hidden"

    menuSection.classList.toggle("on", show)
    show = !show
})