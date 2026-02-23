import React from 'react';

interface StackCardProps {
    image: string;
    tech: string;
    description: string;
}

const StackCard: React.FC<StackCardProps> = ({ image, tech, description }) => {
    return (
        <div className="flex flex-col p-4 bg-[var(--bg-color)]">
            <img src={image} alt={tech} className="w-6 h-6 [src*='django-logo-negative.png']:!w-12 [src*='django-logo-negative.png']:!h-auto" />
            <span className="mt-4">{tech}</span>
            <p className="mt-1 w-[200px] text-black/60">{description}</p>
        </div>
    );
};

export default StackCard;