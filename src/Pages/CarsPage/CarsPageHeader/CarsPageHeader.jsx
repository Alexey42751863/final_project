import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { CgMenuGridR, CgMenuRightAlt } from 'react-icons/cg'

const CarsPageHeader = () => {
    return (
        <header className='carsHeader'>
            <div className='filterByType'>
                <p>text</p> <AiOutlineDown />
            </div>
            <div className='buyers'>
                <input type="checkbox" name='individuals' /><label htmlFor="individuals">Անհատներ</label>
                <input type="checkbox" name='dealers' /><label htmlFor="dealers">Դիլերներ</label>
            </div>
            <div className='carsIcons'>
                <div className='frame'>
                    <FiMenu className='menu' />
                </div>
                <div className='frame select'>
                    <CgMenuRightAlt className='menu select' />
                </div>
                <div className='frame'>
                    <CgMenuGridR className='menu' />
                </div>
            </div>
        </header>
    )
}

export default CarsPageHeader