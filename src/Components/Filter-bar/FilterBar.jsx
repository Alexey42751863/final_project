import React from 'react'
import Filter from './Filter' 
import FilterModel from './FilterModel'
import { useState } from 'react'

const FilterBar = ({handleSelect}) => {
  const [options, setOptions] = useState([]) 

  const genOptions = (start, finish, interval = 1) => {
    let arr = []
    for(let i = start; i < finish; i = i + interval){
      arr.push(i)
    }
    return arr
  }

  const setModel = (arr) => {
    setOptions(arr)
  }

  return (
    <div className='filter-bar'>
      <div className='filter-container'>
        <Filter title={'Մակնիշը'} id={'mark'} options={['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai']} handleSelect={handleSelect} setModel={setModel}/>
      </div>
      <div className='filter-container'>
        <FilterModel title={'Մոդելը'} id={'model'} options={options}  />
      </div>
      <div className='filter-container double'>
        <Filter title={'Տարին, սկս.'} id={'dateOfStart'} options={genOptions(1980, 2022)} handleSelect={handleSelect}/>
        <Filter title={'մինչև'} id={'dateOfEnd'} options={genOptions(1980, 2022)} handleSelect={handleSelect}/>
      </div>
      <div className='filter-container double'>
        <Filter title={'Գինե սկս.'} options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)} handleSelect={handleSelect}/>
        <Filter title={'մինչև'} options={genOptions(1000, 100000, 1000).map(el => el = '$' + el)} handleSelect={handleSelect}/>
      </div>
      {/* <Filter title={'Մակնիշը'} options={['Mercedes-Benz', 'Toyota', 'Nissan', 'BMW', 'Hyundai', ]}/> */}
    </div>
  )
}

export default FilterBar