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

const App = () => {
  const [cars, setCars] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filterOptions, setfilterOptions] = useState({})

  useEffect(() => {
    loadCars()
  }, [])

  // useEffect(() => filtering(), [filterOptions])

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
      (el.country === (filterOptions.country ? filterOptions.country: el.country )) && 
      (el.city === (filterOptions.city ? filterOptions.city: el.city ))
    }))
    console.log(filterOptions);
  }

  const filterFunc = (key, value) => {
    // let newFilter = filteredData
    setfilterOptions(filterOptions, filterOptions[key]= value)
    console.log(filterOptions);
    filtering()
    // newFilter.filter(el => el[key] === value)
    // setFilteredData(newFilter.filter(el => el[key] === value));
  }

  const removeFilterOption = (key) => {
    setfilterOptions(filterOptions, filterOptions[key] = '')
    filtering()
  }



  // console.log(filteredData);

  return (
    <div className='App'>
      <Header />
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
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App