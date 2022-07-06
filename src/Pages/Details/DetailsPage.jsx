import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgPage from './ImgPage';
import TitlePage from './TitlePage';
import MainContentInfo from './MainContentInfo';
import NavBarPage from './NavBarPage';


const DetailsPage = () => {
    const [car, setCar] = useState({});
    const { id } = useParams();


    const getCarById = async (id) => {
        const response = await fetch('http://localhost:3000/cars/' + id);
        return response.json();
    }
    useEffect(() => {
        getCarById(id).then(data => {
            console.log(data);
            setCar(data);
        });
    }, []);

    return (
        <div className='DetailsPage'>
            <div className="container">
                <TitlePage car={car} />
                <NavBarPage id={car.id} />
                <div className="mainContent">
                    <ImgPage car={car.imgUrls} />
                    <MainContentInfo car={car} />
                    <div className="someContent">
                        Այստեղ կարող է լինել ձեր գովազդը
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage