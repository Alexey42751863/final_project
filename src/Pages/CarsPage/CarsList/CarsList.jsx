import React from 'react'
import { useState } from 'react';
import CarsCard from './CarsCard/CarsCard';
import Pagination from './Pagination'

const CarsList = ({filteredData}) => {
    // let data = [
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    //     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    //     21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    // ]

    // console.log(filteredData);
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 1 - 10;

    const currentCar = filteredData.slice(firstIndex + 1, lastIndex - 1)
    // console.log(currentCar);

    const changePageNumber = num => setCurrentPage(num)

    return (
        <div>
            <div className="carsList">                
                {currentCar.map((el, index) => <CarsCard key={index} car={el}/>)}
            </div>
            <Pagination changePageNumber={changePageNumber} filteredData={filteredData} currentPage={currentPage}/>

        </div>
    )
}

export default CarsList


