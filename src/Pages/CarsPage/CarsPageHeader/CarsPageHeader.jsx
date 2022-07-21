import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { CgMenuGridR, CgMenuRightAlt } from 'react-icons/cg'

const CarsPageHeader = () => {
    const [hover, setHover] = useState(false);
    const select = document.querySelector('.select');

    const onClick = () => {
        select.classList.toggle('show')
    }
    const onMouseOver = () => {
        hover ? setHover(false) : setHover(true);
    }
    const onMouseLeave = () => {
        setHover(false)
    }
    
    return (
        <header className='carsHeader'>
            <div className={hover ? 'filterByType border' : 'filterByType'} onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave} onClick={onClick}>
                <p>Գին՝  էժանից - թանկ</p> <AiOutlineDown className={hover ? 'hide' : 'downIcon'} /><AiOutlineUp className={hover ? 'show' : 'upIcon'} />
            </div>
            <div className="select">
                <div className='option'>
                    <p>Գին՝  էժանից - </p>
                    <p> թանկ</p>
                </div>
                <div className='option'>
                    <p>Գին՝  թանկից -</p>
                    <p> էժան</p>
                </div>
                <div className='option'>
                    <p>Տարեթիվ՝</p>
                    <p> ամենահները</p>
                </div>
                <div className='option'>
                    <p>Տարեթիվ՝</p>
                    <p> ամենանորերը</p>
                </div>
            </div>
            <div className='buyers'>
                <input type="checkbox" name='individuals' /><label htmlFor="individuals">Անհատներ</label>
                <input type="checkbox" name='dealers' /><label htmlFor="dealers">Դիլերներ</label>
            </div>
            <div className='carsIcons'>
                <div className='frame'>
                    <FiMenu className='menu' />
                </div>
                <div className='frame selected'>
                    <CgMenuRightAlt className='menu selected' />
                </div>
                <div className='frame'>
                    <CgMenuGridR className='menu' />
                </div>
            </div>
        </header>
    )
}

export default CarsPageHeader