import React, { useState } from 'react';

import { BsStack } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';

import HeroCard from "../components/hero-card";

const Home: React.FC = () => {
    const [contributions, setContributions] = useState<number>(0);

    const fetchContributions = async () => {
        try {
            const token = (import.meta).env?.VITE_GITHUB_TOKEN;
            if (token) {
                const startOfYear = new Date(new Date().getFullYear(), 0, 1).toISOString();
                const now = new Date().toISOString();
                const query = `query { user(login: "jonathafernandes") { contributionsCollection(from: "${startOfYear}", to: "${now}") { contributionCalendar { totalContributions } } } }`;
                const res = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ query })
                });
                const json = await res.json();
                const total = json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
                setContributions(total);
            }
        } catch (error) {
            console.error('Erro ao obter contribuições:', error);
        }
    };

    React.useEffect(() => {
        fetchContributions();
    }, []);

    return (
        <>
            <section className="my-16 font-sans">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Olá, eu sou Jonatha Fernandes - Desenvolvedor Web</h1>
            </section>

            <div className="mt-8 mb-12">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Atividade no GitHub</p>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900">{contributions}</p>
                            <p className="text-sm text-gray-600 mt-1">contribuições este ano</p>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-12">
                <h3 className="uppercase text-sm tracking-wider mb-4 text-gray-600">Saiba mais</h3>
                <ul className="flex flex-wrap gap-4">
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
