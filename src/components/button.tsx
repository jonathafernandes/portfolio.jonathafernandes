import React from 'react';

interface ButtonProps {
    href: string;
    className: string;
    disabled?: boolean;
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ href, className, disabled, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} ${disabled ? 'disabled' : ''}`}
            aria-disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

export default Button