function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const routes = {
        '/': '/src/pages/home.html',
        '/about': '/src/pages/about.html',
        '/stack': '/src/pages/stack.html',
        '/projects': '/src/pages/projects.html'
    };

    function router() {
        const path = window.location.pathname;
        const route = routes[path] || routes['/'];
        loadContent(route);
    }

    // Navegação por link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            window.history.pushState({}, path, window.location.origin + path);
            router();
        });
    });

    window.addEventListener('popstate', router);

    router();
});
