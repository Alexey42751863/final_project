import React from 'react';
import CarsPageHeader from './CarsPageHeader';
import CarsNavbar from './CarsNavbar';
import CarsList from './CarsList';

const CarsPage = ({filteredData}) => {
    return (
        <div className='CarsPage'>
            <CarsNavbar />
            <div className="carsHeaderContainer">
                <CarsPageHeader />
                <CarsList filteredData={filteredData}/>
            </div>
        </div>
    )
}
export default CarsPage


