import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggle , setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }
    return (
        <section className='services section' id="services">
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offer?</span>

            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Web<br/>Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>view more 
                    <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>product Designer</h3>
                            <p className='services__modal-description'>
                                Visite my social account and have a view only works. 
                                With expertise solutions i can provide quality work.
                            </p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I develop the user interface</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Web page and web application development</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I develop UX interactions</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I develop Landing page</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>UI/UX <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(2)}>view more
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>UI/UX Designer</h3>
                            <p className='services__modal-description'>
                                Visite my social account and have a view only works.
                                With expertise solutions i can provide quality work.
                            </p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I design the user interface</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Web page and web application designs</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I create UX elements interactions</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Designs and mockups of product for companies</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>visual <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(3)}>view more
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>visual Designer</h3>
                            <p className='services__modal-description'>
                                Visite my social account and have a view only works.
                                With expertise solutions i can provide quality work.
                            </p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I design brand templates</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Web page and web application wireframe</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I create animated UX elements interactions</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>I design company brand Logo</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Designs demo prototypes for companies</p>
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
