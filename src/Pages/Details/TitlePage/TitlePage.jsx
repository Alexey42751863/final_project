import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitlePage = ({ car }) => {
    const price=document.querySelector('.pricelist')
    const mouseOverPrice=()=>{
      if(car.priceDollar) price.classList.add('hidden');
    }
    const mouseLeaveFromPrice = () => {
        price.classList.remove('hidden')
    }

    const navigate = useNavigate();

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
        <div className="TitlePage">
            <div className="mainInfo">
                <div className="modelYear">
                    <i className="fa-solid fa-arrow-left-long" onClick={() => navigate(-1)}></i>
                    <div className='moYe year'>{car.date}</div>
                    <div className="moYe car mark">
                        {car.mark}
                    </div>
                    <div className="moYe car model">
                        {car.model}
                    </div>
                </div>
                <div className="addInfo">
                    <div className="postDate">
                        {getDateNow()}
                    </div>
                    <div className="city">
                        {car.country} , {car.city}
                    </div>
                    <div className="customs">
                        {car.clearance ? 'Մաքսազերծված է' : 'Մաքսազերծված չէ'}
                    </div>
                </div> 
            </div>
            <div className="price" onMouseOver={mouseOverPrice} onMouseLeave={mouseLeaveFromPrice}>
              {car.priceDollar?  car.priceDollar+ ' $':car.priceDram}
                <div className="pricelist" >
                    <div className="prices dol">{car.priceDollar} $</div>
                    <div className="prices">{car.priceDram} ֏</div>
                    <div className="prices">{car.priceEuro} €</div>
                    <div className="prices">{car.priceRubli} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default TitlePage