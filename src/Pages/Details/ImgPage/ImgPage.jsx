import React, { useState } from 'react';
import {FiChevronLeft,FiChevronRight,FiMessageSquare} from 'react-icons/fi';
import {BsArrowsFullscreen ,BsHeartFill,BsFillTelephoneFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';


const ImgPage = ({car}) => {
    const[img,setImg]=useState('');
    const[count,setCount]=useState(1)
    const mouseOver=(e)=>{
       if(!e.target.className){
            e.target.className='mouseOver';
        }
    }
    const mouseLeave=e=>{
        if(e.target.className==='mouseOver'){
            e.target.className='';
        }
    }
    const selectedImg=(e)=>{
        e.preventDefault();
        for(let i=0;i<car.length;i++){
            setImg(e.target.src);
            if(e.target.src===car[i]){
                setCount(i+1);
            }
        }
    }
    const toRight = () => {
        let lastIndex = 0
        img && (lastIndex = car.indexOf(img))
        setImg(car[lastIndex+1])
        setCount(count + 1)
        if(count === car.length) setCount(1);
    }
    const toLeft = () => {
        let lastIndex=0;
        img && (lastIndex = car.indexOf(img))
        if(lastIndex===0){
            setImg(car[car.length-1])
        }else setImg(car[lastIndex-1])
        setCount(count - 1)
        if(count === 1) setCount(car.length);
    }
  return (
    <div className="ImgPage">
    {
        car?<div className="mainImg">
            <i className='icon left' onClick={()=>toLeft()}><FiChevronLeft/></i>
            <i className='icon right' onClick={()=>toRight()} ><FiChevronRight/></i>
            <i className='react heart'><BsHeartFill/></i>
            <i className="react icon fullscr"><BsArrowsFullscreen/></i>
            <div className='imgNum'>{count} / {car.length}</div>
        <img src={(!img)?car[0]:img} alt="" />
    </div>:<img src='' alt='no photo'/>
    }
    {
        car? <div className="thumbs"> {car.map(img=>(
       <img src={img} alt='' 
            onMouseOver={mouseOver} 
            onMouseLeave={mouseLeave}
            onClick={selectedImg}
       />
        ))}</div>:<img src='' alt='no photo'/>
    }
    <div className="contact">
        <div className="user">
            <i className="userIcon"><FaUserCircle/></i>
        </div>
        <div className="call"> 
            <i className='phone'><BsFillTelephoneFill/></i>    Զանգահարել
        </div>
        <div className="message">
           <i className="write"><FiMessageSquare/></i> Գրել
        </div>
    </div>
</div>
  )
}

export default ImgPage