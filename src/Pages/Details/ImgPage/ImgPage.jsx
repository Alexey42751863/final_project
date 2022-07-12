import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import { BsArrowsFullscreen, BsHeartFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import Fullscreen from './Fullscreen';


const ImgPage = ({ car }) => {
    const [img, setImg] = useState('');
    const [count, setCount] = useState(1)
    const urls = car.imgUrls;
    const fullScreenBtn = document.querySelector('.Fullscreen');
    const fullScreen = () => {
        fullScreenBtn.classList.add('active');
        console.log(fullScreenBtn.classList);
    }
    const closeFullscreen=()=>{
        fullScreenBtn.classList.remove('active')
    }
    const mouseOver = (e) => {
        if (!e.target.className) {
            e.target.className = 'mouseOver';
        }
    }
    const mouseLeave = e => {
        if (e.target.className === 'mouseOver') {
            e.target.className = '';
        }
    }
    const selectedImg = (e) => {
        e.preventDefault();
        for (let i = 0; i < urls.length; i++) {
            setImg(e.target.src);
            if (e.target.src === urls[i]) {
                setCount(i + 1);
            }
        }
    }
    const toRight = () => {
        let lastIndex = 0
        img && (lastIndex = urls.indexOf(img))
        setImg(urls[lastIndex + 1])
        setCount(count + 1)
        if (count === urls.length) setCount(1);
    }
    const toLeft = () =>{
        let lastIndex = 0
        img && (lastIndex = urls.indexOf(img))
        if(lastIndex===0){
            setImg(urls[urls.length-1])
        }else setImg(urls[lastIndex - 1]);
        setCount(count - 1)
        if (count === 1) setCount(urls.length);
    }
    return (
        <div className="ImgPage">
            {
                urls ? <div className="mainImg">
                    <i className='icon left' onClick={()=>toLeft()}><FiChevronLeft /></i>
                    <i className='icon right' onClick={() => toRight()} ><FiChevronRight /></i>
                    <i className='react heart'><BsHeartFill /></i>
                    <i className="react icon fullscr" onClick={fullScreen}><BsArrowsFullscreen /></i>
                    <div className='imgNum'>{count} / {urls.length}</div>
                    <img src={(!img) ? urls[0] : img} alt="" />
                </div> : <img src='' alt='no photo' />
            }
            <Fullscreen car={car} closeFullscreen={closeFullscreen}/>
            {
                urls ? <div className="thumbs"> {urls.map(img => (
                    <img src={img} alt=''
                        onMouseOver={mouseOver}
                        onMouseLeave={mouseLeave}
                        onClick={selectedImg}
                    />
                ))}</div> : <img src='' alt='no photo' />
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