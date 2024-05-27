import React from 'react';

interface StackCardProps {
    image: string;
    tech: string;
    description: string;
}

const StackCard: React.FC<StackCardProps> = ({ image, tech, description }) => {
    return (
        <div className="card">
            <img src={image} alt={tech} />
            <span>{tech}</span>
            <p>{description}</p>
        </div>
    );
};

export default StackCard;