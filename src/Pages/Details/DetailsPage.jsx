import React ,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({cars}) => {

    const [car, setCar] = useState({});
    const {id}=useParams();

    const getCarById=async(id)=>{
        const response = await fetch('http://localhost:3000/cars/' + id);
        return response.json();
    }
    useEffect(()=>{
        getCarById(id).then(data=>{
          setCar(data);
        });
      }, [id]);
    return (
        <div className='DetailsPage'>
            <div className="container">
                <div className="title">
                    <div className="mainInfo">
                        <div className="modelYear">
                            <i className="fa-solid fa-arrow-left-long"></i>
                            <div className='moYe year'>{car.date}</div> 
                            <div className="moYe car mark">
                                {car.mark}
                            </div>
                            <div className="moYe car model">
                                {car.model}
                            </div>
                        </div>
                        <div className="addInfo">
                            <div className="postDate">
                               05.07.2022
                            </div>
                            <div className="city">
                               {car.city}
                            </div>
                            <div className="customs">
                               Մաքսազերծված է
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        {car.priceDolor} $
                    </div>
                </div>
                <nav className='navBar'>
                    <div className="id">
                        ID: {car.id}
                    </div>
                    <div className="insurance">
                        Ռոսգոսստրախ
                    </div>
                    <div className="credit">
                        Գնիր վարկով
                    </div>
                </nav>
                <div className="mainContent">
                    <div className="mainContentImg">
                        {
                            car.imgUrls?<div className="mainImg">
                            <img src={car.imgUrls[0]} alt="" />
                        </div>:<img src='' alt='no photo'/>
                        }
                        {
                            car.imgUrls? <div className="thumbs"> {car.imgUrls.map(img=>(
                           <img src={img} alt=''/>
                            ))}</div>:<img src='' alt='no photo'/>
                        }
                    </div>
                    <div className="mainContentInfo">
                        <div className='quickSale'>
                            Արագ վաճառք 
                        </div>
                        <div className='shareFeedback'>
                            <div className='share'> <i></i> Տարածել</div>
                            <div><i></i> Բողոքել</div>
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
                            {car["mator value"]?<div className="rows">
                                <p>Շարժիչի ծավալը</p>
                                <p>{car["mator value"]}</p>
                            </div>:''}
                            {car.tug?<div className="rows">
                                <p>Քարշակը</p>
                                <p>{car.tug}</p>
                            </div>:''}
                            {car.options? <div className="rows add">
                                <h2>Օպցիաներ</h2>
                                <p>{car.options}</p>
                            </div>:''}
                           {car.additional?<div className="rows add">
                                <h2>Լրացուցիչ</h2>
                                <p>{car.additional}</p>
                            </div>:''}
                            
                        </div>
                    </div>
                    <div className="someContent">
                            Այստեղ կարող է լինել ձեր գովազդը
                        </div>
                </div>
                <div className="contact">
                    <div className="user">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="call"> call</div>
                    <div className="message">message</div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage