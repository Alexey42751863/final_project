import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitlePage = ({ car }) => {
    const price=document.querySelector('.pricelist')
    const mouseOverPrice=()=>{
        price.classList.add('hidden');
    }
    const mouseLeaveFromPrice=()=>{
        price.classList.remove('hidden')
    }
    
    const navigate = useNavigate();
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
                        05.07.2022
                    </div>
                    <div className="city">
                       {car.country} , {car.city}
                    </div>
                    <div className="customs">
                       {car.clearance? 'Մաքսազերծված է':'Մաքսազերծված չէ'}
                    </div>
                </div>
            </div>
            <div className="price"onMouseOver={mouseOverPrice} onMouseLeave={mouseLeaveFromPrice}>
                {car.priceDolor} $
                <div className="pricelist" >
                    <div className="prices dol">{car.priceDolor} $</div>
                    <div className="prices">{car.priceDram} ֏</div>
                    <div className="prices">{car.priceEuro} €</div>
                    <div className="prices">{car.priceRubli} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default TitlePage