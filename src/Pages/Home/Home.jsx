import React from 'react'
import FilterBar from '../../Components/FilterBar'

const Home = ({ cars, filterFunc, filteredData }) => {

  return (
    <FilterBar cars={cars} filterFunc={filterFunc} filteredData={filteredData} />
  )
}

export default Home
