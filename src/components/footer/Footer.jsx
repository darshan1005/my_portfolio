import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Darshan</h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='#' className='footer__social-icon' target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href='#' className='footer__social-icon' target='_blank'>
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href='#' className='footer__social-icon' target='_blank'>
                        <i className='bx bxl-dribbble'></i>
                    </a>
                </div>
                <span className='footer__copy'>
                    &#169; bermudadesigns. All right reserved
                </span>
            </div>
            
        </footer>
    )
}

export default Footer
