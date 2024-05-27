import React from 'react';

const Stack: React.FC = () => {
    return (
        <main>
        <section className="stack">
            <div className="section-title">
            <h2>Conhecimento <span>.</span></h2>
            </div>
            <div className="cards-techs">
            <div className="card">
                <img src="/public/techs/html.svg" alt="HTML" />
                <span>HTML</span>
                <p>Utilizada para criar e estruturar conteúdo na web.</p>
            </div>
            <div className="card">
                <img src="/public/techs/css.svg" alt="CSS" />
                <span>CSS</span>
                <p>Linguagem de estilo usada para descrever a apresentação.</p>
            </div>
            <div className="card">
                <img src="/public/techs/git.svg" alt="GIT" />
                <span>GIT</span>
                <p>Controle de versão para gerenciar e rastrear mudanças no código-fonte durante o desenvolvimento de software.</p>
            </div>
            <div className="card">
                <img src="/public/techs/sass.svg" alt="SASS" />
                <span>SASS</span>
                <p>Linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações.</p>
            </div>
            <div className="card">
                <img src="/public/techs/javascript.svg" alt="JavaScript" />
                <span>JavaScript</span>
                <p>Linguagem de alto nível, usada principalmente para criar interatividade em páginas web.</p>
            </div>
            <div className="card">
                <img src="/public/techs/bootstrap-5-logo-icon.svg" alt="Bootstrap" />
                <span>Bootstrap</span>
                <p>Ferramenta para criar interfaces web responsivas.</p>
            </div>
            <div className="card">
                <img src="/public/techs/react.svg" alt="React" />
                <span>React</span>
                <p>Biblioteca JavaScript para construção de interfaces de usuário reutilizáveis e componentizadas.</p>
            </div>
            <div className="card">
                <img src="/public/techs/tailwindcss.svg" alt="TailwindCSS" />
                <span>TailwindCSS</span>
                <p>Framework CSS que permite criar designs personalizados sem sair do HTML.</p>
            </div>
            <div className="card">
                <img src="/public/techs/typescript.svg" alt="TypeScript" />
                <span>TypeScript</span>
                <p>Superset de JavaScript que adiciona recursos de tipagem estática para melhorar a produtividade no desenvolvimento.</p>
            </div>
            <div className="card">
                <img src="/public/techs/vite.svg" alt="Vite" />
                <span>Vite</span>
                <p>Build tool que visa ser uma alternativa mais rápida para o Webpack.</p>
            </div>
            <div className="card">
                <img src="/public/techs/nodejs.svg" alt="Node.js" />
                <span>Node.js</span>
                <p>Plataforma que permite executar JavaScript no lado do servidor.</p>
            </div>
            </div>
        </section>
        </main>
    );
};

export default Stack;
