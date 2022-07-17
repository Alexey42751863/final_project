import React from 'react'
import LeftBar from './LeftBar'
import UpDown from './UpDown'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

const CarsNavbar = () => {
    const mark = ['Mercedes', 'Toyota', 'Nissan', 'BMW', 'Hyundai'];
    const carBody = ['Սեդան', 'Ամենագնաց', 'Ունիվերսալ', 'Կուպե', 'Կաբրիոլետ / Ռոդսթեր', 'Հետչբեք'];
    const mator = ['Հիբրիդ', 'Գազ', 'Բենզին', 'Դիզել'];
    const gearbox = ['Ավտոմատ', 'Կիսաավտոմատ', 'Մեխանիկական'];
    const tug = ['Առջևի', 'Ետևի', 'Լիաքարշակ'];
    const steeringWheel = ['Ձախ', 'Աջ'];
    const country = ['Հայաստան', 'ԱՄՆ'];
    return (
        <nav className='carsNavbar'>
            <LeftBar title={'Մակնիշը'} list={mark} />
            <div className='params'>
                <p>Տարեթիվը</p><UpDown/>
            </div>
            <div className='filterParams datePrice'>
                <input type="number" min="1911" max="2022" placeholder="սկսած" />
                <input type="number" min="1911" max="2022" placeholder="մինչև" />
            </div>
            <div className='params'>
                <p>Գինը</p> <UpDown />
            </div>
            <div >
                <div className='filterParams datePrice'>
                    <input type="number" placeholder="սկսած" />
                    <input type="number" placeholder="մինչև" />
                </div>
                <div className='filterParams'>
                    <p>
                        <input type="checkbox" id="custcleared" />
                        <label htmlFor="custcleared">Մաքսազերծված է</label>
                    </p>
                    <p>
                        <input type="checkbox" id="custuncleared" />
                        <label htmlFor="custuncleared">Մաքսազերծված չէ</label>
                    </p>
                </div>
            </div>
            <LeftBar title={'Թափքը'} list={carBody} />
            <LeftBar title={'Շարժիչը'} list={mator} />
            <LeftBar title={'Փոխանցման տուփը'} list={gearbox} />
            <LeftBar title={'Քարշակը'} list={tug} />
            <LeftBar title={'Ղեկը'} list={steeringWheel} />
            <LeftBar title={'Գտնվելու վայրը'} list={country} />
            <div className='findClose'>
                <span className='findSpan'> <BsSearch /> loop</span> <span className='closeSpan'><FaRegTimesCircle /></span>
            </div>
        </nav>
    )
}

export default CarsNavbar