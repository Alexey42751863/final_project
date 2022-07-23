import React from 'react';
import CarsPageHeader from './CarsPageHeader';
import CarsNavbar from './CarsNavbar';
import CarsList from './CarsList';
import { useState } from 'react';

const CarsPage = ({ cars, filteredData, filterOptions, setFilterOptions, filtering, searchValue, setSearchValue, sorting }) => {

    const [selected, setSelected] = useState(2)

    const handleClickMenu = (e) => {
        e.target.id ? setSelected(+e.target.id) : setSelected(+e.target.parentElement.id)
    }

    return (
        <div className='CarsPage'>
            <CarsNavbar
                cars={cars}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
                filtering={filtering}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                filteredData={filteredData}
            />
            <div className="carsHeaderContainer">
                <CarsPageHeader sorting={sorting} selected={selected} handleClickMenu={handleClickMenu} />
                <CarsList filteredData={filteredData} setSearchValue={setSearchValue} selected={selected} />
            </div>
        </div>
    )
}
export default CarsPage


