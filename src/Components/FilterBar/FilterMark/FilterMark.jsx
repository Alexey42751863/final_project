import React, { useEffect } from 'react'
import { useState } from 'react'

const FilterMark = ({ title, id, options, handleSelectMark, setModels }) => {

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
            onClick={(e) => setModels([...handleSelectMark(e)])}
          > {el} </div>)
        }
      </div>
    </div>
  )
}

export default FilterMark