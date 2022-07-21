import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';

const FilterModel = ({ title, id, options, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [params, setParams] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => setParams(options), [options])

  const handleClickOption = (e) => {
    setSearchValue('')
    setParams(options)
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, 'model')
  }

  const handleCloseBtn = () => {
    setSearchValue('')
    setParams(options)
    removeFilterOption('model')
    setActivTitle(title)
    setIsActive(false)
  }
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    let arr = options
    setParams(arr.filter(el => el.toLowerCase().includes(e.target.value.toLowerCase())))
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
        <input type="text" onChange={handleSearchChange} value={searchValue}/>
        {params.length === 0 && <div>Անարդյունք</div>}
        {
          params.length > 0 && params.map((el, index) => <div
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