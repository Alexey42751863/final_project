import React from 'react'

const CarsCard = () => {
  return (
    <div className="CarsCard">
      <div className='obshi'> 
        <div className='img'><img src='https://auto.am/static/offers/2699520/s-c275af1ca984873e4988db5b0592fba1.jpg'/></div>
        <div className="obshi_item">
          <div className="info">
            <div className='arajTox'>
              <p className='date'> car.date</p> 
              <p> car.mark</p> 
              <p>car.model</p>
            </div>
          </div>
          <div className="about">
            <p><span>250000 կմ</span> , Մինիվեն / Միկրոավտոբուս, Ավտոմատ, Աջ, Բենզին, Սպիտակ, ABS, EBD</p>
            <div className="about_item">
              <span className="date">15.07.2022</span>
              <span className="country">Հայաստան,</span>
              <span className="maqs">Մաքսազերծված է</span>
            </div>
          </div>
        </div>
        <div className="price">
              <p>car.priceDollar</p>
          </div>
      </div>
    </div>
  )
}

export default CarsCard