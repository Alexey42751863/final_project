import React from 'react';
import CarsPageHeader from './CarsPageHeader';
import CarsNavbar from './CarsNavbar';
import CarsList from './CarsList';

const CarsPage = ({ cars, filteredData, filterOptions, setFilterOptions, filtering, searchValue, setSearchValue, sorting }) => {

    return (
        <div className='CarsPage'>
            <CarsNavbar
                cars={cars}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                filtering={filtering}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className="carsHeaderContainer">
                <CarsPageHeader sorting={sorting} />
                <CarsList filteredData={filteredData} />
            </div>
        </div>
    )
}
export default CarsPage


