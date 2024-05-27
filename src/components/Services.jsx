import React from 'react'
import head3 from '../assets/images/head3.jpg'
import Latest from './Latest'
function Services() {
  return (
   <>
    <div className='pages'>
    <div className='pages__text'>
     <h1 className='pages__title'>We serve clients with ground breaking solutions</h1>
     <p className='pages__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
     <button className='pages__btn'>Work With Us</button>
    </div>
    <div>
     <img src={head3} alt="picture" />
    </div>
   </div>
   <Latest/>
   </>
  )
}

export default Services
