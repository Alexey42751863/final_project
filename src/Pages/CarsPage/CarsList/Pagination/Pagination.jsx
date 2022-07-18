import React from 'react'
import { useState, useEffect } from 'react';
import CarsPage from '../../CarsPage';

const Pagination = ({ filteredData = [], changePageNumber }) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= 3; i++) {
            arr.push(i)
        }
        setPageNumbers(arr)
    }, [CarsPage])

    return (
        <div className='pagination'>
            {
                pageNumbers.map(num => {
                    return <span className='page-item' key={num}>
                        <a href="#" className='pagespannk' onClick={() => changePageNumber(num)}>
                            {num}
                        </a>
                    </span>
                })
            }
        </div>

    )
}

export default Pagination