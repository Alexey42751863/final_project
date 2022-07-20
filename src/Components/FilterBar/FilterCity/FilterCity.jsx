import React from 'react'
import { useState } from 'react'
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';

const FilterModel = ({ title, id, options, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOption = (e) => {
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, 'city')
  }

  const handleCloseBtn = () => {
    removeFilterOption('city')
    setActivTitle(title)
    setIsActive(false)
  }

  return (
    <div className='filter'>
      <div className='button' onClick={() => setIsOpen(!isOpen)}>
        {activeTitle}
        <span>
          {isActive && <span onClick={handleCloseBtn} className='closeBtn'> x </span>} 
          <AiOutlineDown className={isOpen?'hidden':'downIcon'}/>
          <AiOutlineUp className={isOpen?'upIcon':'hidden'}/>
        </span>
      </div>
      <div className={isOpen ? 'dropDown active' : 'dropDown'}>
        {/* <input type="text" /> */}
        {options.length === 0 && <div>No results found</div>}
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

export default FilterModel