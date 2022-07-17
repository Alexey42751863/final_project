import React from 'react'
import FilterBar from '../../Components/FilterBar'
import Slider from '../../Components/Slider'

const Home = ({ cars, filterFunc, filteredData, removeFilterOption }) => {
  return (
    <div className='home'>
      <FilterBar cars={cars} filterFunc={filterFunc} filteredData={filteredData} removeFilterOption={removeFilterOption} />,
      {cars.length !== 0 && <Slider title={'Թոփ հայտարարություններ'} cars={cars} />}
      {cars.length !== 0 && <Slider title={'Շտապ վաճառք'} cars={cars} />}
      {cars.length !== 0 && <Slider title={'Առաջարկներ դիլերներից'} cars={cars} />}
    </div>
  )
}

export default Home
