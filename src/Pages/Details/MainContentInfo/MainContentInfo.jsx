import React from 'react';
import {BsFillShareFill} from 'react-icons/bs';
import {HiOutlineBan} from 'react-icons/hi';

const MainContentInfo = ({car}) => {
    return (
        <div className="MainContentInfo">
            <div className='quickSale'>
                <i className="fa-solid fa-arrow-trend-up"></i>   Արագ վաճառք
            </div>
            <div className='shareFeedback'>
                <div className='share'>
                    <i className="share"><BsFillShareFill /></i>  Տարածել
                </div>
                <div>
                    <i className="ban"><HiOutlineBan /></i>  Բողոքել
                </div>
            </div>
            <div className='carinfo'>
                <div className="rows">
                    <p>Վազքը</p>
                    <p>{car.mileage}</p>
                </div>
                <div className="rows">
                    <p>Թափքը</p>
                    <p>{car["car body"]}</p>
                </div>

                <div className="rows">
                    <p>Փոխանցման տուփը</p>
                    <p>{car.gearbox}</p>
                </div>

                <div className="rows">
                    <p>Ղեկը</p>
                    <p>{car["steering wheel"]}</p>
                </div>

                <div className="rows">
                    <p>Շարժիչը</p>
                    <p>{car.mator}</p>
                </div>
                <div className="rows">
                    <p>Գույնը</p>
                    <p>{car.color}</p>
                </div>
                {car["mator value"] ? <div className="rows">
                    <p>Շարժիչի ծավալը</p>
                    <p>{car["mator value"]}</p>
                </div> : ''}
                {car.tug ? <div className="rows">
                    <p>Քարշակը</p>
                    <p>{car.tug}</p>
                </div> : ''}
                {car.options ? <div className="rows add">
                    <h2>Օպցիաներ</h2>
                    <p>{car.options}</p>
                </div> : ''}
                {car.additional ? <div className="rows add">
                    <h2>Լրացուցիչ</h2>
                    <p>{car.additional}</p>
                </div> : ''}

            </div>
        </div>
    )
}

export default MainContentInfo