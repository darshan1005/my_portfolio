import React from 'react'

function info() {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i className='bx bx-award about_icon'></i>
              <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>1yr-less</span>
        </div>
        <div className='about__box'>
              <i className='bx bx-briefcase-alt about_icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>22</span>
        </div>
        <div className='about__box'>
              <i className='bx bx-support about_icon'></i>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>9AM - 6PM (ONLINE)</span>
        </div>
    </div>
  )
}

export default info