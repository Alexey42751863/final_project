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

const App = () => {

  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
    loadCars()
  }, [])

  const loadCars = async () => {
    const result = await axios.get('http://localhost:3000/cars')
    setCars(result.data);
  }

  const handleSelect = (e) => {
    setFilteredCars(cars.filter(el => el[e.target.id] === e.target.outerText))
    return new Set(filteredCars.map(el => el.model))

  }



  // console.log(cars);

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home handleSelect={handleSelect} />} />
          <Route path='/dealers' element={<Dealers />} />
          <Route path='/be_a_dealer' element={<BeADealer />} />
          <Route path='/advertising' element={<Advertising />} />
          <Route path='/terms_of_use' element={<TermsOfUse />} />
          <Route path='/help' element={<Help />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App