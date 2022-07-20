import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Advertising from './Pages/Advertising'
import BeADealer from './Pages/BeADealer'
import Contact from './Pages/Contact'
import Dealers from './Pages/Dealers'
import Help from './Pages/Help'
import Home from './Pages/Home'
import TermsOfUse from './Pages/TermsOfUse'
import Footer from './Components/Footer'
import DetailsPage from './Pages/Details'
import CarsPage from './Pages/CarsPage'
import CarItem from './Components/Slider/CarItem'

const App = () => {
  const [cars, setCars] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filterOptions, setfilterOptions] = useState({})
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    loadCars()
  }, [])

  const loadCars = async () => {
    const result = await axios.get('http://localhost:3000/cars')
    setCars(result.data);
    setFilteredData(result.data)
  }

  const filtering = () => {
    let newFilter = cars 
    setFilteredData(newFilter.filter(el => {
      return (el.mark === (filterOptions.mark ? filterOptions.mark: el.mark )) &&
      (el.model === (filterOptions.model ? filterOptions.model: el.model )) &&
      (el.carBody === (filterOptions.carBody ? filterOptions.carBody: el.carBody )) && 
      (el.steeringWheel === (filterOptions.steeringWheel ? filterOptions.steeringWheel: el.steeringWheel ))&& 
      (el.gearbox === (filterOptions.gearbox ? filterOptions.gearbox: el.gearbox )) &&
      (el.mator === (filterOptions.mator ? filterOptions.mator: el.mator )) &&
      (el.tug === (filterOptions.tug ? filterOptions.tug: el.tug )) &&
      (el.country === (filterOptions.country ? filterOptions.country: el.country )) && 
      (el.city === (filterOptions.city ? filterOptions.city: el.city )) &&
      (+el.date >= (filterOptions.dateOfStart ? +filterOptions.dateOfStart: 1990 ) && 
      (+el.date <= (filterOptions.dateOfEnd ? +filterOptions.dateOfEnd: el.date))) &&
      (+el.priceDollar >= (filterOptions.priceOfStart ? +filterOptions.priceOfStart: 0) && 
      (+el.priceDollar <= (filterOptions.priceOfEnd ? +filterOptions.priceOfEnd: el.priceDollar ))) &&
      (el.clearance === (filterOptions.clearance ? filterOptions.clearance: el.clearance ))
    }))
  }

  const filterFunc = (key, value) => {
    setfilterOptions(filterOptions, filterOptions[key]= value)
    filtering()
  }

  const removeFilterOption = (key) => {
    setfilterOptions(filterOptions, filterOptions[key] = '')
    filtering()
  }

  const searching = (e) => {
    e.preventDefault()
    let arr = cars
    setFilteredData(
      arr.filter(el => {
        return el.mark.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.model.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.date.toLowerCase().includes(searchValue.toLowerCase())
      })
    );
  }

  return (
    <div className='App'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} searching={searching}/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home cars={cars} filterFunc={filterFunc} filteredData={filteredData} removeFilterOption={removeFilterOption}/>} />
          <Route path='/dealers' element={<Dealers />} />
          <Route path='/be_a_dealer' element={<BeADealer />} />
          <Route path='/advertising' element={<Advertising />} />
          <Route path='/terms_of_use' element={<TermsOfUse />} />
          <Route path='/help' element={<Help />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<DetailsPage />} />
          <Route path='/cars' element={<CarsPage filteredData={filteredData}/>}/>
          <Route path='/caritem' element={<CarItem />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App