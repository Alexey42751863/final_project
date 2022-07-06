import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_menu">
            <a href="#">Նախագծի մասին</a>
            <a href="/terms_of_use">Օգտագործման կանոնները</a>
            <a href="/advertising">Գովազդ կայքում</a>
            <a href="/help">Օգնություն</a>
            <a href="/contact">Կապ</a>
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