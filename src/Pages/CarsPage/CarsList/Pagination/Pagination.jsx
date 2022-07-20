import React from 'react'
import { useState, useEffect } from 'react';
import CarsPage from '../../CarsPage';

const Pagination = ({ filteredData = [], changePageNumber }) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    const [openPage,setOpenPage] = useState(!false)

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= 3; i++) {
            arr.push(i)
        }
        setPageNumbers(arr)
    }, [CarsPage])
   
    const change= function (event) {
        const pageNumber = Number(event.target.textContent)+1;
        changePageNumber(pageNumber);
        setOpenPage(pageNumber)
    }

    return (
        <div className='pagination'>
            {
                pageNumbers.map((item,num) => {
                    return <span className='page-item' key={num}>
                        <a href="#" className={`page-item pagespannk ${openPage === item ? 'active' : null}`} onClick={change}>
                            {num}
                        </a>
                    </span>
                })
            }
        </div>

    )
}

export default Pagination