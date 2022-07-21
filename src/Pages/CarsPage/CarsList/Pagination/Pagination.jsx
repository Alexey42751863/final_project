import React from 'react'
import { useState, useEffect } from 'react';
import CarsPage from '../../CarsPage';

const Pagination = ({ filteredData, changePageNumber, currentPage }) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    console.log(filteredData);

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= Math.ceil(filteredData.length / 10); i++) {
            arr.push(i)
        }
        if (arr.length > 5) {
            arr = arr.filter(el => (el >= currentPage - 2 && el <= currentPage + 2) && el > 0)
        }
        setPageNumbers(arr)
    }, [CarsPage, filteredData, currentPage])

    return (
        <div className='pagination'>
            <span
                className={currentPage > 1 ? 'pagespannk btn active' : 'pagespannk btn'}
                onClick={() => changePageNumber(currentPage - 1)}
            >
                <i className="fa-solid fa-angle-left"></i>
            </span>
            {
                pageNumbers[0] > 2 && <span className='page-item' >
                    <a href="#" className='pagespannk grey' onClick={() => changePageNumber(1)}>
                        {1}
                    </a>
                    <i className="fa-solid fa-ellipsis"></i>
                </span>
            }
            {
                pageNumbers.map(num => {
                    return <span className='page-item' key={num}>
                        <a href="#" className = {currentPage ===num? 'pagespannk active': 'pagespannk'}  onClick={() => changePageNumber(num)}>
                            {num}
                        </a>
                    </span>
                })
            }
            {
                pageNumbers[pageNumbers.length - 1] < (Math.ceil(filteredData.length / 10) - 1) && <span className='page-item' >
                    <i className="fa-solid fa-ellipsis"></i>
                    <a href="#" className='pagespannk grey' onClick={() => changePageNumber(Math.ceil(filteredData.length / 10))}>
                        {Math.ceil(filteredData.length / 10)}
                    </a>
                </span>
            }
            <span
                className={currentPage < Math.ceil(filteredData.length / 10) ? 'pagespannk btn active' : 'pagespannk btn'}
                onClick={() => changePageNumber(currentPage + 1)}
            >
                <i className="fa-solid fa-angle-right"></i>
            </span>
        </div>

    )
}

export default Pagination