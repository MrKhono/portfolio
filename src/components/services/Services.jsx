import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Ce que j'offre</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Web <br /> Design
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Voir Plus <i className="uil uil-arrow-right services__button-icon"></i></span>
            
            <div className={ toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Web Design</h3>
                    <p className="services__modal-description">Des services de 3 années d'expérience. Offrant un service de qualité aux clients </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Je développe des interfaces utilisateurs</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des maquettes d'application web</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des maquettes d'application mobile</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des design statiques</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des prototypes</p>
                        </li>
                    </ul>
                </div>
            </div>
                
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Développement <br /> Web
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>Voir Plus<i className="uil uil-arrow-right services__button-icon"></i></span>
            
            <div className={ toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Développement Web</h3>
                    <p className="services__modal-description">Des services de 3 années d'expérience. Offrant un service de qualité aux clients </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Je développe des sites vitrines</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des sites E-commerce complet</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des applications web de gestion</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Des sites d'entreprise</p>
                        </li>
                    </ul>
                </div>
            </div>
                
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-mobile-android services__icon"></i>
                    <h3 className="services__title">
                        Développment <br /> Mobile
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>Voir Plus<i className="uil uil-arrow-right services__button-icon"></i></span>
            
            <div className={ toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Développement Mobile</h3>
                    <p className="services__modal-description">Des services de 3 années d'expérience. Offrant un service de qualité aux clients </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Je développe des interfaces utilisateurs</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Développement Web</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Développement Mobile</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Je développe des interfaces utilisateurs</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services___modal-icon"></i>
                            <p className="services__modal-info">Je développe des interfaces utilisateurs</p>
                        </li>
                    </ul>
                </div>
            </div>
                
            </div>

        </div>
    </section>
  )
}

export default Services