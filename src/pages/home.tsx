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
                        image='others/bg-01-stack-hero.png'
                        icon={<BsStack size={16} />}
                        link="/stack"
                        title="Conhecimento"
                        external={false}
                    />
                    <HeroCard
                        image='others/bg-01-projects-hero.png'
                        icon={<FaCode size={16} />}
                        link="/projects"
                        title="Projetos"
                        external={false}
                    />
                    <HeroCard
                        image='others/bg-01-articles-hero.png'
                        icon={<GrArticle size={16} />}
                        link="https://jonathafernandes.github.io/blog.github.io/"
                        title="Blog"
                        external={true}
                    />
                </ul>
            </section>
        </>
    );
};

export default Home;
