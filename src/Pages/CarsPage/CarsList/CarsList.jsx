import React from 'react'
import { useState } from 'react';
import CarsCard from './CarsCard/CarsCard';
import Pagination from './Pagination'
import { Link } from 'react-router-dom';

const CarsList = ({ filteredData }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * 10;
    const firstIndex = lastIndex - 1 - 10;

    const currentCar = filteredData.slice(firstIndex + 1, lastIndex - 1)

    const changePageNumber = num => setCurrentPage(num)

    return (
        <div>
            <div className="carsList">
                {currentCar.map((el, index) => {
                    return <Link to={'/detail/' + el.id}>
                        <CarsCard key={index} car={el} />
                    </Link>
                })}
            </div>
            <Pagination changePageNumber={changePageNumber} filteredData={filteredData} currentPage={currentPage} />

        </div>
    )
}

export default CarsList


