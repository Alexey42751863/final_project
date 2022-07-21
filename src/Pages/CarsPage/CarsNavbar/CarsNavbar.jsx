import React from 'react'
import LeftBar from './LeftBar'
import UpDown from './UpDown'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const CarsNavbar = ({ filterOptions, setfilterOptions, filtering, setSearchValue }) => {

    const [markCheck, setMarkCheck] = useState('')
    const [modelCheck, setModelCheck] = useState('')
    const [dateOfStartValue, setDateOfStartValue] = useState('')
    const [dateOfEndValue, setDateOfEndValue] = useState('')
    const [carBodyCheck, setCarBodyCheck] = useState('')
    const [matorCheck, setMatorCheck] = useState('')
    const [gearboxCheck, setGearboxCheck] = useState('')
    const [tugCheck, setTugCheck] = useState('')
    const [steeringWheelCheck, setSteeringWheelCheck] = useState('')
    const [countryCheck, setCountryCheck] = useState('')
    const [cityCheck, setCityCheck] = useState('')
    
    const mark = ['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai'];
    const model = [];
    const carBody = ['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք'];
    const mator = ['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել'];
    const gearbox = ['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական'];
    const tug = ['Առջևի', 'Ետևի', 'Լիաքարշակ'];
    const steeringWheel = ['Ձախ', 'Աջ'];
    const country = ['Հայաստան', 'ԱՄՆ'];
    const city = [];

    // useEffect(() => {
    //     setSearchValue('')
    // }, [])
    
    useEffect(() => {
        filterOptions.mark && setMarkCheck(filterOptions.mark)
        filterOptions.model && setModelCheck(filterOptions.model)
        filterOptions.dateOfStart && setDateOfStartValue(filterOptions.dateOfStart)
        filterOptions.dateOfEnd && setDateOfEndValue(filterOptions.dateOfEnd)
        filterOptions.carBody && setCarBodyCheck(filterOptions.carBody)
        filterOptions.mator && setMatorCheck(filterOptions.mator)
        filterOptions.gearbox && setGearboxCheck(filterOptions.gearbox)
        filterOptions.tug && setTugCheck(filterOptions.tug)
        filterOptions.steeringWheel && setSteeringWheelCheck(filterOptions.steeringWheel)
        filterOptions.country && setCountryCheck(filterOptions.country)
        filterOptions.city && setCityCheck(filterOptions.city)
    },[filterOptions])
    
    const handleCheckBox = (e, key) => {
        if(filterOptions[key] === e){
            setfilterOptions(filterOptions, filterOptions[key] = '')
        }else setfilterOptions(filterOptions, filterOptions[key] = e)
        
        setMarkCheck(filterOptions.mark)
        setModelCheck(filterOptions.model)
        setDateOfStartValue(filterOptions.dateOfStart)
        setDateOfEndValue(filterOptions.dateOfEnd)
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
            <LeftBar title={'Մակնիշը'} id={'mark'} list={mark} filterOption={markCheck} handleCheckBox={handleCheckBox} />
            <div className='params'>
                <p>Տարեթիվը</p><UpDown />
            </div>
            <div className='filterParams datePrice'>
                <input type="number" id={'dateOfStart'} value={dateOfStartValue} min="1990" max="2022" placeholder="սկսած" onChange={(e) => handleCheckBox(e.target.value, e.target.id)}/>
                <input type="number" id={'dateOfEnd'} value={dateOfEndValue} min="1990" max="2022" placeholder="մինչև" onChange={(e) => handleCheckBox(e.target.value, e.target.id)}/>
            </div>
            <div className='params'>
                <p>Գինը</p> <UpDown />
            </div>
            <div >
                <div className='filterParams datePrice'>
                    <input type="number" id={'priceOfStart'} placeholder="սկսած" min="1000" step={1000} onChange={(e) => handleCheckBox(e.target.value, e.target.id)}/>
                    <input type="number" id={'priceOfEnd'} placeholder="մինչև" min="1000" step={1000} onChange={(e) => handleCheckBox(e.target.value, e.target.id)}/>
                </div>
                <div className='filterParams'>
                    <p>
                        <input type="checkbox" id="custcleared" />
                        <label htmlFor="custcleared">Մաքսազերծված է</label>
                    </p>
                    <p>
                        <input type="checkbox" id="custuncleared" />
                        <label htmlFor="custuncleared">Մաքսազերծված չէ</label>
                    </p>
                </div>
            </div>
            <LeftBar title={'Թափքը'} id={'carBody'} list={carBody} filterOption={carBodyCheck} handleCheckBox={handleCheckBox} />
            <LeftBar title={'Շարժիչը'} id={'mator'} list={mator} filterOption={matorCheck} handleCheckBox={handleCheckBox} />
            <LeftBar title={'Փոխանցման տուփը'} id={'gearbox'} list={gearbox} filterOption={gearboxCheck} handleCheckBox={handleCheckBox} />
            <LeftBar title={'Քարշակը'} id={'tug'} list={tug} filterOption={tugCheck} handleCheckBox={handleCheckBox} />
            <LeftBar title={'Ղեկը'} id={'steeringWheel'} list={steeringWheel} filterOption={steeringWheelCheck} handleCheckBox={handleCheckBox} />
            <LeftBar title={'Գտնվելու վայրը'} id={'country'} list={country} filterOption={countryCheck} handleCheckBox={handleCheckBox} />
            <div className='findClose'>
                <span className='findSpan'> <BsSearch /> loop</span> <span className='closeSpan'><FaRegTimesCircle /></span>
            </div>
        </nav>
    )
}

export default CarsNavbar