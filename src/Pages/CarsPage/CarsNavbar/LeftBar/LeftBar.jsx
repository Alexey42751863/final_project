import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';


const LeftBar = ({ title, id, list, filterOption, handleChange }) => {
    const [open, setOpen] = useState(false);

    const onClickFunc = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    return (
        <div className='LeftBar'>
            <div className="params" onClick={onClickFunc}>
                <p>{title}</p>
                <AiOutlineDown className={open ? 'hidden' : 'downIcon'} />
                <AiOutlineUp className={open ? 'show' : 'upIcon'} />
            </div>
            <div className={open ? 'filterParams show' : 'filterParams'}>
                {list.map((el, index) => (
                    <p key={index}>
                        <input
                            type="checkbox"
                            id={el}
                            checked={el === filterOption ? true : false}
                            onChange={(e) => handleChange(e.target.id, id)}
                        />
                        <label htmlFor={el}>{el}</label>
                    </p>
                ))}
            </div>

        </div>
    )
}

export default LeftBar