import React from 'react'

const CarsRow = ({ car }) => {

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
    <div className='CarsRow'>
      <div className='row_content'>
        <span className="row_title">
          <span className='date'>{car.date}</span>
          {car.mark} {car.model}
        </span>
        <div className="about">
          <span className='dateNow'>{getDateNow()}</span>
          <span className='country'>{car.country + ', '}</span>
          {(car.clearance === 'true') ? <span className="clearance">Մաքսազերծված է</span> : <span className="clearance no">մաքսազերծված չէ</span>}
        </div>
      </div>
      <div className="row_price">
        <span>{car.priceDollar ? '$ ' + car.priceDollar : car.priceDram}</span>
      </div>
    </div>
  )
}

export default CarsRow