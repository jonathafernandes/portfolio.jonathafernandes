import React from 'react';
import { BsStack } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
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
                    <BsStack />
                    <span>Conhecimento</span>
                </Link>
            </li>
            <li>
                <Link to="/projects" id="projects">
                    <FaCode />
                    <span>Projetos</span>
                </Link>
            </li>
            <li>
                <a href="https://jonathafernandes.github.io/blog.github.io/" target="_blank" id="articles" rel="noopener noreferrer">
                    <GrArticle />
                    <span>Artigos</span>
                </a>
            </li>
            </ul>
        </section>
        </main>
    );
};

export default Home;
