import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 ZenEvent, Monika Lochmanová. Všechna práva vyhrazena.</p>
          <p>Vytvořeno s láskou.</p>
          <p>Vytvořeno pomocí Reactu, Node.js, HTML, SCSS a JavaScriptu.</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/monika-lochmanov%C3%A1-627941304/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/public/Monika-Lochmanov%C3%A1/" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/moncha_lo/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>

    )

}

export default Footer;