import React from 'react'
import FilterBar from '../../Components/FilterBar'

const Home = ({ cars, filterFunc, filteredData, removeFilterOption }) => {

  return (
    <FilterBar cars={cars} filterFunc={filterFunc} filteredData={filteredData} removeFilterOption={removeFilterOption}/>
  )
}

export default Home
