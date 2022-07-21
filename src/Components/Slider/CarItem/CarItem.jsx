import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const CarItem = ({ car }) => {
  const onMouseOver=(e)=>{
    e.target.src=car.imgUrls[1]
  }
  const onMouseLeave=(e)=>{
    e.target.src=car.imgUrls[0]
  }
  return (
    car && <div className="carItem">
      <div className='obshi'>
      <Link to={'/detail/'+car.id}>
          <img onMouseOver={onMouseOver} 
            onMouseLeave={onMouseLeave}
            src={car.imgUrls[0]} alt='car_image' />
        </Link>
        <div className="info">
          <div className=' arajTox'>
            <span>{car.mark}</span>
            <span>{car.model}</span>
          </div>
          <div className=' Ekrordtox'>
            <p>{car.date}</p>
            <p>{car.priceDollar}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarItem