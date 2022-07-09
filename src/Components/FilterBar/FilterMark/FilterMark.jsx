import React, { useEffect } from 'react'
import { useState } from 'react'

const FilterMark = ({ title, id, options, handleSelectMark, setModels, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOption = (e) => {
    setModels([...handleSelectMark(e)])
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, 'mark')
  }

  const handleCloseBtn = (e) => {
    // console.log(e.target.parentElement.parentElement.innerText.slice(0, -3));
    // let key = e.target.parentElement.parentElement.innerText.slice(0, -3)
    removeFilterOption('mark')
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
        <input type="text" />
        {
          options.map((el, index) => <div
            key={index}
            id={id}
            onClick={handleClickOption}
          > {el} </div>)
        }
      </div>
    </div>
  )
}

export default FilterMark