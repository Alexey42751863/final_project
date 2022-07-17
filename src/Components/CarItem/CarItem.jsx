import React from 'react'

const CarItem = ({ car }) => {

  return (
    car && <div className="carItem">
      <div className='obshi'>
        <img src={car.imgUrls[0]} alt="car_image" />
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