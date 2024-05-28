import React from 'react';

import aboutImage03 from '../../public/others/about-IMG_2023.webp';
import AboutCard from '../components/about-card';

// TODO: Implement this function
// const calculateMonthsSinceJune2024 = () => {
//     const startDate = new Date(2024, 6);
//     const currentDate = new Date();
//     const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
//     const monthsDifference = currentDate.getMonth() - startDate.getMonth();
    
//     return yearsDifference * 12 + monthsDifference;
// };

const About: React.FC = () => {
    // TODO: Implement this function
    // const monthsSinceJune2024 = calculateMonthsSinceJune2024();

    return (
        <>
            <div className="about">
                <img className="about-img" src={aboutImage03} alt="Jonatha Fernandes" />
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
                    <AboutCard date="2022 — 2024" title="Uninassau" description="Análise e Desenvolvimento de Sistemas" tags={['graduação', 'tecnólogo']} />
                    <br />
                    <AboutCard date="2023" title="Alura" description="ONE — Oracle Next Education" tags={['lógica-de-programação', 'html', 'css', 'javascript', 'react']} />
                </div>
            </section>

            <section>
                <div className="section-title">
                    <h2>Experiência <span>.</span></h2>
                </div>
                <div className="professional-experience">
                    <AboutCard
                        date="2023 — 2024 · 10 meses"
                        title="Polícia Civil de Alagoas"
                        description="Desenvolvedor Web — estágio"
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    />
                    
                    {/* TODO: Implement this card
                    <br />
                    <AboutCard
                        date={`Junho/2024 — Presente · ${monthsSinceJune2024} ${monthsSinceJune2024 === 1 ? 'mês' : 'meses'}`}
                        title='Polícia Civil de Alagoas'
                        description='Desenvolvedor Web — Júnior'
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    /> */}
                    <AboutCard
                        tags={['javascript', 'typescript', 'react', 'node.js', 'styled-components', 'next.js']}
                    />
                </div>
            </section>
        </>
    );
};

export default About;