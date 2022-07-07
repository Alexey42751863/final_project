import React from 'react'
import "./header.css";
import Navbar from '../Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {

  const [openM,setOpenM] = useState(false)
  const showSideBarM = () => setOpenM(true)

  useEffect(() => {
  let handlerM =  (event) =>{
    if (event.target.className == 'massageBar open') {
     
      setOpenM(false)
    }

  }
  document.addEventListener("mousedown",handlerM)
  return () => {
    document.removeEventListener("mousedown",handlerM)
  }
})
  return (
    
     <div className='header'>
        <Navbar/>
        <h2><a href="">avto.am</a></h2>
        <div className='diler'>
          <i className="fa-solid fa-car"></i>
          <i className="fa-solid fa-message" onClick={showSideBarM}></i>
          <button className="btn">Վաճառել</button>
        </div>
         
        <div className={openM ? "massageBar open" : "massageBar"}>
          <div className="content">
          <i className="fa-solid fa-message"></i>
          <h3>Հարգելի օգտատեր, հաղորդագրություներ ուղարկելու կամ ստանալու համար անհրաժեշտ է մուտք գործել ձեր հաշիվ և հաստատել հեռախոսի համարը</h3>
          <button className="btn">Մուտք գործել</button>
          </div>
          
        </div>
    </div>
   
  )
}

export default Header