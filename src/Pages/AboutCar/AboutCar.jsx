import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AboutCar = () => {

  const [ cars, setCars ] = useState([])
  const [ loading, seLoading] = useState(false)
  const [ currentPage, setCurrentPage] = useState(1)
  const [carPerPage] = useState(10)
  useEffect( () => {
    const getCars = async () => {
      seLoading(true)
      const res = await axios.get('')
      console.log(res);
    }
  }
  )

  return (
    <div className='aboutcar'>
        <div className='img'>
            <img src="https://auto.am/static/offers/2786271/s-5c3af6203cf07785dc86935c9409be7d.jpg" alt="" />
        </div>
        <div className='info'>
            <Link to={'https://auto.am/offer/2786271'} className="type">2010 <span className='name'>BMW X5</span> </Link>
            <p className='props'>156 մղոն , Ամենագնաց, Ավտոմատ, Ձախ, Բենզին, Այլ գույն, Շագանակագույն, 4.8</p>
            <p> <span className='date'>10.07.2022</span>  Հայաստան,</p>
            <span className='clearance'>Մաքսազերծված է</span>
        </div>
        <div className='button'>
            <h3>$17 600</h3>
            <button className='btn'>Գնիր վարկով</button>.
        </div>
    </div>
  )
}
export default AboutCar