import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <main>
        <section className="hero">
            <h1>Olá, eu sou Jonatha Fernandes - Desenvolvedor Web</h1>
        </section>
        <section className="learn-more">
            <h3>Saiba mais</h3>
            <ul className="learn-more-content">
            <li>
                <Link to="/stack" id="stack">
                <i className="fa-solid fa-layer-group"></i>
                <span>Conhecimento</span>
                </Link>
            </li>
            <li>
                <Link to="/projects" id="projects">
                <i className="fa-solid fa-code"></i>
                <span>Projetos</span>
                </Link>
            </li>
            <li>
                <a href="https://jonathafernandes.github.io/blog.github.io/" target="_blank" id="articles" rel="noopener noreferrer">
                <i className="fa-solid fa-newspaper"></i>
                <span>Artigos</span>
                </a>
            </li>
            </ul>
        </section>
        </main>
    );
};

export default Home;
