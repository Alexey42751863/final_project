import React from 'react'

const SearchBar = ({searchValue, setSearchValue, searching}) => {

  return (
    <form className='SearchBar'>
      <input type="text" placeholder='Մակնիշ, Մոդել, Տարեթիվ ' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
      <button type='submit' onClick={searching}><i class="fa-solid fa-magnifying-glass" ></i></button>
    </form>
  )
}

export default SearchBar