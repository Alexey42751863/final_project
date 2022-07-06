import React, { useEffect } from 'react'
import { useState } from 'react'

const Filter = ({title, id, options, handleSelect, setModel}) => {
  const [newOptions, setNewOptions] = useState([])
  const [isActiv, setIsActive] = useState(false)

  useEffect(()=> {
    setNewOptions(options)
  }, [options])

  const handleClick = (e) => {
    setModel([...handleSelect(e)])
    console.log('click');
  }

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
          newOptions.map((el, index) => <div key={index} id={id} onClick={handleClick}> {el} </div>)
        }
      </div>
    </div>
  )
}

export default Filter