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

    return (
        <footer className="bg-[var(--bg-color)] border-2 border-[var(--details-color)] rounded-md my-12 p-8">
            <h3 className="uppercase text-lg font-semibold text-gray-900">Tire seu projeto do papel, vamos construir juntos!</h3>
            <p className="text-sm text-gray-700 mt-2">Se tem algo em mente, não hesite em me mandar uma mensagem para conversarmos melhor sobre sua ideia.</p>

            <div className="flex items-center mt-4">
                <a href="https://www.linkedin.com/in/jonathafernandes-/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[var(--primary-color)] transition-colors">
                    <FaLinkedin size={36} />
                </a>
                <a href="https://github.com/jonathafernandes" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[var(--primary-color)] transition-colors">
                    <FaGithubSquare size={36} />
                </a>
                <a href="https://instagram.com/_jonathafernandes" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[var(--primary-color)] transition-colors">
                    <FaInstagramSquare size={36} />
                </a>
                <a href="https://twitter.com/_jonatha__" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[var(--primary-color)] transition-colors">
                    <FaSquareXTwitter size={36} />
                </a>
            </div>

            <div className="w-full h-1 bg-[var(--primary-color)] mt-4 rounded-sm" />

            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">© {new Date().getFullYear()} Jonatha Fernandes.</span>
                {displayBackToTop && (
                    <IoMdArrowDropupCircle size={42} className="fixed bottom-8 right-5 text-[var(--primary-color)] cursor-pointer hover:brightness-110" onClick={scrollToTop} aria-label="Voltar ao topo" />
                )}
            </div>
        </footer>
    );
};

export default Footer;
