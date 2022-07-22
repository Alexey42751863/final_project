import React from 'react'
import LeftBar from './LeftBar'
// import UpDown from './UpDown'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import LeftBarInputs from './LeftBarInputs'

const CarsNavbar = ({ cars, filterOptions, setFilterOptions, filtering, searchValue, setSearchValue }) => {

    const [markCheck, setMarkCheck] = useState('')
    const [modelCheck, setModelCheck] = useState('')
    const [carBodyCheck, setCarBodyCheck] = useState('')
    const [matorCheck, setMatorCheck] = useState('')
    const [gearboxCheck, setGearboxCheck] = useState('')
    const [tugCheck, setTugCheck] = useState('')
    const [steeringWheelCheck, setSteeringWheelCheck] = useState('')
    const [countryCheck, setCountryCheck] = useState('')
    const [cityCheck, setCityCheck] = useState('')

    const [mark] = useState(['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai']);
    const [model, setModel] = useState([]);
    const [carBody] = useState(['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք']);
    const [mator] = useState(['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել']);
    const [gearbox] = useState(['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական']);
    const [tug] = useState(['Առջևի', 'Ետևի', 'Լիաքարշակ']);
    const [steeringWheel] = useState(['Ձախ', 'Աջ']);
    const [country] = useState(['Հայաստան', 'ԱՄՆ']);
    const [city, setCity] = useState([]);

    // useEffect(() => {
    //     setMarkCheck('')
    //     setModelCheck('')
    //     setCarBodyCheck('')
    //     setMatorCheck('')
    //     setGearboxCheck('')
    //     setTugCheck('')
    //     setSteeringWheelCheck('')
    //     setCountryCheck('')
    //     setCityCheck('')
    // }, [searchValue])

    useEffect(() => {
        markCheck ? setModel([...handleSelectMark('mark', markCheck)]) : setModel([])
        countryCheck ? setCity([...handleSelectCountry('country', countryCheck)]) : setCity([])
    }, [markCheck, countryCheck])

    useEffect(() => {        
        filterOptions.mark && setMarkCheck(filterOptions.mark)
        filterOptions.model && setModelCheck(filterOptions.model)
        filterOptions.carBody && setCarBodyCheck(filterOptions.carBody)
        filterOptions.mator && setMatorCheck(filterOptions.mator)
        filterOptions.gearbox && setGearboxCheck(filterOptions.gearbox)
        filterOptions.tug && setTugCheck(filterOptions.tug)
        filterOptions.steeringWheel && setSteeringWheelCheck(filterOptions.steeringWheel)
        filterOptions.country && setCountryCheck(filterOptions.country)
        filterOptions.city && setCityCheck(filterOptions.city)
    }, [
        filterOptions.mark, 
        filterOptions.model, 
        filterOptions.carBody, 
        filterOptions.mator, 
        filterOptions.gearbox, 
        filterOptions.tug, 
        filterOptions.steeringWheel, 
        filterOptions.country,
        filterOptions.city,
        searchValue
    ])

    const handleSelectMark = (key, value) => {
        let arr = cars.filter(el => el[key] === value)
        return new Set(arr.map(el => el.model))
    }

    const handleSelectCountry = (key, value) => {
        let arr = cars.filter(el => el[key] === value)
        return new Set(arr.map(el => el.city).filter(el => el))
    }

    const handleChange = (value, key) => {
        setSearchValue('')

        if (filterOptions[key] === value) {
            setFilterOptions(filterOptions, filterOptions[key] = '')
            if (key === "mark") setFilterOptions(filterOptions, filterOptions.model = '')
            if (key === "country") setFilterOptions(filterOptions, filterOptions.city = '')
        } else setFilterOptions(filterOptions, filterOptions[key] = value)

        setMarkCheck(filterOptions.mark)
        setModelCheck(filterOptions.model)
        setCarBodyCheck(filterOptions.carBody)
        setMatorCheck(filterOptions.mator)
        setGearboxCheck(filterOptions.gearbox)
        setTugCheck(filterOptions.tug)
        setSteeringWheelCheck(filterOptions.steeringWheel)
        setCountryCheck(filterOptions.country)
        setCityCheck(filterOptions.city)
        filtering()
    }

    return (
        <nav className='carsNavbar'>
            <LeftBar title={'Մակնիշը'} id={'mark'} list={mark} filterOption={markCheck} handleChange={handleChange} />
            {model.length !== 0 && <LeftBar
                title={markCheck}
                id={'model'}
                list={model}
                filterOption={modelCheck}
                handleChange={handleChange}
            />}
            <LeftBarInputs
                title={'Տարեթիվը'}
                id={'date'}
                min={1990}
                max={2022}
                step={1}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                filtering={filtering}
            />
            <LeftBarInputs
                title={'Գինը'}
                id={'price'}
                min={1000}
                max={10000000}
                step={1000}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                filtering={filtering}
            />
            <LeftBar title={'Թափքը'} id={'carBody'} list={carBody} filterOption={carBodyCheck} handleChange={handleChange} />
            <LeftBar title={'Շարժիչը'} id={'mator'} list={mator} filterOption={matorCheck} handleChange={handleChange} />
            <LeftBar title={'Փոխանցման տուփը'} id={'gearbox'} list={gearbox} filterOption={gearboxCheck} handleChange={handleChange} />
            <LeftBar title={'Քարշակը'} id={'tug'} list={tug} filterOption={tugCheck} handleChange={handleChange} />
            <LeftBar title={'Ղեկը'} id={'steeringWheel'} list={steeringWheel} filterOption={steeringWheelCheck} handleChange={handleChange} />
            <LeftBar title={'Գտնվելու վայրը'} id={'country'} list={country} filterOption={countryCheck} handleChange={handleChange} />
            {city.length !== 0 && <LeftBar
                title={countryCheck}
                id={'city'}
                list={city}
                filterOption={cityCheck}
                handleChange={handleChange}
            />}
            <div className='findClose'>
                <span className='findSpan'> <BsSearch /> loop</span> <span className='closeSpan'><FaRegTimesCircle /></span>
            </div>
        </nav>
    )
}

export default CarsNavbar