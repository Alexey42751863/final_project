import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

const Slider = ({title = 'slider', data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}) => {
    const [slider, setSlider] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        let arr = []
        for(let i = 0; i < 20; i++){
            arr.push(data[random(data)])
        }
        setSlider(arr)
    }, [])

    console.log(slider);


    const random = (data) => {
        return Math.floor(Math.random() * (data.length-1)+1)
    }

    const nextPage = () => {
        if(pageNumber === 3){
            setPageNumber(0)
        }else setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        if(pageNumber === 0){
            setPageNumber(3)
        }else setPageNumber(pageNumber - 1)
    }

    return (
        <div className="slider_container">
            <div className="slider">
                <div className="command_line">
                    <h1>{title}</h1>
                    <div className="arrows">
                        <button onClick={nextPage} className="btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <br/>
                        <button onClick={prevPage} className="btn"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className= {pageNumber === 0? " slider_item show" : " slider_item hide"}>
                    <div className="photo">{slider[0]}</div>
                    <div className="photo">{slider[1]}</div>
                    <div className="photo">{slider[2]}</div>
                    <div className="photo">{slider[3]}</div>
                    <div className="photo">{slider[4]}</div>
                </div>
                <div className= {pageNumber === 1? " slider_item show" : " slider_item hide"}>
                    <div className="photo">{slider[5]}</div>
                    <div className="photo">{slider[6]}</div>
                    <div className="photo">{slider[7]}</div>
                    <div className="photo">{slider[8]}</div>
                    <div className="photo">{slider[9]}</div>
                </div>
                <div className= {pageNumber === 2? " slider_item show" : " slider_item hide"}>
                    <div className="photo">{slider[10]}</div>
                    <div className="photo">{slider[11]}</div>
                    <div className="photo">{slider[12]}</div>
                    <div className="photo">{slider[13]}</div>
                    <div className="photo">{slider[14]}</div>
                </div>
                <div className= {pageNumber === 3? " slider_item show" : " slider_item hide"}>
                    <div className="photo">{slider[15]}</div>
                    <div className="photo">{slider[16]}</div>
                    <div className="photo">{slider[17]}</div>
                    <div className="photo">{slider[18]}</div>
                    <div className="photo">{slider[19]}</div>
                </div>            
            </div>

        </div>
    )
}

export default Slider