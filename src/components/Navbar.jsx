import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/Logo.svg'
function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className='navbar__menu'>
            <li><Link to={"/"}>Home</Link></li>
            <li><NavLink to={"/careers"}>Careers</NavLink></li>
            <li><NavLink  to={"/about"}>About Us</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <button className='navbar__btn'>Clone Project</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
