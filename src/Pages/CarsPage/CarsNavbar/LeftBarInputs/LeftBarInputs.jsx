import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const LeftBarInputs = ({ title, id, min, max, step, filterOptions, setFilterOptions, filtering }) => {
    const [dateOfStartValue, setDateOfStartValue] = useState('')
    const [dateOfEndValue, setDateOfEndValue] = useState('')
    const [priceOfStartValue, setPriceOfStartValue] = useState('')
    const [priceOfEndValue, setPriceOfEndValue] = useState('')
    const [clearanceCheck, setClearanceCheck] = useState('')
    const [contractualCheck, setContractualCheck] = useState('')
    const [open, setOpen] = useState(false);

    useEffect(() => {
        filterOptions.dateOfStart && setDateOfStartValue(filterOptions.dateOfStart)
        filterOptions.dateOfEnd && setDateOfEndValue(filterOptions.dateOfEnd)
        filterOptions.priceOfStart && setPriceOfStartValue(filterOptions.priceOfStart)
        filterOptions.priceOfEnd && setPriceOfEndValue(filterOptions.priceOfEnd)
        filterOptions.clearance && setClearanceCheck(filterOptions.clearance)
        filterOptions.contractual && setContractualCheck(filterOptions.contractual)
    }, [
        filterOptions.dateOfStart,
        filterOptions.dateOfEnd,
        filterOptions.priceOfStart,
        filterOptions.priceOfEnd,
        filterOptions.clearance,
        filterOptions.contractual
    ])

    const onClickFunc = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    const handleChange = (value, key) => {
        if (key === 'clearance' || key === 'contractual') {
            setFilterOptions(filterOptions, filterOptions[key] = (filterOptions[key] ? '' : 'true'))
        } else if (filterOptions[key] === value) {
            setFilterOptions(filterOptions, filterOptions[key] = '')
        } else setFilterOptions(filterOptions, filterOptions[key] = value)

        setDateOfStartValue(filterOptions.dateOfStart)
        setDateOfEndValue(filterOptions.dateOfEnd)
        setPriceOfStartValue(filterOptions.priceOfStart)
        setPriceOfEndValue(filterOptions.priceOfEnd)
        setClearanceCheck(filterOptions.clearance)
        setContractualCheck(filterOptions.contractual)
        filtering()
    }

    return (
        <div className="LeftBarInputs">
            <div className='params' onClick={onClickFunc}>
                <p>{title}</p>
                <AiOutlineDown className={open ? 'hidden' : 'downIcon'} />
                <AiOutlineUp className={open ? 'show' : 'upIcon'} />
            </div>
            <div className={open ? 'filterParams datePrice show' : 'filterParams datePrice'}>
                <div className='inputs'>
                    <input type="number"
                        id={id === 'price' ? 'priceOfStart' : 'dateOfStart'}
                        value={id === 'price' ? priceOfStartValue : dateOfStartValue}
                        min={min}
                        max={max}
                        step={step}
                        placeholder="սկսած"
                        onChange={(e) => handleChange(e.target.value, e.target.id)}
                    />
                    <input type="number"
                        id={id === 'price' ? 'priceOfEnd' : 'dateOfEnd'}
                        value={id === 'price' ? priceOfEndValue : dateOfEndValue}
                        min={min}
                        max={max}
                        step={step}
                        placeholder="մինչև"
                        onChange={(e) => handleChange(e.target.value, e.target.id)}
                    />
                </div>
                {id === 'price' && < div className='check'>
                    <p>
                        <input type="checkbox" id="clearance" checked={clearanceCheck} onChange={(e) => handleChange(e.target.value, e.target.id)} />
                        <label htmlFor="clearance">Մաքսազերծված է</label>
                    </p>
                    <p>
                        <input type="checkbox" id="contractual" checked={contractualCheck} onChange={(e) => handleChange(e.target.value, e.target.id)} />
                        <label htmlFor="contractual">Պայմանագրային</label>
                    </p>
                </div>
                }
            </div>
        </div >
    )
}

export default LeftBarInputs