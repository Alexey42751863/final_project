import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
 const [open, setOpen] = useState(true)


  return (
    <>
     
      <div className='bars' onClick={() => setOpen(!open)}>
       <i className="fa-solid fa-bars"></i>
       </div>
      <div className={open ? "container open" : "container"}>
      <span className='user'>
      <i className="fa-solid fa-circle-user"></i>
      <h2>Մուտք</h2>
      </span>
     

      <nav className="navbar">
      <Link to={'/'} className="home">Home</Link>
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