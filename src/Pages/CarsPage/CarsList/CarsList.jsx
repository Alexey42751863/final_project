import React from 'react'
import { useState } from 'react';
import Pagination from './Pagination'

const CarsList = () => {
    let data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 1 - 10;

    const currentCar = data.slice(firstIndex + 1, lastIndex - 1)
    // console.log(currentCar);

    const changePageNumber = num => setCurrentPage(num)

    return (
        <div>
            <div className="content">
                {currentCar.map((el, index) => <div className='contentDiv' key={index}>{el}</div>)}
            </div>
            <Pagination changePageNumber={changePageNumber} />

        </div>
    )
}

export default CarsList



/*const CarsPage = () => {
    const [open, setOpen] = useState(false)
    let data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]
    const [currentPage, setCurrentPage] = useState(1)
    // const [carPerPage] = useState(10)

    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 1 - 10;
  
    const currentCar = data.slice(firstIndex + 1,lastIndex-1)
    // console.log(currentCar);


const changePageNumber = num => setCurrentPage(num)

    const onClickFunc = () => {
        if (open === false) {
            setOpen(true);
        } else setOpen(false)
    }*/