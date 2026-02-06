import React from 'react';

import image from '/others/about-IMG_2023.webp';
import AboutCard from '../components/about-card';

const About: React.FC = () => {
    const calculateMonths = (year: number, month: number) => {
        const startDate = new Date(year, month);
        const currentDate = new Date();

        let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
        totalMonths += currentDate.getMonth() - startDate.getMonth();

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const yearsText = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : '';
        const monthsText = months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : '';

        return `${yearsText} ${monthsText}`.trim();
    };

    const monthsPcal = calculateMonths(2024, 6);
    const monthsB4 = calculateMonths(2024, 11);

    return (
        <>
            <div className="flex gap-[7%] mt-12 p-[4%] bg-[var(--bg-color)] border-2 border-[var(--details-color)] rounded-md font-rubik">
                <img className="h-[400px] border-2 border-[var(--details-color)] rounded-md" src={image} alt="Jonatha Fernandes" />
                <div className="about-text">
                    <h1 className="text-[var(--primary-color)] font-normal uppercase">Quem sou</h1>
                    <h2>Jonatha Fernandes</h2>
                    <h3 className="text-[#4d4d4d] text-[19px]">Desenvolvedor Web</h3>
                    <br />
                    <p className="text-[22px]">
                        Sou apaixonado por tecnologia e sempre me identifiquei muito com a área.
                        <br />
                        Meu primeiro contato com programação foi na faculdade em 2018, onde iniciei o aprendizado em
                        Python. Também tive contato com as linguagens Java e SQL. No momento tenho focado meus estudos
                        no ecosistema de <strong className="text-[#4d4d4d]">JavaScript</strong> com <strong className="text-[#4d4d4d]">React</strong>, <strong className="text-[#4d4d4d]">Node.js</strong> e <strong className="text-[#4d4d4d]">TypeScript</strong>.
                    </p>
                </div>
            </div>

            <section className="font-rubik">
                <div className="section-title">
                    <h2>Formação <span>.</span></h2>
                </div>
                <div className="mt-4 p-[4%] bg-[var(--bg-color)]">
                    <AboutCard date="2022 — 2024" title="Uninassau" description="Análise e Desenvolvimento de Sistemas" tags={['graduação', 'tecnólogo']} />
                    <br />
                    <AboutCard date="2023" title="Alura" description="ONE — Oracle Next Education" tags={['lógica-de-programação', 'html', 'css', 'javascript', 'react']} />
                </div>
            </section>

            <section className="font-rubik">
                <div className="section-title">
                    <h2>Experiência <span>.</span></h2>
                </div>
                <div className="mt-4 p-[4%] bg-[var(--bg-color)] professional-experience">
                    <AboutCard
                        date="2023 — 2024 · 10 meses"
                        title="Polícia Civil de Alagoas"
                        description="Desenvolvedor Web – estágio"
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    />
                    <br />
                    <AboutCard
                        date={`${monthsPcal === '' ? `Julho/2024 — Presente` : `Julho/2024 — Presente · ${monthsPcal}`}`}
                        title='Polícia Civil de Alagoas'
                        description='Desenvolvedor Web Júnior'
                        url="https://github.com/GeinfoPcal"
                        organization="GeinfoPcal"
                    />
                    <AboutCard
                        tags={['javascript', 'typescript', 'react', 'node.js', 'styled-components', 'next.js']}
                    />
                    <br />
                    <AboutCard
                        date={`${monthsB4 === '' ? `Dezembro/2024 — Presente` : `Dezembro/2024 — Presente · ${monthsB4}`}`}
                        title='B4 Comunicação'
                        description='Head de Desenvolvimento Web'
                        url="https://www.b4comunicacao.com.br/"
                        organization="www.b4comunicacao.com.br"
                    />
                    <AboutCard
                        tags={['javascript', 'typescript', 'react', 'prisma', 'tailwind', 'next.js', 'postgresql']}
                    />
                </div>
            </section>
        </>
    );
};

export default About;