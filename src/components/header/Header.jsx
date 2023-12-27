import React, { useState } from "react";
import './Header.css'

const Header = () =>{
    // Toggle Menu
    const[toggle , showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home")
    return( 
    <>
        <header className="header" id="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo dev-logo">Darshan</a>
                <div className={toggle? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')}
                                    className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                                <a href="#about" onClick={() => setActiveNav('#about')}
                                    className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                                <a href="#services" onClick={() => setActiveNav('#services')}
                                    className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                                <a href="#projects" onClick={() => setActiveNav('#projects')}
                                    className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        {/* <li className="nav__item">
                                <a href="#Testimonials" onClick={() => setActiveNav('#testimonials')}
                                    className={activeNav === "#Testimonials" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Testimonials
                            </a>
                        </li> */}
                        <li className="nav__item">
                                <a href="#contact" onClick={() => setActiveNav('#contact')}
                                    className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                        <i class="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=> showMenu(!toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </>
    );
}

export default Header;