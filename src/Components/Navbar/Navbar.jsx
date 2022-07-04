import React from 'react'
import {NavLink as Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/'}>Home</Link>
      <Link to={'/dealers'}>Դիլերներ</Link>
      <Link to={'/be_a_dealer'}>Դառնալ ավտոդիլեր</Link>
      <Link to={'/advertising'}>Գովազդ կայքում</Link>
      <Link to={'/terms_of_use'}>Օգտագործման կանոնները</Link>
      <Link to={'/help'}>Օգնություն</Link>
      <Link to={'/contact'}>Կապ</Link>  
    </nav>
  )
}

export default Navbar