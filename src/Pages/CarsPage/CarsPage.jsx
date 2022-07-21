import React from 'react';
import CarsPageHeader from './CarsPageHeader';
import CarsNavbar from './CarsNavbar';
import CarsList from './CarsList';

const CarsPage = ({filteredData, filterOptions, setfilterOptions, filtering}) => {
    return (
        <div className='CarsPage'>
            <CarsNavbar filterOptions={filterOptions} setfilterOptions={setfilterOptions} filtering={filtering}/>
            <div className="carsHeaderContainer">
                <CarsPageHeader />
                <CarsList filteredData={filteredData}/>
            </div>
        </div>
    )
}
export default CarsPage


