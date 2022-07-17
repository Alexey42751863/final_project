import React from 'react';
import { AiOutlineDown ,AiOutlineUp } from 'react-icons/ai';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import { useState } from 'react';
import AboutCar from '../AboutCar';

const CarsPage = ({prop}) => {
    const [open,setOpen]=useState(false)
    console.log(prop);

    const onClickFunc=()=>{
        if(open===false){
            setOpen(true);
        }else setOpen(false)
    }

    let data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]

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
                <div className="content">
                    {data.map(() => <div className='contentDiv'></div>)}
                </div>
                {/* <AboutCar/> */}
            </div>
        </div>
    )
}

export default CarsPage