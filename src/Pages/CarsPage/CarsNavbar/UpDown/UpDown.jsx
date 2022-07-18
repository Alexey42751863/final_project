import React from 'react'
import { useState } from 'react';
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';

const UpDown = () => {
  const [open,setOpen] = useState(false);
  const onClickFunc=()=>{
    open?setOpen(false):setOpen(true)
  }
  return (
    <div onClick={onClickFunc} className='UpDown'>
        <AiOutlineDown className={open?'hidden':'downIcon'}/><AiOutlineUp className={open?'show':'upIcon'}/>
    </div>
  )
}

export default UpDown