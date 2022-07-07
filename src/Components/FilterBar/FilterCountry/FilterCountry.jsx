import React, { useEffect } from 'react'
import { useState } from 'react'

const FilterCountry = ({ title, id, options, handleSelectCity, setCities }) => {

  const [isActiv, setIsActive] = useState(false)

  return (
    <div className='filter'>
      <div className='button' onClick={() => setIsActive(!isActiv)}>{title}<span> ^ </span></div>
      <div className={isActiv ? 'dropDown active' : 'dropDown'}>
        <input type="text" />
        {
          options.map((el, index) => <div
            key={index}
            id={id}
            onClick={(e) => setCities([...handleSelectCity(e)])}
          > {el} </div>)
        }
      </div>
    </div>
  )
}

export default FilterCountry