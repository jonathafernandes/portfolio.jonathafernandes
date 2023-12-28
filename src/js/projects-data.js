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

        const specificRepositories = ["alaclimabom","links.jonathafernandes","habithub","form-ex-alunos","decodificador-de-texto","time-generator","todome","cv-express"];
        const filteredRepositories = allRepositories.filter(repo => specificRepositories.includes(repo.name));

        const repositoriesList = document.getElementById('repositories-list');
        filteredRepositories.forEach(repo => {
        const listItem = document.createElement('li');

        let textButton = 'Visite';
        
        if (repo.homepage === "") {
            textButton = 'Em breve...'
        } 

        listItem.innerHTML = `
            <div class="repo-title">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
                <h4>${repo.name}</h4>
            </div>
            <div class="repo-descripiton">
                <span>${repo.description}<span>
                <span class="repo-topics">#${repo.topics[0]}</span>
            </div>
            <div class="repo-language">
                <span class="repo-language-color"></span>
                <span>${repo.language}</span>
            </div>
            <br>
            <div class="repo-image">
                <img src="./src/assets/${repo.name}.png" alt="">
            </div>
            <div class="buttons">
                <a href="${repo.homepage}" target="_blank" class="button">${textButton}</a>
                <a href="${repo.html_url}" target="_blank" class="button">Ver no GitHub</a>
            </div>
        `;
        repositoriesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao obter repositórios:', error.message);
        userData.innerHTML = `<p style="color: red">Erro ao obter repositórios!</p>`
    }
}

window.onload = getSpecificRepositories;
