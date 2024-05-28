interface ButtonProps {
    href: string;
    className: string;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, className, disabled, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-disabled={disabled}>
        {children}
    </a>
);

export default Button;