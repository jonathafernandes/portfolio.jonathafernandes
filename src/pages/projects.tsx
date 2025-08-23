import React, { useEffect, useState } from 'react';
import './projects.css';
import axios from 'axios';
import Button from '../components/button';
import Spinner from '../utils/spinner';

import { FaCircle } from 'react-icons/fa';
import { RiGitRepositoryLine } from 'react-icons/ri';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Repository {
    name: string;
    description: string;
    homepage: string;
    html_url: string;
    topics: string[];
    language: string;
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const urlBlog = 'https://jonathafernandes.github.io/blog.github.io/';

    const [openRepo, setOpenRepo] = useState<string | null>(null);

    const handleOpen = (name: string) => {
        setOpenRepo(name);
    };

    const handleClose = () => {
        setOpenRepo(null);
    };

    const theme = useTheme();
    const isFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const perPage = 100;
                let allRepositories: Repository[] = [];

                const fetchData = async (url: string) => {
                    const response = await axios.get(url, {
                        headers: {
                            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                            Accept: 'application/vnd.github.v3+json'
                        }
                    });

                    allRepositories = allRepositories.concat(response.data);

                    const nextLink = response.headers.link && response.headers.link.split(',').find((link: string | string[]) => link.includes('rel="next"'));
                    if (nextLink) {
                        const nextUrl = nextLink.split(';')[0].slice(1, -1);
                        await fetchData(nextUrl);
                    }
                };

                const initialUrl = `https://api.github.com/user/repos?per_page=${perPage}`;
                await fetchData(initialUrl);

                const filteredRepositories = allRepositories.filter(repo => repo.topics.length > 0);

                setRepositories(filteredRepositories);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError('Erro ao obter repositórios: ' + error.message);
                } else {
                    setError('Erro ao obter repositórios.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    // no-op: dialog state is managed via React state (openRepo)

    return (
        <section className="projects">
            <div className="section-title">
                <h2>Projetos <span>.</span></h2>
            </div>
            <div id="userData">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <ul id="repositories-list">
                            {repositories.map(repo => (
                                <li key={repo.name} id={repo.name}>
                                    <div className="repo-title">
                                        <RiGitRepositoryLine />
                                        <h4>{repo.name}</h4>
                                    </div>
                                    <div className="repo-description">
                                        <span>{repo.name === 'blog.github.io' ? 'Blog pessoal criado com Quartz, Obsidian e GitHub Pages.' : repo.description}</span>
                                        <br />
                                        <span className="repo-topics"></span>
                                        {repo.topics.map(topic => (
                                            <span key={topic} className='repo-topics'>#{topic}<br /></span>
                                        ))}
                                    </div>
                                    <div className="repo-language">
                                        <FaCircle color='#514796' size={12} />
                                        <span>{repo.language}</span>
                                    </div>
                                    <button className="repo-image open-modal" onClick={() => handleOpen(repo.name)}>
                                        <img src={`/${repo.name}.png`} alt={repo.name} />
                                    </button>
                                    <div className="buttons">
                                        <Button href={repo.html_url} className="primary-button">
                                            Ver mais
                                        </Button>
                                        <Button
                                            href={repo.name === 'blog.github.io' ? urlBlog : repo.homepage}
                                            className={repo.homepage ? 'primary-button' : 'disabled-button not-allowed'}
                                            disabled={!repo.homepage}
                                        >
                                            {repo.homepage ? 'Visite' : 'Em breve...'}
                                        </Button>
                                    </div>
                                    <Dialog
                                        open={openRepo === repo.name}
                                        onClose={handleClose}
                                        maxWidth="lg"
                                        fullWidth
                                        fullScreen={isFullScreen}
                                    >
                                        <DialogContent className="modal-content">
                                            <button
                                                aria-label="fechar"
                                                onClick={handleClose}
                                                className="dialog-close-button close-modal"
                                            >
                                                <CloseIcon />
                                            </button>
                                            <img
                                                src={`/${repo.name}.png`}
                                                alt={repo.name}
                                                loading="lazy"
                                                style={{ width: '100%', height: 'auto' }}
                                                onError={(e) => { (e.target as HTMLImageElement).src = '/logo/favicon.ico'; }}
                                            />
                                        </DialogContent>
                                    </Dialog>
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
