import React from 'react';
import CarsPageHeader from './CarsPageHeader';
import CarsNavbar from './CarsNavbar';
import CarsList from './CarsList';

const CarsPage = () => {
    return (
        <div className='CarsPage'>
            <CarsNavbar />
            <div className="carsHeaderContainer">
                <CarsPageHeader />
                <CarsList />
            </div>
        </div>
    )
}
export default CarsPage


