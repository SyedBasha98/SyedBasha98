// Description.js
import React from 'react';
import '../styles/Description.css';

const Description = () => {
  return (
    <section className="description">
      <h2>About Me</h2>
      <Paragraph text="Hi, I'm Syed Basha, a passionate and dedicated developer specializing in React, Web Development, and Frontend Development. With a strong foundation in computer science and a keen eye for design, I create user-friendly and visually appealing web applications." />
      <Paragraph text="As a React Developer, I have extensive experience building dynamic and responsive web applications using the latest technologies. I thrive in collaborative environments and enjoy tackling complex problems to deliver innovative solutions." />
      <Paragraph text="My skill set includes HTML, CSS, JavaScript, React, and various other frontend technologies. I'm constantly learning and staying up-to-date with industry trends to ensure my skills remain relevant and cutting-edge." />
      <Paragraph text="I take pride in writing clean, maintainable code and am always looking for new challenges to improve my expertise. Let's work together to bring your ideas to life!" />
    </section>
  );
};

const Paragraph = ({ text }) => (
  <p className="description-paragraph">{text}</p>
);

export default Description;
