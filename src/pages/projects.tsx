import React, { useEffect, useState } from "react";
import "./projects.css";
import axios from "axios";
import Button from "../components/button";
import Spinner from "../utils/spinner";

import { FaCircle, FaWindowClose } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";

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
    "monteiro-esportes-cms",
];

// const openModal = (modal: HTMLDialogElement) => {
//     modal.showModal();
//     document.body.classList.add("modal-open");
// };

// const closeModal = (modal: HTMLDialogElement) => {
//     modal.close();
//     document.body.classList.remove("modal-open");
// };

// const setupModalEvents = (listItem: HTMLLIElement) => {
//     const modal = listItem.querySelector("dialog") as HTMLDialogElement;
//     const openModalButton = listItem.querySelector(
//         ".repo-image.open-modal",
//     ) as HTMLButtonElement;
//     const closeModalButton = listItem.querySelector(
//         ".close-modal",
//     ) as HTMLButtonElement;

//     openModalButton.addEventListener("click", () => {
//         openModal(modal);
//     });

//     closeModalButton.addEventListener("click", () => {
//         closeModal(modal);
//     });

//     document.addEventListener("keydown", (event) => {
//         if (event.key === "Escape") {
//             closeModal(modal);
//         }
//     });

//     modal.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             closeModal(modal);
//         }
//     });
// };

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const urlBlog = "https://jonathafernandes.github.io/blog.github.io/";

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const username = "jonathafernandes";
                const perPage = 100;
                let allRepositories: Repository[] = [];

                const fetchData = async (url: string) => {
                    const response = await axios.get(url);
                    allRepositories = allRepositories.concat(response.data);

                    const nextLink =
                        response.headers.link &&
                        response.headers.link
                            .split(",")
                            .find((link: string | string[]) =>
                                link.includes('rel="next"'),
                            );
                    if (nextLink) {
                        const nextUrl = nextLink.split(";")[0].slice(1, -1);
                        await fetchData(nextUrl);
                    }
                };

                const initialUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}`;
                await fetchData(initialUrl);

                const filteredRepositories = allRepositories.filter((repo) =>
                    specificRepositories.includes(repo.name),
                );
                setRepositories(filteredRepositories);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError("Erro ao obter repositórios: " + error.message);
                } else {
                    setError("Erro ao obter repositórios.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    // useEffect(() => {
    //     repositories.forEach((repo) => {
    //         const listItem = document.getElementById(
    //             repo.name,
    //         ) as HTMLLIElement;
    //         if (listItem) {
    //             setupModalEvents(listItem);
    //         }
    //     });
    // }, [repositories]);

    return (
        <section className="projects">
            <div className="section-title">
                <h2>
                    Projetos <span>.</span>
                </h2>
            </div>
            <div id="userData">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <ul id="repositories-list">
                            {repositories.map((repo) => (
                                <li key={repo.name} id={repo.name}>
                                    <div className="repo-title">
                                        <RiGitRepositoryLine />
                                        <h4>{repo.name}</h4>
                                    </div>
                                    <div className="repo-description">
                                        <span>
                                            {repo.name === "blog.github.io"
                                                ? "Blog pessoal criado com Quartz, Obsidian e GitHub Pages."
                                                : repo.description}
                                        </span>
                                        <br />
                                        <span className="repo-topics"></span>
                                        {repo.topics.map((topic) => (
                                            <span
                                                key={topic}
                                                className="repo-topics"
                                            >
                                                #{topic}
                                                <br />
                                            </span>
                                        ))}
                                    </div>
                                    <div className="repo-language">
                                        <FaCircle color="#514796" size={12} />
                                        <span>{repo.language}</span>
                                    </div>
                                    <br />
                                    <button className="repo-image open-modal">
                                        <img
                                            src={`/${repo.name}.png`}
                                            alt={repo.name}
                                        />
                                    </button>
                                    <div className="buttons">
                                        <Button
                                            href={repo.html_url}
                                            className="primary-button"
                                        >
                                            Ver mais
                                        </Button>
                                        <Button
                                            href={
                                                repo.name === "blog.github.io"
                                                    ? urlBlog
                                                    : repo.homepage
                                            }
                                            className={
                                                repo.homepage
                                                    ? "primary-button"
                                                    : "disabled-button not-allowed"
                                            }
                                            disabled={!repo.homepage}
                                        >
                                            {repo.homepage
                                                ? "Visite"
                                                : "Em breve..."}
                                        </Button>
                                    </div>
                                    {/* <dialog>
                                        <div className="modal-content">
                                            <button className="close-modal">
                                                <FaWindowClose />
                                            </button>
                                            <img
                                                src={`/${repo.name}.png`}
                                                alt={repo.name}
                                            />
                                        </div>
                                    </dialog> */}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
};

export default Projects;
