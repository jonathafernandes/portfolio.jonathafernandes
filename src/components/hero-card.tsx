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
        <li>
            {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="" />
                    {icon}
                    <span>{title}</span>
                </a>
            ) : (
                <Link to={link}>
                    <img src={image} alt="" />
                    {icon}
                    <span>{title}</span>
                </Link>
            )}
        </li>
    );
};

export default HeroCard;