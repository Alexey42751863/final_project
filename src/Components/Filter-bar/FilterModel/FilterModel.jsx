import React from 'react'
import { useState } from 'react'

const FilterModel = ({title, id, options}) => {

  const [isActiv, setIsActive] = useState(false)

  const handleButton = () => {
    setIsActive(!isActiv)
  }

  let btn = <div className='button' onClick={handleButton}>{title}<span> ^ </span></div>

  return (
    <div className='filter'>
      {btn}
      <div className={isActiv? 'dropDown active': 'dropDown'}>
        <input type="text" />
        {
          options.map((el, index) => <div key={index} id={id} > {el} </div>)
        }
      </div>
    </div>
  )
}

export default FilterModel