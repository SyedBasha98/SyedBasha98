import React from 'react';
import '../styles/Skills.css';

const skillDetails = {
  html: {
    img: 'https://www.logolynx.com/images/logolynx/4f/4fc5eb035a93e267c23a909f21a87f5e.png',
    certificate: 'https://media-content.ccbp.in/certificates/share/AEYONEDJIS.png',
  },
  css: {
    img: 'https://1.bp.blogspot.com/-m4TTXg7Oof4/XlJFOC9iQmI/AAAAAAAAACc/gjl4x37MVFIH7th8Y1xmelomiX4rYRwewCLcBGAsYHQ/s1600/css3.png',
    certificate: 'https://media-content.ccbp.in/certificates/share/AEYONEDJIS.png',
  },
  Bootstrap: {
    img: 'https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png',
    certificate: 'https://media-content.ccbp.in/certificates/share/AEYONEDJIS.png',
  },
  JavaScript: {
    img: 'https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png',
    certificate: 'https://media-content.ccbp.in/certificates/share/WTRQYSVDAN.png'
  },
  Flexbox:{
    img:'https://seeklogo.com/images/F/flex-box-logo-83E499DA06-seeklogo.com.png',
    certificate:'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FLYXOQFOCEV.png'

  },
  Python: {
    img: 'https://tse3.mm.bing.net/th?id=OIP.8mB0JRId2fMaxxmyMOZecAHaIO&pid=Api&P=0&h=180',
    certificate: 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FDAIKJBKJPM.png'
  },
  SQL: {
    img: 'https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png',
    certificate: 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FMDTNEQYXUM.png'
  },
  NodeJs: {
    img: 'https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png',
    certificate: 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FBUASFBLFOA.png'
  },
  ReactJs: {
    img: 'https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png',
    certificate: 'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FZYKPUPZULJ.png'
  }
};

const companyCertificates = {
  HackerRank: {
    img: 'https://marketplace.jazzhr.com/wp-content/uploads/78043367-hackerrank-logo-latest.png',
    certificate: ''
  },
  IBM: {
    img: 'https://pngimg.com/uploads/ibm/ibm_PNG19658.png',
    certificate: 'path/to/your/IBM_certificate.pdf'  // Make sure this link is valid or change it to the correct URL
  }
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {Object.entries(skillDetails).map(([skill, details]) => (
            <li key={skill}>
              <div className="skill-item">
                <img src={details.img} alt={skill} />
                <h5>{skill.toUpperCase()}</h5>
                <a href={details.certificate} className="certificate-link" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>

        <h2>Company Certificates</h2>
        <ul className="skills-list">
          {Object.entries(companyCertificates).map(([company, details]) => (
            <li key={company}>
              <div className="skill-item">
                <img src={details.img} alt={company} />
                <h5>{company.toUpperCase()}</h5>
                <a href={details.certificate} className="certificate-link" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
