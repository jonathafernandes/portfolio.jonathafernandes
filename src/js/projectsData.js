import { setupModalEvents } from './modal.js';

const userData = document.getElementById("userData");

async function getSpecificRepositories() {
    try {
        const username = 'jonathafernandes';
        const perPage = 100;
        let allRepositories = [];

        const fetchData = async (url) => {
            const response = await axios.get(url);
            allRepositories = allRepositories.concat(response.data);

            const nextLink = response.headers.link && response.headers.link.split(',').find(link => link.includes('rel="next"'));
            if (nextLink) {
                const nextUrl = nextLink.split(';')[0].slice(1, -1);
                await fetchData(nextUrl);
            }
        };

        const initialUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}`;
        await fetchData(initialUrl);

        const specificRepositories = ["alaclimabom","links.jonathafernandes","habithub","form-ex-alunos","insight-cast","git-search","notesnest","cv-express","organo","time-generator","nikel","consult-bible","blog.github.io","monteiro-esportes-cms"];
        const filteredRepositories = allRepositories.filter(repo => specificRepositories.includes(repo.name));

        const repositoriesList = document.getElementById('repositories-list');
        filteredRepositories.forEach(repo => {
            const listItem = document.createElement('li');

            let textButton = 'Visite';
            let buttonClass = '';

            if (repo.homepage === "") {
                textButton = 'Em breve...'
                buttonClass = 'not-allowed';
            }

            let definiteDescription = `<span>${repo.description}</span>`;

            if (repo.name === 'blog.github.io') {
                definiteDescription = `<span>Blog pessoal criado com Quartz, Obsidian e GitHub Pages.</span>`;
            }

            const topics = repo.topics.map(topic => `#${topic}`).join(' ');

            listItem.innerHTML = `
                <div class="repo-title">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <h4>${repo.name}</h4>
                </div>
                <div class="repo-descripiton">
                    <span>${definiteDescription}<span>
                    <span class="repo-topics">${topics}</span>
                </div>
                <div class="repo-language">
                    <span class="repo-language-color"></span>
                    <span>${repo.language}</span>
                </div>
                <br>
                <button class="repo-image open-modal">
                    <img src="/${repo.name}.png" alt="">
                </button>
                <div class="buttons">
                <a href="${repo.html_url}" target="_blank" class="primary-button">Ver mais</a>
                    <a href="${repo.homepage}" target="_blank" class="primary-button ${buttonClass}" ${buttonClass === 'not-allowed' ? 'disabled' : ''}>${textButton}</a>
                </div>
                <dialog>
                    <div class="modal-content">
                        <button class="close-modal"><i class="fa-solid fa-rectangle-xmark"></i></button>
                        <img src="/${repo.name}.png" alt="">
                    </div>
                </dialog>
            `;
            
            repositoriesList.appendChild(listItem);
            setupModalEvents(listItem);

            if (textButton === 'Em breve...') {
                const buttonElement = listItem.querySelector('.primary-button.not-allowed');
                buttonElement.style = 'background-color: #bab7b6; color: #858585; cursor: not-allowed';
                buttonElement.addEventListener('click', (event) => {
                    event.preventDefault();
                });
            }
        });

    } catch (error) {
        console.error('Erro ao obter repositórios:', error.message);
        userData.innerHTML = `<p style="color: red">Erro ao obter repositórios!</p>`
    }
}

window.onload = getSpecificRepositories;
