import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { CgMenuGridR, CgMenuRightAlt } from 'react-icons/cg'

const CarsPageHeader = ({ sorting }) => {
    const [hover, setHover] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Գին՝  էժանից - թանկ')
    const select = document.querySelector('.select');

    const handleClick = () => {
        select.classList.toggle('show')
    }

    const onMouseOver = () => {
        hover ? setHover(false) : setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    const handleSelectOption = (e) => {
        setSelectedValue(e.target.innerText)
        handleClick()
        sorting(e.target.id)
    }

    return (
        <header className='carsHeader'>
            <div className={hover ? 'filterByType border' : 'filterByType'}
                onMouseEnter={onMouseOver}
                onMouseLeave={onMouseLeave}
                onClick={handleClick}
            >
                <p>{selectedValue}</p>
                <AiOutlineDown className={hover ? 'hide' : 'downIcon'} />
                <AiOutlineUp className={hover ? 'show' : 'upIcon'} />
            </div>
            <div className="select" onClick={(e) => handleSelectOption(e)}>
                <div className='option' id='1'>
                    Գին՝  էժանից - թանկ
                </div>
                <div className='option' id='2'>
                    Գին՝  թանկից - էժան
                </div>
                <div className='option' id='3'>
                    Տարեթիվ՝ ամենահները
                </div>
                <div className='option' id='4'>
                    Տարեթիվ՝ ամենանորերը
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