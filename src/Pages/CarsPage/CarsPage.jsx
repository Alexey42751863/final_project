import React from 'react';
import CarsPageHeader from './CarsPageHeader';
// import AboutCar from './AboutCar';
import CarsNavbar from './CarsNavbar';

const CarsPage = () => {
   return (
        <div className='CarsPage'>
            <CarsNavbar/>
            <div className="carsHeaderContainer">
            <CarsPageHeader/>
            {/* <AboutCar /> */}
            </div>
        </div>
    )
}
export default CarsPage