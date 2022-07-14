import React from 'react';
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import { useState } from 'react';
import AboutCar from './AboutCar';

const CarsPage = () => {
    const [open,setOpen]=useState(false)
    const onClickFunc=()=>{
        if(open===false){
            setOpen(true);
        }else setOpen(false)
    }
    return (
        <div className='CarsPage'>
            <nav className='carsNavbar'onClick={onClickFunc}>
                <div className='carType' >
                    <p>Կատեգորիա</p>
                    <div className='carBody'>
                        Մարդատար <AiOutlineDown className={open?'hidden':'downIcon'}/><AiOutlineUp className={open?'show':'upIcon'}/> 
                    </div>
                </div>
                <div className='params'>
                <p>Մակնիշը</p> <AiOutlineDown className={open?'hidden':'downIcon'}/><AiOutlineUp className={open?'show':'upIcon'}/>
                </div>
                <div className='params'>
                <p>Տարեթիվը</p> <AiOutlineDown className={open?'hidden':'downIcon'}/><AiOutlineUp className={open?'show':'upIcon'}/>
                </div>
                <div className='params'>
                <p>Գինը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Թափքը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Շարժիչը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Փոխանցման տուփը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Քարշակը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Ղեկը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Վազքը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Շարժիչի ծավալը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                <p>Գույնը</p> <AiOutlineDown />
                </div>
                <div className='params'>
                    <p>Գտնվելու վայրը</p> <AiOutlineDown />
                </div>
                <div className='findClose'>
                    <span className='findSpan'> <BsSearch/> loop</span> <span className='closeSpan'><FaRegTimesCircle/></span>
                </div>
            </nav>
            <div className='carsHeaderContainer'>
                <header className='carsHeader'>
                    <div className='filterByType'>
                       <p>text</p> <AiOutlineDown />
                    </div>
                    <div className='buyers'>
                        <input type="checkbox" name='individuals' /><label htmlFor="individuals">Անհատներ</label>
                        <input type="checkbox" name='dealers' /><label htmlFor="dealers">Դիլերներ</label>
                    </div>
                    <div className='carsIcons'>icons</div>
                </header>
                <AboutCar/>
            </div>
        </div>
    )
}

export default CarsPage