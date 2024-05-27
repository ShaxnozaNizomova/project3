import React from 'react'
import head1 from '../assets/images/head1.jpg'
import './Pages.css'
import Latest from './Latest'
function About() {
  return (
   <>
    <div className='pages'>
     <div className='pages__text'>
      <h1 className='pages__title'>We value human, organizational, and operational intelligence, not just artificial</h1>
      <p className='pages__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
      <button className='pages__btn'>Work With Us</button>
     </div>
     <div>
      <img src={head1} alt="picture" />
     </div>
    </div>
    <Latest/>
   </>
  )
}

export default About
