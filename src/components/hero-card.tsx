import React from 'react';
import { Link } from 'react-router-dom';

interface HeroCardProps {
    icon: React.ReactNode;
    link: string;
    id: string;
    title: string;
}

const HeroCard: React.FC <HeroCardProps> = ({icon, link, id, title}) => {
    return (
        <li>
            <Link to={link} id={id}>
                {icon}
                <span>{title}</span>
            </Link>
        </li>
    )
};

export default HeroCard;