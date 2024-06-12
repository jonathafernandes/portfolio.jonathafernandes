import React from 'react';
import './stack.css';
import StackCard from '../components/stack-card';

import html5Logo from '/public/techs/html.svg';
import css3Logo from '/public/techs/css.svg';
import gitLogo from '/public/techs/git.svg';
import sassLogo from '/public/techs/sass.svg';
import javascriptLogo from '/public/techs/javascript.svg';
import bootstrapLogo from '/public/techs/bootstrap-5-logo-icon.svg';
import reactLogo from '/public/techs/react.svg';
import tailwindcssLogo from '/public/techs/tailwindcss.svg';
import typescriptLogo from '/public/techs/typescript.svg';
import viteLogo from '/public/techs/vite.svg';
import nodeLogo from '/public/techs/nodejs.svg';

const techStack = [
    {
        image: html5Logo,
        tech: "HTML",
        description: "Utilizada para criar e estruturar conteúdo na web."
    },
    {
        image: css3Logo,
        tech: "CSS",
        description: "Linguagem de estilo usada para descrever a apresentação."
    },
    {
        image: gitLogo,
        tech: "Git",
        description: "Controle de versão para gerenciar e rastrear mudanças no código-fonte durante o desenvolvimento de software."
    },
    {
        image: sassLogo,
        tech: "SASS",
        description: "Linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações."
    },
    {
        image: javascriptLogo,
        tech: "JavaScript",
        description: "Linguagem de alto nível, usada principalmente para criar interatividade em páginas web."
    },
    {
        image: bootstrapLogo,
        tech: "Bootstrap",
        description: "Ferramenta para criar interfaces web responsivas."
    },
    {
        image: reactLogo,
        tech: "React",
        description: "Biblioteca JavaScript para construção de interfaces de usuário reutilizáveis e componentizadas."
    },
    {
        image: tailwindcssLogo,
        tech: "Tailwind CSS",
        description: "Framework CSS que permite criar designs personalizados sem sair do HTML."
    },
    {
        image: typescriptLogo,
        tech: "TypeScript",
        description: "Superset de JavaScript que adiciona recursos de tipagem estática para melhorar a produtividade no desenvolvimento."
    },
    {
        image: viteLogo,
        tech: "Vite",
        description: "Build tool que visa ser uma alternativa mais rápida para o Webpack."
    },
    {
        image: nodeLogo,
        tech: "Node.js",
        description: "Plataforma que permite executar JavaScript no lado do servidor."
    }
];

const Stack: React.FC = () => {
    return (
        <main>
            <section className="stack">
                <div className="section-title">
                    <h2>Conhecimento <span>.</span></h2>
                </div>
                <div className="cards-techs">
                    {techStack.map((tech, index) => (
                        <StackCard
                            key={index}
                            image={tech.image}
                            tech={tech.tech}
                            description={tech.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Stack;