import React from 'react'
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';

const UpDown = ({open}) => {
  return (
    <div>
        <AiOutlineDown className={open?'hidden':'downIcon'}/>
        <AiOutlineUp className={open?'show':'upIcon'}/>
    </div>
  )
}

export default UpDown