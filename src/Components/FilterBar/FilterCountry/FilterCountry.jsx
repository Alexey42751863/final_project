import React, { useEffect } from 'react'
import { useState } from 'react'

const FilterCountry = ({ title, id, options, handleSelectCity, setOptions, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOption = (e) => {
    setOptions(options, options.city = [...handleSelectCity(e)])
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, 'country')
  }

  const handleCloseBtn = () => {
    removeFilterOption('country')
    setActivTitle(title)
    setIsActive(false)
  }

  return (
    <div className='filter'>
      <div className='button' onClick={() => setIsOpen(!isOpen)}>
        {activeTitle}
        <span>
          {isActive && <span onClick={handleCloseBtn} className='closeBtn'> x </span>} ^
        </span>
      </div>
      <div className={isOpen ? 'dropDown active' : 'dropDown'}>
        {/* <input type="text" /> */}
        {
          options.country.map((el, index) => <div
            key={index}
            id={id}
            onClick={handleClickOption}
          > {el} </div>)
        }
      </div>
    </div>
  )
}

export default FilterCountry