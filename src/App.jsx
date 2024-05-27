import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Careers from './components/Careers'
import Services from './components/Services'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Products from './components/Products'
import SinglePage from './components/SinglePage'

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<SinglePage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
