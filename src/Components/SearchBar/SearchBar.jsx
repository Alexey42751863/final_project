import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const SearchBar = ({ searchValue, setSearchValue, searching, filteredData, handleClickSearchItem }) => {
  const [arrForRender, setArrForRender] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let arr = filteredData
    let set = new Set(arr.map(el => el.date + ' ' + el.mark + ' ' + el.model))
    arr = Array(...set)
    let anotherArr = []
    for (let i = 0; i < 10; i++) {
      anotherArr.push(arr[getRandom(arr)])
    }
    anotherArr = anotherArr.filter(el => el)
    setArrForRender(anotherArr);
  }, [filteredData])

  useEffect(() => {
    searchValue && setIsOpen(true)
  }, [searchValue])

  const getRandom = (arr) => {
    let random = Math.floor(Math.random() * (arr.length - 0))
    return random
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='searchBar'>
      <form >
        <input type="text" placeholder='Մակնիշ, Մոդել, Տարեթիվ ' value={searchValue} onChange={handleChange} />
        <button type='submit' onClick={searching}><i className="fa-solid fa-magnifying-glass" ></i></button>
      </form>
      {
        isOpen && (arrForRender.length !== 0) && <div className="dropDown">
          {arrForRender.map((el, index) => <div
            className='search_item'
            key={index}
            onClick={(e) => {
              setSearchValue(e.target.outerText)
              setTimeout(() => {
                setIsOpen(false)
              }, 0)
              handleClickSearchItem(e)
            }
            }
          >
            {el}
          </div>)}
        </div>
      }
    </div>
  )
}

export default SearchBar