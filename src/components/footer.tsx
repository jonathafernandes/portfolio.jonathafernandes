import React, { useEffect, useState } from 'react';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoMdArrowDropupCircle } from 'react-icons/io';

const Footer: React.FC = () => {
    const [displayBackToTop, setDisplayBackToTop] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setDisplayBackToTop(true);
        } else {
            setDisplayBackToTop(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        const currentYear = document.getElementById('current-year');
        if (currentYear) {
            currentYear.innerHTML = `&copy; ${getCurrentYear()} Jonatha Fernandes.`;
        }
    }, []);

    function getCurrentYear() {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <footer>
        <h3>Tire seu projeto do papel, vamos construir juntos!</h3>
        <p>Se tem algo em mente, não hesite em me mandar uma mensagem para conversarmos melhor sobre sua ideia.</p>
        <div className="social-section">
            <a href="https://www.linkedin.com/in/jonathafernandes-/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/jonathafernandes" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={40} />
            </a>
            <a href="https://instagram.com/_jonathafernandes" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare size={40} />
            </a>
            <a href="https://twitter.com/_jonatha__" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter size={40} />
            </a>
        </div>
        <div className="footer-line"></div>
        <span id="current-year">{new Date().getFullYear()}</span>
        {displayBackToTop && (
            <IoMdArrowDropupCircle size={40} className="back-to-top" onClick={scrollToTop} />
        )}
        </footer>
    );
};

export default Footer;
