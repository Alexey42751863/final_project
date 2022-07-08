import React, { useEffect } from 'react'
import { useState } from 'react'
import FilterMark from './FilterMark'
import FilterModel from './FilterModel'
import FilterCountry from './FilterCountry'
import FilterCity from './FilterCity'
import Filter from './Filter'

const FilterBar = ({ cars, filterFunc, filteredData }) => {
    const [models, setModels] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCars, setFilteredCars] = useState([])
    const [suggestions, setSuggestions] = useState(0)

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

    const handleSelectOption = (e, title) => {
        filterFunc(title, e.target.outerText)
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
                        options={['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai']}
                        handleSelectMark={handleSelectMark}
                        setModels={setModels}
                        handleSelectOption={handleSelectOption}
                    />
                </div>
                <div className='filter-container'>
                    <FilterModel
                        title={'Մոդելը'}
                        id={'model'}
                        options={models}
                        handleSelectOption ={handleSelectOption}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Տարին, սկս.'}
                        id={'dateOfStart'}
                        options={genOptions(1980, 2022)}
                    />
                    <Filter
                        title={'մինչև'}
                        id={'dateOfEnd'}
                        options={genOptions(1980, 2022)}
                    />
                </div>
                <div className='filter-container double'>
                    <Filter
                        title={'Գինե սկս.'}
                        options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)}
                    />
                    <Filter
                        title={'մինչև'}
                        options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)}
                    />
                </div>
            </div>
            <div className='row hidden'>
                <div className='filter-container'>
                    <Filter
                        title={'Թափքը'}
                        id={'carBody'}
                        options={['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք']}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Ղեկը'}
                        id={'steeringWheel'}
                        options={['Ձախ', 'Աջ']}
                    />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Փոխանցման տուփը'}
                        id={'gearbox'}
                        options={['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական']} />
                </div>
                <div className='filter-container'>
                    <Filter
                        title={'Շարժիչը'}
                        id={'mator'}
                        options={['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել']} />
                </div>
            </div>
            <div className='row hidden'>
                <div className='filter-container'>
                    <Filter
                        title={'Քարշակը'}
                        id={'tug'}
                        options={['Առջևի', 'Ետևի', 'Լիաքարշակ']}
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
                    />
                </div>
                <div className='filter-container'>
                    <FilterCity
                        title={'Մարզը'}
                        id={'city'}
                        options={cities}
                        handleSelectOption={handleSelectOption}
                    />
                </div>
                <div className='filter-container '>
                </div>
            </div>
            <div className='row last'>
                <div className='checkbox'>
                    <input type="checkbox" id='clearance' />
                    <label htmlFor="clearance"> Մաքսազերծված </label>
                </div>
                <div className='filterButton'>
                    հասարակ որոնում
                </div>
            </div>
            <button className='filterBtn' onClick={handleFilterBtn}> Բոլոր {suggestions} առաջարկները </button>
        </div>
    )
}

export default FilterBar