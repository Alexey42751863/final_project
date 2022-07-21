import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = ({ searchValue, setSearchValue, filteredData, handleClickSearchItem }) => {
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

  return (
    <div className='searchBar'>
      <form >
        <input
          type="text"
          placeholder='Մակնիշ, Մոդել, Տարեթիվ '
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(false)
          }}
        >
          <Link to={'/cars'} >
            <i className="fa-solid fa-magnifying-glass" ></i>
          </Link>
        </button>

      </form>
      {
        isOpen && (arrForRender.length !== 0) && <div className="dropDown">
          {arrForRender.map((el, index) => <Link to={'/cars'} >
            <div
              className='search_item'
              key={index}
              onClick={
                (e) => {
                  setSearchValue(e.target.outerText)
                  setTimeout(() => {
                    setIsOpen(false)
                  }, 0)
                  handleClickSearchItem(e)
                }
              }
            >
              {el}
            </div>
          </Link>)}
        </div>
      }
    </div>
  )
}

export default SearchBar