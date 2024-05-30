import React from 'react';
import './home.css';

import { BsStack } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';

import HeroCard from "../components/hero-card";

const Home: React.FC = () => {
    return (
        <>
            <section className="hero">
                <h1>Olá, eu sou Jonatha Fernandes - Desenvolvedor Web</h1>
            </section>
            <section className="learn-more">
                <h3>Saiba mais</h3>
                <ul className="learn-more-content">
                    <HeroCard
                        icon={<BsStack />}
                        link="/stack"
                        id="stack"
                        title="Conhecimento"
                    />
                    <HeroCard
                        icon={<FaCode />}
                        link="/projects"
                        id="projects"
                        title="Projetos"
                    />
                    <li>
                        <a href="https://jonathafernandes.github.io/blog.github.io/" target="_blank" id="articles" rel="noopener noreferrer">
                            <GrArticle />
                            <span>Blog</span>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Home;
