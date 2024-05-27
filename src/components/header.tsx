import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
        <Link to="/">
            <img
            src="/public/logo/logo-jonatha-fernandes-1-04.png"
            alt="Jonatha Fernandes - Desenvolvedor Web"
            />
            <span>Jonatha Fernandes</span>
        </Link>
        <nav id="navigation">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Sobre</Link>
            </li>
            <li>
                <Link to="/stack">Conhecimento</Link>
            </li>
            <li>
                <Link to="/projects">Projetos</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;