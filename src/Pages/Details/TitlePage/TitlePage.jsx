import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitlePage = ({ car }) => {

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
                        {car.city}
                    </div>
                    <div className="customs">
                        Մաքսազերծված է
                    </div>
                </div>
            </div>
            <div className="price">
                {car.priceDolor} $
            </div>
        </div>
    )
}

export default TitlePage