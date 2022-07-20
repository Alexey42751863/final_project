import React from 'react'
import './carsCard.css'

const CarsCard = ({ car }) => {
  const getDateNow = () => {
    let date = new Date()
    let day = date.getDate()
    day = (Math.floor(day / 10) === 0) ? '0' + day : day
    let month = date.getMonth() + 1
    month = (Math.floor(month / 10) === 0) ? '0' + month : month
    let year = date.getFullYear()
    return (day + '.' + month + '.' + year)
  }

  return (
    <div className='carsCard'>
      <div className='img'>
        <img src={car.imgUrls[0]} alt='car_image' />
      </div>
      <div className="obshi_item">
        <div className="info">
          <div className='arajTox'>
            <p className='date'> {car.date}</p>
            <p>{car.mark}</p>
            <p>{car.model}</p>
          </div>
        </div>
        <div className="about">
          <p>
            <span>
              {car.mileage}{(car.country === 'Հայաստան') ? 'կմ, ' : 'մղոն, '}
            </span>
            <span>
              {car.gearbox + ', '}
            </span>
            <span>
              {car.steeringWheel + ', '}
            </span>
            <span>
              {car.mator + ', '}
            </span>
            <span>
              {car.color}
            </span>
          </p>
          <div className="about_item">
            <span className="date">{getDateNow()}</span>
            <span className="country">{car.country}, {car.city && car.city}</span>
            {(car.clearance === 'true') ? <span className="maqs">Մաքսազերծված է</span> : <span className="maqs no">Մաքսազերծված չէ</span>}
          </div>
        </div>
      </div>
      <div className="price">
        <p>{car.priceDollar ? '$ ' + car.priceDollar : car.priceDram}</p>
      </div>
    </div>

  )
}

export default CarsCard