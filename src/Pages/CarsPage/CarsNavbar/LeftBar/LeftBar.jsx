import React,{useState} from 'react'
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';


const LeftBar = ({ title , list }) => {
    const [open,setOpen] = useState(false);

    const onClickFunc=()=>{
        !open?setOpen(true):setOpen(false);
    }
    return (
        <div className='LeftBar'>
            <div className="params" onClick={onClickFunc}>
                <p>{title} </p><AiOutlineDown className={open?'hidden':'downIcon'}/><AiOutlineUp className={open?'show':'upIcon'}/>
            </div>
            <div className={open?'filterParams show':'filterParams'}>
                {list.map((el,index) => (
                    <p key={index}>
                        <input type="checkbox" id={index} />
                        <label htmlFor={index}>{el}</label>
                    </p>
                ))}
            </div>

        </div>
    )
}

export default LeftBar