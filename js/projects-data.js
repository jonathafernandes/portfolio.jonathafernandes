async function getSpecificRepositories() {
    try {
        const username = 'jonathafernandes';
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const allRepositories = response.data;
        console.log(allRepositories)

        const specificRepositories = ["alaclimabom", "crud-node", "api-github","decodificador-de-texto","time-generator","todome"];
        const filteredRepositories = allRepositories.filter(repo => specificRepositories.includes(repo.name));

        const repositoriesList = document.getElementById('repositories-list');
        filteredRepositories.forEach(repo => {
        const listItem = document.createElement('li');
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.innerHTML = `
            <div class="title-projects">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <p>${repo.name}</p>
            </div>
            <br>
            <div class="language-projects">
                <span class="repo-language-color"></span>
                <span>${repo.language}</span>
            </div>
        `;
        listItem.appendChild(repoLink);
        repositoriesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao obter repositórios específicos:', error.message);
    }
    }

    window.onload = getSpecificRepositories;
