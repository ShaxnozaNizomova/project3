import React from 'react'
import './Latest.css'
import img from '../assets/images/Image.jpg'
import img2 from '../assets/images/Image2.jpg'
import img3 from '../assets/images/Image3.jpg'
function Latest() {
  const data =  [
    {
      id:1,
      img: img,
      title: "Why you have to digitalize in 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      span: "Learn More =>"
    },
    {
      id:2,
      img: img2,
      title: "Our internal process and longerm vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      span: "Learn More =>"
    },
    {
      id:3,
      img: img3,
      title: "Helping the next generation of leaders",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      span: "Learn More =>"
    }
  ]
  let cards = data?.map((el) => (
    <div key={el.id} className='card'>
    <img src={el.img} alt="img" width={390}/>
    <h4 className='card__title'>{el.title}</h4>
    <p className='card__text'>{el.text}</p>
    <p className='card__span'>{el.span}</p>
  </div>
  )) 
  return (
    <div className='hero2'>
      <h2 className='Title'>Latest Blog&News</h2>
      <div className='cards'>
        {cards}
       
      </div>
    </div>
  )
}

export default Latest
