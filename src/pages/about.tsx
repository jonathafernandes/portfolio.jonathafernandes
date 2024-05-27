import React, { useEffect } from 'react';

const About: React.FC = () => {
    useEffect(() => {
        const currentDateWorking = document.getElementById('current-date-working');
        if (currentDateWorking) {
            currentDateWorking.textContent = `${getMonths()} meses`;
        }
    }, []);

    function getMonths() {
        const currentDate = new Date();
        const september2023 = new Date(2023, 7);
        const monthsDiff = (currentDate.getFullYear() - september2023.getFullYear()) * 12 +
            (currentDate.getMonth() - september2023.getMonth());

        return monthsDiff;
    }

    return (
        <>
        <div className="about">
            <img className="about-img" src="../../public/others/about-IMG_2023.webp" alt="Jonatha Fernandes" />
            <div className="about-text">
            <span>Quem sou</span>
            <h2>Jonatha Fernandes</h2>
            <h3>Desenvolvedor Web</h3>
            <br />
            <p>
                Tenho 29 anos, sou apaixonado por tecnologia e sempre me identifiquei muito com a área.
                <br />
                Meu primeiro contato com programação foi na faculdade em 2018, onde iniciei o aprendizado em
                Python. Também tive contato com as linguagens Java e SQL. No momento tenho focado meus estudos
                no ecosistema de <strong>JavaScript</strong> com <strong>React</strong>, <strong>Node.js</strong> e <strong>TypeScript</strong>.
            </p>
            </div>
        </div>

        <section>
            <div className="section-title">
                <h2>Formação <span>.</span></h2>
            </div>
            <div className="academic-education-text">
                <span>2022 — 2024</span>
                <h4>Uninassau</h4>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <br />
                <span>2023</span>
                <h4>Alura</h4>
                <p>ONE — Oracle Next Education</p>
                <ul>
                    <li className="tag">#lógica-de-programação</li>
                    <li className="tag">#html</li>
                    <li className="tag">#css</li>
                    <li className="tag">#javascript</li>
                    <li className="tag">#react</li>
                </ul>
            </div>
        </section>

        <section>
            <div className="section-title">
                <h2>Experiência <span>.</span></h2>
            </div>
            <div className="professional-experience">
                <span>Set/2023 — Presente · </span>
                <span id="current-date-working"></span>
                <h4>Polícia Civil de Alagoas</h4>
                <p>Desenvolvedor Web — estágio</p>
            <div className="link">
                <i className="ph-bold ph-link"></i>
                <a href="https://github.com/GeinfoPcal" target="_blank" rel="noopener noreferrer">
                GeinfoPcal
                </a>
            </div>
            <ul>
                <li className="tag">#javascript</li>
                <li className="tag">#typescript</li>
                <li className="tag">#react</li>
                <li className="tag">#node.js</li>
                <li className="tag">#styled-components</li>
            </ul>
            </div>
        </section>
        </>
    );
};

export default About;