import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon' ></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 année d'expérience</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>

            <h3 className="about__title">Réalisé</h3>
            <span className="about__subtitle">10 + Projets</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">Soutien</h3>
            <span className="about__subtitle">En ligne 24/7</span>
        </div>
    </div>
  )
}

export default Info