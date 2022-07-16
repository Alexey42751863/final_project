import React from 'react'
import { useState } from 'react'
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';

const FilterMark = ({ title, id, options, handleSelectMark, setOptions, handleSelectOption, removeFilterOption }) => {
  const [activeTitle, setActivTitle] = useState(title)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [params, setParams] = useState(options.mark)
  const [searchValue, setSearchValue] = useState('')

  const handleClickOption = (e) => {
    setSearchValue('')
    setParams(options.mark)
    setOptions(options, options.model = [...handleSelectMark(e)])
    setActivTitle(e.target.innerText)
    setIsActive(true)
    setIsOpen(!isOpen)
    handleSelectOption(e, 'mark')
  }

  const handleCloseBtn = (e) => {
    setSearchValue('')
    setParams(options.mark)
    removeFilterOption('mark')
    setActivTitle(title)
    setIsActive(false)
    // useEffect(() => {
    //   let handler = (event) => {
    //     if (event.target.className == 'App') {
    //       setIsActive(false)
    //     }
  
    //   }
    //   document.addEventListener("mousedown", handler)
    //   return () => {
    //     document.removeEventListener("mousedown", handler)
    //   }
    // })
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    let arr = options.mark
    setParams(arr.filter(el => el.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div className='filter'>
      <div className='button' onClick={() => setIsOpen(!isOpen)}>
        {activeTitle}
        <span>
          {isActive && <span onClick={handleCloseBtn} className='closeBtn'> x </span>} <AiOutlineUp />
        </span>
      </div>
      <div className={isOpen ? 'dropDown active' : 'dropDown'}>
        <input type="text" onChange={handleSearchChange} value={searchValue} />
        {
          params.map((el, index) => <div
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