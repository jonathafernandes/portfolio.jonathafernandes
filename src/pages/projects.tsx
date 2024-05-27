import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaWindowClose } from 'react-icons/fa';

interface Repository {
    name: string;
    description: string;
    homepage: string;
    html_url: string;
    topics: string[];
    language: string;
}

const specificRepositories = [
    "alaclimabom",
    "links.jonathafernandes",
    "habithub",
    "form-ex-alunos",
    "insight-cast",
    "git-search",
    "notesnest",
    "cv-express",
    "organo",
    "time-generator",
    "nikel",
    "consult-bible",
    "blog.github.io",
    "monteiro-esportes-cms"
];

const openModal = (modal: HTMLDialogElement) => {
    modal.showModal();
    document.body.classList.add('modal-open');
}

const closeModal = (modal: HTMLDialogElement) => {
    modal.close();
    document.body.classList.remove('modal-open');
}

const setupModalEvents = (listItem: HTMLLIElement) => {
    const modal = listItem.querySelector('dialog') as HTMLDialogElement;
    const openModalButton = listItem.querySelector('.repo-image.open-modal') as HTMLButtonElement;
    const closeModalButton = listItem.querySelector('.close-modal') as HTMLButtonElement;

    openModalButton.addEventListener('click', () => {
        openModal(modal);
    });

    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
        closeModal(modal);
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
        closeModal(modal);
        }
    });
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const username = 'jonathafernandes';
                const perPage = 100;
                let allRepositories: Repository[] = [];

                const fetchData = async (url: string) => {
                const response = await axios.get(url);
                allRepositories = allRepositories.concat(response.data);

                const nextLink = response.headers.link && response.headers.link.split(',').find((link: string | string[]) => link.includes('rel="next"'));
                if (nextLink) {
                    const nextUrl = nextLink.split(';')[0].slice(1, -1);
                    await fetchData(nextUrl);
                }
                };

                const initialUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}`;
                await fetchData(initialUrl);

                const filteredRepositories = allRepositories.filter(repo => specificRepositories.includes(repo.name));
                setRepositories(filteredRepositories);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError('Erro ao obter repositórios: ' + error.message);
                } else {
                    setError('Erro ao obter repositórios.');
                }
            }
        };

        fetchRepositories();
    }, []);

    useEffect(() => {
        repositories.forEach(repo => {
            const listItem = document.getElementById(repo.name) as HTMLLIElement;
            if (listItem) {
                setupModalEvents(listItem);
            }
        });
    }, [repositories]);

    return (
        <section className="projects">
        <div className="section-title">
            <h2>Projetos <span>.</span></h2>
        </div>
        <div id="userData">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul id="repositories-list">
            {repositories.map(repo => (
                <li key={repo.name} id={repo.name}>
                <div className="repo-title">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                    <h4>{repo.name}</h4>
                </div>
                <div className="repo-description">
                    <span>{repo.name === 'blog.github.io' ? 'Blog pessoal criado com Quartz, Obsidian e GitHub Pages.' : repo.description}</span>
                    <span className="repo-topics">{repo.topics.map(topic => `#${topic}`).join(' ')}</span>
                </div>
                <div className="repo-language">
                    <span className="repo-language-color"></span>
                    <span>{repo.language}</span>
                </div>
                <br />
                <button className="repo-image open-modal">
                    <img src={`/${repo.name}.png`} alt={repo.name} />
                </button>
                <div className="buttons">
                    <a href={repo.html_url} target="_blank" className="primary-button">Ver mais</a>
                    <a href={repo.homepage || '#'} target="_blank" className={`primary-button ${repo.homepage ? '' : 'not-allowed'}`} style={{ cursor: repo.homepage ? 'pointer' : 'not-allowed' }}>{repo.homepage ? 'Visite' : 'Em breve...'}</a>
                </div>
                <dialog>
                    <div className="modal-content">
                    <button className="close-modal"><FaWindowClose /></button>
                    <img src={`/${repo.name}.png`} alt={repo.name} />
                    </div>
                </dialog>
            </li>
            ))}
        </ul>
        </div>
    </section>
    );
}

export default Projects;