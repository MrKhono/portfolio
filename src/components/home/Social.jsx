import React from 'react';
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://twitter.com/IcloK48" className="home__social-icon" target="_blank"> 
            <i class="uil uil-twitter-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/armand-khono-9a59221a9/" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/MrKhono" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social