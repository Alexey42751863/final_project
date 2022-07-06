import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_menu">
            <a href="#">Նախագծի մասին</a>
            <a href="#">Օգտագործման կանոնները</a>
            <a href="#">Գովազդ կայքում</a>
            <a href="#">Օգնություն</a>
            <a href="#">Կապ</a>
        </div>
        <div className="footer_logo">
            <div className="logo">
                <img src="https://auto.am/assets/svg/logo_footer.svg" />
                <p>©2003-2022 auto.am</p>
            </div>
            <span>Մշակված է <a href="https://matemat.io/">MATEMAT</a> -ում</span>
        </div>
    </div>
  )
}

export default Footer