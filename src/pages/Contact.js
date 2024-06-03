import React from 'react';
import githubLogo from '../logo/GitHub-Logo.png';
import gmailLogo from '../logo/Gmail-Emblem.png';
import linkedinLogo from '../logo/linked-in.png';
import whatsappLogo from '../logo/whatsapp.png';
import Phone from '../logo/phone.png';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>
      <div style={styles.card}>
        <a href="tel:8247723001" style={styles.link}>
          <img src={Phone} alt="Phone" style={styles.icon} />
          <div style={styles.text}>8247723001</div>
        </a>
      </div>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <a href="https://github.com/syedbasha98" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <img src={githubLogo} alt="GitHub" style={styles.icon} />
            <div style={styles.text}>GitHub</div>
          </a>
        </div>
        <div style={styles.card}>
          <a href="mailto:syedbasha94684@gmail.com" style={styles.link}>
            <img src={gmailLogo} alt="Gmail" style={styles.icon} />
            <div style={styles.text}>Gmail</div>
          </a>
        </div>
        <div style={styles.card}>
        <a href="https://www.linkedin.com/in/syed-basha78956" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" style={styles.icon} />
            <div style={styles.text}>LinkedIn</div>
          </a>
        </div>
        <div style={styles.card}>
          <a href="tel:8247723001" style={styles.link}>
            <img src={whatsappLogo} alt="WhatsApp" style={styles.icon} />
            <div style={styles.text}>WhatsApp</div>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '150px',
    margin:'15px'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default ContactPage;
