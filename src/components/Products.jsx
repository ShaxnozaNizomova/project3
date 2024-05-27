import React, {useEffect,useState} from 'react'
import head4 from '../assets/images/head4.jpg'
import axios from '../api'
import './Products.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/usefetch'
function Products() {
  const [count, setCount] = useState(1)
  const [value, setValue] = useState("")
  const {data:categories} = useFetch("/products/categories")
  const {data:search} = useFetch(`/products/search?q=${value}` , value)
  const [categoryName, setCategoryName] = useState("all")
  let url = `/products${categoryName === "all" ? "" : `/category/${categoryName}`}?limit=${count * 4}`
  const {data} = useFetch(url, count, categoryName)
  let buttons = categories?.data?.map((el, index)=>(
    <option key={index} className='option' value={el.name}>{el.name}</option>
  ))
  const searchItems = search?.data?.products?.map((el)=>
  <Link  key={el.id} to={`/product/${el.id}`}>
  <div className='searchbar' >
  <img src={el.images[0]} alt={el.title} width={70} height={50} />
  <p>{el.title}</p>
  </div>
  </Link>
  )

  let products = data?.data?.products?.map((el)=> <Link  key={el.id} to={`/product/${el.id}`}>
   <div className='card1'>
  <img src={el.thumbnail} alt="" width={300} height={200}/>
  <p className='card__title'>{el.title}</p>
  <p className='card__text'> by {el.brand}</p>
  <p className='card__span'>${el.price}</p>
</div>
  </Link>)
  return (
    <div>
       <div className='hero'>
      <div className='pages'>
    <div className='pages__text'>
     <h1 className='pages__title'>Our internal <br /> process and <br /> longerm vision</h1>
     <p className='pages__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis <br /> ornare quis. It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
     <button className='pages__btn'>Work With Us</button>
    </div>
    <div>
     <img src={head4} alt="picture" />
    </div>
   </div>
    </div>
     <h1 className='Title'>Products</h1>
     <div className='search'>
        <input value={value} onChange={e => setValue(e.target.value)} className='footer4__input' type="search" placeholder='search' />
        {
          value. trim()?
          <div className='search__content'>
       {searchItems}
        </div> : <></>
        }
      </div>
     <div className='categories__btn'>
      <select className='select' name="" id="" value={categoryName} onChange={e => setCategoryName(e.target.value)}>
      <option className='option' value="all">All</option>
     {buttons}
        </select>
     </div>
    <div className='cards1'>
       {products}
    </div>
    <div className="button-container">
    <button className='btn' onClick={()=>setCount(p => p + 1)}>See More </button>
   </div>
    </div>
  )
}

export default Products
