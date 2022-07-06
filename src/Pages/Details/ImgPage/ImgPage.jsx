import React from 'react';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import { BsArrowsFullscreen, BsHeartFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';


const ImgPage = ({ car }) => {
    return (
        <div className="ImgPage">
            {
                car ? <div className="mainImg">
                    <i className='icon left'><FiChevronLeft /></i>
                    <i className='icon right'><FiChevronRight /></i>
                    <i className='react heart'><BsHeartFill /></i>
                    <i className="react icon fullscr"><BsArrowsFullscreen /></i>
                    <div className='imgNum'></div>
                    <img src={car[0]} alt="" />
                </div> : <img src='' alt='no resourse' />
            }
            {
                car ? <div className="thumbs"> 
                {car.map((img, index) => (
                    <img key={index} src={img} alt='' />
                ))}
                </div> : <img src='' alt='no resourse' />
            }
            <div className="contact">
                <div className="user">
                    <i className="userIcon"><FaUserCircle /></i>
                </div>
                <div className="call">
                    <i className='phone'><BsFillTelephoneFill /></i>    Զանգահարել
                </div>
                <div className="message">
                    <i className="write"><FiMessageSquare /></i> Գրել
                </div>
            </div>
        </div>
    )
}

export default ImgPage