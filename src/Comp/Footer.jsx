import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Icons from react-icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.socialIcons}>
        <a href="https://github.com/nitinn0" style={styles.iconLink}>
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/nitin-kapoor-2a614922a/" style={styles.iconLink}>
          <FaLinkedin size={24} />
        </a>
        <a href="#" style={styles.iconLink}>
          <FaTwitter size={24} />
        </a>
      </div>

      <div style={styles.copyright}>
        <p>© 2024 Nitin Kapoor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#d7d1c4",
    color: "#4B3C30",
    padding: "3px 1px",
    textAlign: "center",
    marginTop: "auto", 
    boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)", 
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "8px",
  },
  iconLink: {
    color: "#4B3C30",
    transition: "color 0.3s",
  },
  copyright: {
    fontSize: "14px",
    marginTop: "5px",
  },
};

// Hover effect
styles.iconLink[':hover'] = {
  color: "#ff9f43",
};

export default Footer;
