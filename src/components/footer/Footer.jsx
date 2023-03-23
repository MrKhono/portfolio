import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Next IN</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">A propos</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projets</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Témoignages</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://twitter.com/IcloK48" className="footer__social-link" target="_blank"> 
                    <i class="bx bxl-twitter"></i>
                </a>

                <a href="https://www.linkedin.com/in/armand-khono-9a59221a9/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/MrKhono" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Next IN. Tous droits reservé</span>

        </div>
    </footer>
  )
}

export default Footer