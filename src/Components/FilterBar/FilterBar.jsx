import React, { useEffect } from 'react'
import { useState } from 'react'
import FilterMark from './FilterMark'
import FilterModel from './FilterModel'
import FilterCountry from './FilterCountry'
import FilterCity from './FilterCity'
import Filter from './Filter'

const FilterBar = ({ cars, filterFunc, filteredData, removeFilterOption }) => {
    const [models, setModels] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCars, setFilteredCars] = useState([])
    const [suggestions, setSuggestions] = useState(0)
    const [openfilter, setOpenfilter] = useState(false)
    const [isHideRows, setIsHideRows] = useState(true)
    const [isClearance, setIsClearance] = useState(false)

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
        setFilteredCars(cars.filter(el => el[e.target.id] === e.target.outerText))
        // filterFunc('mark', e.target.outerText)
        return new Set(filteredCars.map(el => el.model))
    }

    const handleSelectCity = (e) => {
        setFilteredCars(cars.filter(el => el[e.target.id] === e.target.outerText))
        return new Set(filteredCars.map(el => el.city).filter(el => el !== undefined))
    }

    const openfilterfunc = () => {
        setOpenfilter(!openfilter)
        setIsHideRows(!isHideRows)
    }

    const handleSelectOption = (e, title) => {
        title === 'priceOfStart' || title === 'priceOfEnd'? filterFunc(title, e.target.outerText.slice(1)): filterFunc(title, e.target.outerText)
    }

    const handleFilterBtn = () => {

    }

    const handleClearance = (e) => {
        e.target.checked? filterFunc('clearance', String(e.target.checked)): filterFunc('clearance', '')
    }

    return (
        <div className='filter-bar'>
            <div className='row'>
                <div className='filter-container'>
                    <FilterMark
                        title={'Մակնիշը'}
                        id={'mark'}
                        options={['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai']}
                        handleSelectMark={handleSelectMark}
                        setModels={setModels}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterModel
                        title={'Մոդելը'}
                        id={'model'}
                        options={models}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Տարին, սկս.'}
                        id={'dateOfStart'}
                        options={genOptions(1990, 2022)}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                    <Filter
                        title={'մինչև'}
                        id={'dateOfEnd'}
                        options={genOptions(1990, 2022)}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Գինը սկս.'}
                        id={'priceOfStart'}
                        options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                    <Filter
                        title={'մինչև'}
                        id={'priceOfEnd'}
                        options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)}
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
                        options={['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք']}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Ղեկը'}
                        id={'steeringWheel'}
                        options={['Ձախ', 'Աջ']}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Փոխանցման տուփը'}
                        id={'gearbox'}
                        options={['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական']} 
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                        />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Շարժիչը'}
                        id={'mator'}
                        options={['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել']} 
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
                        options={['Առջևի', 'Ետևի', 'Լիաքարշակ']}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterCountry
                        title={'Երկիրը'}
                        id={'country'}
                        options={['Հայաստան', 'ԱՄՆ']}
                        handleSelectCity={handleSelectCity}
                        setCities={setCities}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterCity
                        title={'Մարզը'}
                        id={'city'}
                        options={cities}
                        handleSelectOption={handleSelectOption}
                        removeFilterOption={removeFilterOption}
                    />
                </div>
                <div className='filter-container '>
                </div>
            </div>
            <div className='row last'>
                <div className='checkbox'>
                    <input type="checkbox" id='clearance' onClick={handleClearance}/>
                    <label htmlFor="clearance"> Մաքսազերծված </label>
                </div>
                <div className='filterButton' onClick={openfilterfunc}>
                    {!isHideRows? 'հասարակ որոնում': 'ընդլայնված որոնում'}
                </div>
            </div>
            <button className='filterBtn' onClick={handleFilterBtn}> Բոլոր {suggestions} առաջարկները </button>
        </div>
    )
}

export default FilterBar