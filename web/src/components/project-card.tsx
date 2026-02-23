import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    repoUrl: string;
    demoUrl?: string;
    language?: string;
    stars?: number;
    tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, repoUrl, demoUrl, language, stars, tags }) => {
    return (
        <div className="flex flex-col p-6 bg-[var(--bg-color)] border border-[var(--details-color)] rounded-lg transition-all duration-300 hover:shadow-md hover:border-[var(--primary-color)] h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <div className="flex gap-3 text-gray-600">
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" title="View Source" className="hover:text-[var(--primary-color)] transition-colors">
                        <FaGithub size={20} />
                    </a>
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" title="Live Demo" className="hover:text-[var(--primary-color)] transition-colors">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{description}</p>

            <ul className="flex flex-wrap gap-2 mb-6">
                {tags?.map((tag, index) => (
                    <li key={index} className="tag text-xs">#{tag}</li>
                ))}
            </ul>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                {language && (
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--primary-color)] opacity-70"></span>
                        <span className="text-xs font-medium text-gray-600">{language}</span>
                    </div>
                )}
                {stars !== undefined && stars > 0 && (
                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                        <FaStar className="text-yellow-500" size={14} />
                        <span>{stars}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
