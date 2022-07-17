import React from 'react'
import FilterBar from '../../Components/FilterBar'
import Slider from '../../Components/Slider'

const Home = ({ cars, filterFunc, filteredData, removeFilterOption }) => {

  return (
      <>
      
          <FilterBar cars={cars} filterFunc={filterFunc} filteredData={filteredData} removeFilterOption={removeFilterOption}/>,
          <Slider />

      </>
  )
}

export default Home
