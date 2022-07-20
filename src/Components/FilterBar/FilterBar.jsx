import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterMark from './FilterMark'
import FilterModel from './FilterModel'
import FilterCountry from './FilterCountry'
import FilterCity from './FilterCity'
import Filter from './Filter'

const FilterBar = ({ cars, filterFunc, filteredData, removeFilterOption }) => {
    const [filteredCars, setFilteredCars] = useState([])
    const [suggestions, setSuggestions] = useState(0)
    const [openfilter, setOpenfilter] = useState(false)
    const [isHideRows, setIsHideRows] = useState(true)
    const [options, setOptions] = useState({
        mark: ['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai'],
        model: [],
        carBody: ['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք'],
        steeringWheel: ['Ձախ', 'Աջ'],
        gearbox: ['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական'],
        mator: ['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել'],
        tug: ['Առջևի', 'Ետևի', 'Լիաքարշակ'],
        country: ['Հայաստան', 'ԱՄՆ'],
        city: [],
        dateOfStart: [],
        dateOfEnd: [],
        priceOfStart: [],
        priceOfEnd: []
    })
    const [model, setModel]= useState([])

    useEffect(() => {
        console.log(options.model);
        setModel(options.model)
    },[options.model])

    useEffect(() => {
        setOptions(options, options.dateOfStart = [...genOptions(1990, 2022)])
        setOptions(options, options.dateOfEnd = [...genOptions(1990, 2022)])
        setOptions(options, options.priceOfStart = [...genOptions(1000, 100000, 1000).map(el => el = '$' + el)])
        setOptions(options, options.priceOfEnd = [...genOptions(1000, 100000, 1000).map(el => el = '$' + el)])
    }, [])


    useEffect(() => {
        setSuggestions(filteredData.length)
    }, [filteredData])

    const genOptions = (start, finish, interval = 1) => {
        let arr = []
        for (let i = start; i < finish; i = i + interval) {
            arr.push(i)
        }
        return arr
    }

    const handleSelectMark = (e) => {
        let arr = cars.filter(el => el[e.target.id] === e.target.outerText)
        setFilteredCars(arr)
        return new Set(arr.map(el => el.model))
    }

    const handleSelectCity = (e) => {
        let arr = cars.filter(el => el[e.target.id] === e.target.outerText)
        setFilteredCars(arr)
        return new Set(arr.map(el => el.city).filter(el => el != false))
    }

    const openfilterfunc = () => {
        setOpenfilter(!openfilter)
        setIsHideRows(!isHideRows)
    }

    const handleSelectOption = (e, title) => {
        title === 'priceOfStart' || title === 'priceOfEnd' ? filterFunc(title, e.target.outerText.slice(1)) : filterFunc(title, e.target.outerText)
    }

    const handleClearance = (e) => {
        e.target.checked ? filterFunc('clearance', String(e.target.checked)) : filterFunc('clearance', '')
    }

    const handleFilterBtn = () => {

    }

    return (
        <div className='filter-bar'>
            <div className='row'>
                <div className='filter-container'>
                    <FilterMark
                        title={'Մակնիշը'}
                        id={'mark'}
                        options={options}
                        handleSelectMark={handleSelectMark}
                        setOptions={setOptions}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterModel
                        title={'Մոդելը'}
                        id={'model'}
                        options={model}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Տարին, սկս.'}
                        id={'dateOfStart'}
                        options={options.dateOfStart}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                    <Filter
                        title={'մինչև'}
                        id={'dateOfEnd'}
                        options={options.dateOfEnd}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Գինը սկս.'}
                        id={'priceOfStart'}
                        options={options.priceOfStart}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                    <Filter
                        title={'մինչև'}
                        id={'priceOfEnd'}
                        options={options.priceOfEnd}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
            </div>
            <div className={openfilter ? 'row hidden' : 'row hidden closed'}>
                <div className='filter-container'>
                    <Filter
                        title={'Թափքը'}
                        id={'carBody'}
                        options={options.carBody}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Ղեկը'}
                        id={'steeringWheel'}
                        options={options.steeringWheel}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Փոխանցման տուփը'}
                        id={'gearbox'}
                        options={options.gearbox}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Շարժիչը'}
                        id={'mator'}
                        options={options.mator}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
            </div>
            <div className={openfilter ? 'row hidden' : 'row hidden closed'}>
                <div className='filter-container'>
                    <Filter
                        title={'Քարշակը'}
                        id={'tug'}
                        options={options.tug}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterCountry
                        title={'Երկիրը'}
                        id={'country'}
                        options={options}
                        handleSelectCity={handleSelectCity}
                        setOptions={setOptions}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterCity
                        title={'Մարզը'}
                        id={'city'}
                        options={options.city}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container '>
                </div>
            </div>
            <div className='row last'>
                <div className='checkbox'>
                    <input type="checkbox" id='clearance' onClick={handleClearance} />
                    <label htmlFor="clearance"> Մաքսազերծված </label>
                </div>
                <div className='filterButton' onClick={openfilterfunc}>
                    {!isHideRows ? 'հասարակ որոնում' : 'ընդլայնված որոնում'}
                </div>
            </div>
            <Link to={'/cars'} >
                <button className='filterBtn' onClick={handleFilterBtn}> Բոլոր {suggestions} առաջարկները </button>

            </Link>
        </div>
    )
}

export default FilterBar