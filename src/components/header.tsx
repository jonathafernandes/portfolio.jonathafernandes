import React from 'react';
import { Link } from 'react-router-dom';
import logo104 from '../../public/logo/logo-jonatha-fernandes-1-04.png';

const Header: React.FC = () => {
    return (
        <header>
        <Link to="/">
            <img
            src={logo104}
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