
import React from 'react'
import { useState, useEffect } from 'react';

const Pagination = ({ filteredData }) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= Math.ceil(filteredData.length / 10); i++) {
            arr.push(i)
        }
        setPageNumbers(arr)
    }, [filteredData])


    return (
        <div className='pagination'>
            {
                pageNumbers.map(num => {
                    return <span className='page-item' key={num}>
                        <a href="#" className='pagespannk'>
                            {num}
                        </a>
                    </span>
                })
            }
        </div>
    )
}

export default Pagination