import React from 'react';
import { FaTimes } from 'react-icons/fa';


const Fullscreen = ({car,closeFullscreen}) => {
    const urls = car.imgUrls;
  return (
    <div className="Fullscreen" onClick={closeFullscreen}>
                <div className="times">
                    <FaTimes />
                </div>
                <div className="wrapper">
                    <div className="wrapperHeader">
                        <div className='carInfo'>
                            <div className="mainInfo">
                                <div className='productDate'>{car.date}</div>
                                <div className='markModelInfo'>{car.mark}</div>
                                <div className='markModelInfo'>{car.model}</div>
                            </div>  
                            <div className='priceInfo'>{car.priceDollar} $</div>
                        </div>
                        <div className='addInfo'>
                            <span className="customs">
                                {
                                car.clearance?'Մաքսազերծված է':'Մաքսազերծված է'
                            },
                            </span>
                            <span className='placeInfo'>
                                {car.country?car.country:''},{car.city?car.city:''}
                            </span>
                        </div> 
                    </div>
                    <div className="wrapperContent">
                        {urls && urls.map((url,index) => (
                            <div className="wrapperImg" key={index}>
                                {<img src={url}></img>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default Fullscreen