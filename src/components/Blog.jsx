import React from 'react'
import head4 from '../assets/images/head4.jpg'

function Blog() {
  return (
    <div className='hero'>
      <div className='pages'>
    <div className='pages__text'>
     <h1 className='pages__title'>Our internal <br /> process and <br /> longerm vision</h1>
     <p className='pages__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis <br /> quis ornare quis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> leo odio, sagittis quis ornare quis.</p>
     <button className='pages__btn'>Work With Us</button>
    </div>
    <div>
     <img src={head4} alt="picture" />
    </div>
   </div>
    </div>
  )
}

export default Blog
