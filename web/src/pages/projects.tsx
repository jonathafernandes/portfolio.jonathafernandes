import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const featuredProjects = [
    {
        id: 1,
        title: "B4Desk",
        subtitle: "Enterprise SaaS Solution",
        description: "App web moderno de gestão empresarial para a agência B4 Comunicação. Plataforma completa para gerenciamento de clientes, conteúdo e publicação automatizada em redes sociais.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        demoUrl: "https://www.b4desk.com.br/",
        image: "/projects/b4-desk-2026-02-16-11-54-29.png"
    },
    {
        id: 2,
        title: "Reinaldo Freitas",
        subtitle: "Real Estate Management Platform",
        description: "Plataforma de gestão completa para o corretor Reinaldo Freitas. É um sistema completo de gestão imobiliária com foco em automação de leads e gestão de clientes.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        demoUrl: "https://www.reinaldofreitasimoveis.com/",
        image: "/projects/reinaldo-freitas-2026-02-16-12-21-24.png"
    }
];

const Projects: React.FC = () => {
    return (
        <section className='font-normal pb-32 max-w-6xl mx-auto'>
            <div className="section-title font-rubik mt-16 mb-24 text-center md:text-left">
                <h1>Projetos <span>.</span></h1>
            </div>

            <div className="space-y-40">
                {featuredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                    >
                        {/* Imagem do Projeto */}
                        <div className="w-full md:w-3/5 group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(81,71,150,0.2)]">
                            <div className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-auto aspect-video transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Conteúdo do Projeto */}
                        <div className="w-full md:w-2/5 space-y-6">
                            <div className="space-y-2">
                                <span className="text-[var(--primary-color)] font-medium tracking-widest uppercase text-xs">
                                    {project.subtitle}
                                </span>
                                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                                    {project.title}
                                </h2>
                            </div>

                            <p className="text-base text-gray-600 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 py-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 pt-4">
                                {project.demoUrl !== "#" && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-900 hover:text-[var(--primary-color)] transition-colors font-medium border-b-2 border-transparent hover:border-[var(--primary-color)] pb-1"
                                    >
                                        <FaExternalLinkAlt size={16} /> Visite
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-40 text-center">
                <p className="text-gray-400 font-rubik uppercase tracking-widest text-sm">
                    Visite meu <a href="https://github.com/jonathafernandes" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">GitHub</a>
                </p>
            </div>
        </section>
    );
};

export default Projects;
