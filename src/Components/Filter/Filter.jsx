import React from 'react'

const Filter = ({title, options}) => {
  return (
    <div className='filter'>
      <button>{title}<span> ^ </span></button>
      <div className='dropDown active'>
        <input type="text" />
        {
          options.map((el, index) => <div key={index}> {el} </div>)
        }
      </div>
      <button>Մակնիշը <span> ^ </span></button>
      <button>Մակնիշը <span> ^ </span></button>
      <button>Մակնիշը <span> ^ </span></button>
      <button>Մակնիշը <span> ^ </span></button>
      <button>Մակնիշը <span> ^ </span></button>
    </div>
  )
}

export default Filter