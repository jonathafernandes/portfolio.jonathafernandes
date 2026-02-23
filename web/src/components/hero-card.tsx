import React from 'react';
import { Link } from 'react-router-dom';

interface HeroCardProps {
    image: string;
    icon: React.ReactNode;
    link: string;
    title: string;
    external?: boolean;
}

const HeroCard: React.FC <HeroCardProps> = ({image, icon, link, title, external}) => {
    return (
        <li className="relative w-[250px] h-[150px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
            {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full uppercase text-sm relative">
                    <img src={image} alt="" className="w-full h-full object-cover rounded-lg" />
                    <span className="absolute top-2 left-2 z-20 text-white drop-shadow-lg">{icon}</span>
                    <span className="absolute bottom-2 left-2 z-20 text-white font-bold drop-shadow-lg">{title}</span>
                </a>
            ) : (
                <Link to={link} className="block w-full h-full uppercase text-sm relative">
                    <img src={image} alt="" className="w-full h-full object-cover rounded-lg" />
                    <span className="absolute top-2 left-2 z-20 text-white drop-shadow-lg">{icon}</span>
                    <span className="absolute bottom-2 left-2 z-20 text-white font-bold drop-shadow-lg">{title}</span>
                </Link>
            )}
        </li>
    );
};

export default HeroCard;