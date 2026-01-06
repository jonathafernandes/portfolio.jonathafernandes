import React from 'react';
import './stack.css';
import StackCard from '../components/stack-card';
import techStack from '../data/techStack.json';

const Stack: React.FC = () => {
    return (
        <main>
            <section className="stack">
                <div className="section-title">
                    <h1>Conhecimento <span>.</span></h1>
                </div>
                <div className="cards-techs">
                    {techStack.map((tech, index) => (
                        <StackCard
                            key={index}
                            image={tech.image}
                            tech={tech.tech}
                            description={tech.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Stack;