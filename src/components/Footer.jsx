import React from 'react'
import './Footer.css'
import logo2 from '../assets/images/Logo2.svg'
import logos2 from '../assets/images/Social.svg'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
   <div className='foot'>
     <div className='footer'>
      <div className='footer1'>
        <img src={logo2} alt="logo" />
        <h4 className='footer1__title'>Bespoke software <br /> solutions</h4>
        <img src={logos2} alt="logos" />
      </div>
      <div className='footer2'>
        <ul className='footer2__menu'>
            <li className='footer2__menu__tile'>Company</li>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/careers"}>Careers</NavLink></li>
            <li><NavLink  to={"/about"}>About Us</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
        </ul>
      </div>
      <div className='footer3'>
        <p className='footer2__menu__tile'>Connect</p>
        <p className='footer2__menu__tile'>hi@finsweet.com</p>
        <p className='footer2__menu__tile'>+(123) 456-7890</p>
      </div>
      <div className='footer4'>
        <p className='footer2__menu__tile'>Join Newsletter</p>
        <input className='footer4__input' type="email" placeholder='Type email here' />
        <button className='header__btn'>Subscribe</button>
      </div>
    </div>
   </div>
  )
}

export default Footer
