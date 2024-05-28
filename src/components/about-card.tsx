import { LuExternalLink } from "react-icons/lu";
import React from 'react';

interface AboutCardProps {
    date?: string;
    title?: string;
    description?: string;
    url?: string;
    organization?: string;
    tags?: string[];
}

const AboutCard: React.FC<AboutCardProps> = ({ date, title, description, url, organization, tags }) => {
    return (
        <>  
            <span>{date}</span>
            <h4>{title}</h4>
            <div className="link">
                {url && organization && ('')}
                {url && <LuExternalLink size={12} />}
                <a href={url} target="_blank" rel="noopener noreferrer">{organization}</a>
            </div>
            <p>{description}</p>
            <ul>
                {tags?.map((tag, index) => (
                    <li key={index} className="tag">#{tag}</li>
                ))}
            </ul>
        </>
    );
};

export default AboutCard;