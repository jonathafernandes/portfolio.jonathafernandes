import React from 'react';
import './about.css';

import image from '/others/about-IMG_2023.webp';
import AboutCard from '../components/about-card';

const About: React.FC = () => {
    const calculateMonths = () => {
        const startDate = new Date(2024, 6);
        const currentDate = new Date();
        
        let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
        totalMonths += currentDate.getMonth() - startDate.getMonth();
        
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
    
        const yearsText = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : '';
        const monthsText = months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : '';
    
        return `${yearsText} ${monthsText}`.trim();
    };

    const months = calculateMonths();

    return (
        <>
            <div className="about">
                <img className="about-img" src={image} alt="Jonatha Fernandes" />
                <div className="about-text">
                <span>Quem sou</span>
                <h2>Jonatha Fernandes</h2>
                <h3>Desenvolvedor Web</h3>
                <br />
                <p>
                    Sou apaixonado por tecnologia e sempre me identifiquei muito com a área.
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
                        description="Desenvolvedor Web – estágio"
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    />
                    <br />
                    <AboutCard
                        date={`${months === '' ? `Julho/2024 — Presente` : `Julho/2024 — Presente · ${months}`}`}
                        title='Polícia Civil de Alagoas'
                        description='Desenvolvedor Web Júnior'
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    />
                    <AboutCard
                        tags={['javascript', 'typescript', 'react', 'node.js', 'styled-components', 'next.js']}
                    />
                </div>
            </section>
        </>
    );
};

export default About;