import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './slider.css'
import CarItem from './CarItem'

const Slider = ({ title, cars = [] }) => {
    const [slider, setSlider] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        let arr = []
        for (let i = 0; i < 40; i++) {
            arr.push(cars[random(cars)])
        }
        setSlider(arr)
    }, [])

    const random = (cars) => {
        return Math.floor(Math.random() * (cars.length - 1) + 1)
    }

    const nextPage = () => {
        if (pageNumber === 3) {
            setPageNumber(0)
        } else setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        if (pageNumber === 0) {
            setPageNumber(3)
        } else setPageNumber(pageNumber - 1)
    }

    return (
        <div className="slider_container">
            <div className="slider">
                <div className="command_line">
                    <h1>{title}</h1>
                    <div className="arrows">
                        <span>{pageNumber + 1}/4</span>
                        <button onClick={prevPage} className="btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <button onClick={nextPage} className="btn"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div>
                    <div className={pageNumber === 0 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index < 5 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                    <div className={pageNumber === 0 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 5 && index < 10 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                </div>
                <div>
                    <div className={pageNumber === 1 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 10 && index < 15 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                    <div className={pageNumber === 1 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 15 && index < 20 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                </div>
                <div>
                    <div className={pageNumber === 2 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 20 && index < 25 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                    <div className={pageNumber === 2 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 25 && index < 30 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                </div>
                <div>
                    <div className={pageNumber === 3 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 30 && index < 35 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                    <div className={pageNumber === 3 ? " slider_item show" : " slider_item hide"}>
                        {slider.map((el, index) => index >= 35 && index < 40 && <div className="photo" key={index}>
                            <Link to={'/detail/'+ el.id}>
                                <CarItem car={el} />
                            </Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider