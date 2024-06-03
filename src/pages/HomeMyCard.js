// HomeMyCard.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from '../pages/Projects';
import '../styles/HomeMyCard.css';

const HomeMyCard = () => {
    return (
        <div className='card'>
            <h1>Syed Basha</h1>
            <p>
                I am an undergraduate student. My degree is B.Com (Computers), which I completed on December 14, 2020. 
                After that, I decided to learn some courses, and I chose the NxtWave platform.
                I really enjoy building static websites, responsive websites, logical thinking, and algorithms. 
                I have also completed some tasks and assignments. I did so many projects.
            </p>
            <Link to="/projects">View Projects</Link>

            <Routes>
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
};

export default HomeMyCard;
