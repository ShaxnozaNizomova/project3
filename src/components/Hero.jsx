import React from 'react'
import './Hero.css'
import photo from '../assets/images/photo.svg'
import logos from '../assets/images/Header Logos.jpg'
function Hero() {
  return (
    <div className='hero'>
      <div className='header'>
        <div className='header__left'>
          <h1 className='header__title'>Prosper with our <br /> bespoke solutions</h1>
          <p className='header__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <button className='header__btn'>See  Our  Services</button>
          <p className='header__span'>Worked with 100+ Companies</p>
          <img src={logos} alt="logos" />
        </div>
        <div className='header__right'>
            <img src={photo} alt="person" />
        </div>
      </div>
    </div>
  )
}

export default Hero
