import React from 'react'
import { useState } from 'react'

const Filter = ({ title, id, options, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOption = (e) => {
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, id)
  }

  const handleCloseBtn = () => {
    removeFilterOption(id)
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

export default Filter