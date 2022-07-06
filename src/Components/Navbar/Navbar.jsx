import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
 const [open, setOpen] = useState(false)
 const showSideBar = () => setOpen(true)
 
 useEffect(() => {
  document.addEventListener("mousedown", () =>{
    setOpen(false)
  })
})
  return (
    <> 
    <div className='bars' onClick={showSideBar}>
      <i class="fa-solid fa-bars"></i>
      </div>
   
     
    
     <div className={open ? "container open" : "container"}>
     
    

     <nav className="navbar">
     <span className='user'>
     <i className="fa-solid fa-circle-user"></i>
     <h2>Մուտք</h2>
    
     </span>
     <i class="fa-solid fa-message">հաղորդագրություններ</i>
    
     <Link to={'/dealers'} className="dillers" >Դիլերներ</Link>
     <Link to={'/be_a_dealer'} className="avtodiller">Դառնալ ավտոդիլեր</Link>
     <Link to={'/advertising'} className="govazd">Գովազդ կայքում</Link>
     <Link to={'/terms_of_use'} className="kanon">Օգտագործման կանոնները</Link>
     <Link to={'/help'} className="help">Օգնություն</Link>
     <Link to={'/contact'} className="call">Կապ</Link>  
   </nav>
   
   </div>

   
    </>
    
  )

  }
export default Navbar