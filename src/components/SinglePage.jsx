import React from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api'
import { useEffect,useState } from 'react'
import './SinglePage.css'
function SinglePage() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
  useEffect(()=>{
    axios
      .get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(res => console.log(res))
  },[]) 
  return (
    <div>
     <div className='product__infos'>
     <div  className='product__imgs'>
     <div><img src={product?.images[0]} alt="" width={500} height={400} /> </div>
  </div>
  <div className='product__texts'>
      <h4 className='Title1'>{product?.title}</h4>
      <p className='card__text1'>{product?.description}</p>
      <p className='card__span1'>by {product?.brand}</p>
      <p className='card__span1'>${product?.price}</p>
      <p className='card__span1'>Category: {product?.category}</p>
      <p className='card__span1'>Rating: {product?.rating}</p>
  </div>
  <div className='textss'>
    <h1 className='Title3'>Breaking the code How <br /> did we build our Figma <br /> plugin </h1>
    <p className='card__span2'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
    <p className='card__span2'>Writing UX copies can be a little frustrating and confusing, and sometimes we are 
      unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted
       to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and
        has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, 
        casual to playful. The intention to build this Figma plugin originated from our Medium blog post,
         ‘Designing voice and tone for error messages.</p>
         <p className='card__span2'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
 
 
         <h1 className='Title3'>Transform Your Idea Into Reality <br /> with Ether a Leading Digital <br /> Agency </h1>
    <p className='card__span2'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
    <p className='card__span2'>Writing UX copies can be a little frustrating and confusing, and sometimes we are 
      unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted
       to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and
        has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, 
        casual to playful. The intention to build this Figma plugin originated from our Medium blog post,
         ‘Designing voice and tone for error messages.</p>
  </div>
</div>
    </div>
  )
}

export default SinglePage