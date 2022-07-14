import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';


const Navbar = ({ showSideBarM }) => {
  const [open, setOpen] = useState(false)


  const showSideBar = () => setOpen(true)
  const closeSideBar = () => {
    setOpen(false)
    showSideBarM()
  }
const closeLink = () => setOpen(false)

  useEffect(() => {
    let handler = (event) => {
      if (event.target.className == 'container open') {
        setOpen(false)
      }

    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })



  return (
    <div>
      <div className='bars' onClick={showSideBar}>
        <i class="fa-solid fa-bars"></i>
      </div>

      <div className={open ? "container open" : "container"}>

        <nav className="navbar">
          <span className='user'>
            <i className="fa-solid fa-circle-user"></i>
            <h2>Մուտք</h2>

          </span>
          <span className='massage' onClick={closeSideBar}>
            <i className="fa-solid fa-message"></i>
            <h5>Հաղորդագրություններ</h5>
          </span>

          <Link to={'/dealers'} className="dillers" onClick={closeLink}>Դիլերներ</Link>
          <Link to={'/be_a_dealer'} className="avtodiller" onClick={closeLink}>Դառնալ ավտոդիլեր</Link>
          <Link to={'/advertising'} className="govazd" onClick={closeLink}>Գովազդ կայքում</Link>
          <Link to={'/terms_of_use'} className="kanon" onClick={closeLink}>Օգտագործման կանոնները</Link>
          <Link to={'/help'} className="help" onClick={closeLink}>Օգնություն</Link>
          <Link to={'/contact'} className="call" onClick={closeLink}>Կապ</Link>

        </nav>


      </div>

    </div>




  )

}
export default Navbar