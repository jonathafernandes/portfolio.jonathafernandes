const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        }
    });
    }, { threshold: 0.1 });

    boxes.forEach(box => {
    observer.observe(box);
});