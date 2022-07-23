import React from 'react'
import { useState } from 'react';
import CarsCard from './CarsCard/CarsCard';
import CarsRow from './CarsRow';
import CarItem from '../../../Components/Slider/CarItem';
import Pagination from './Pagination'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CarsList = ({ filteredData, selected}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [lastIndex, setLastIndex] = useState(0)
    const [firstIndex, setFirstIndex] = useState(0)

    useEffect(() => {
        setFirstIndex(currentPage*10-10)
        setLastIndex(currentPage*10-1)
    },[currentPage])

    const changePageNumber = num => setCurrentPage(num)

    const selectItem = (iconNumber, el) => {
        switch(iconNumber){
            case(1):
            return <CarsRow car={el}/>
            case(3):
            return <CarItem car={el}/>
            default:
            return <CarsCard car={el}/>
        }
    }

    return (
        <div className="carsList">
            <div className={selected===3 ? "carItems flex" : "carItems"}>
                {filteredData.map((el, index) => {
                    return <Link to={'/detail/' + el.id} key={index}>
                        {(index >= firstIndex && index <= lastIndex) && selectItem(selected, el)}
                    </Link>
                })}
            </div>
            <Pagination changePageNumber={changePageNumber} filteredData={filteredData} currentPage={currentPage} />

        </div>
    )
}

export default CarsList


