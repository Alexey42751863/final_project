import React from 'react'
import "./Header.css";
import Navbar from '../Navbar'
const Header = () => {
  return (
     <div className='header'>
        <Navbar/>
        <h2><a href="#">avto.am</a></h2>
        <div className='diler'>
          <i className="fa-solid fa-car"></i>
          <i className="fa-solid fa-memo"></i>
          <button>Վաճառել</button>
        </div>
    </div>
   
  )
}

export default Header