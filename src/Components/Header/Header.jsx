import React from 'react'
import "./header.css";
import Navbar from '../Navbar'
import { useEffect } from "react";
const Header = () => {
  return (
     <div className='header'>
      <div className="menu">
      <Navbar/>
      <a href=""><span>avto</span>.am</a>
      </div>
        
      
        <div className='diler'>
          <i className="fa-solid fa-car"></i>
          <i className="fa-solid fa-message"></i>
          <i className="fa-solid fa-circle-user"></i>
          <button className = "btn">Վաճառել</button>
        </div>
    </div>
   
  )
}

export default Header