import React from 'react'
import head2 from '../assets/images/head2.jpg'
import Latest from './Latest'

function Careers() {
  return (
   <>
    <div className='pages'>
     <div className='pages__text'>
      <h1 className='pages__title'>We hired people who are very passionate about what they do</h1>
      <p className='pages__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
      <button className='pages__btn'>Work With Us</button>
     </div>
     <div>
      <img src={head2} alt="picture" />
     </div>
    </div>
    <Latest/>
   </>
    
  )
}

export default Careers
