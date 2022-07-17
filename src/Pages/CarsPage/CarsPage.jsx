import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const CarsPage = () => {
    const [open, setOpen] = useState(false)

    const onClickFunc = () => {
        if (open === false) {
            setOpen(true);
        } else setOpen(false)
    }

    let data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]

    return (
        <div className='CarsPage'>
            <nav className='carsNavbar'>
                <div className='carType' >
                    <p>Կատեգորիա</p>
                    <div className='carBody'>
                        Մարդատար <AiOutlineDown />
                    </div>
                </div>
                <div className='params'>
                    <p>Մակնիշը</p> <AiOutlineDown className='downIcon' /><AiOutlineUp className='upIcon' />
                </div>
                <div>
                    <div>
                        <p>
                            <input type="checkbox" id="mercedes-Benz" />
                            <label for="mercedes-Benz">Mercedes-Benz</label>
                        </p>
                        <p>
                            <input type="checkbox" id="toyota" />
                            <label for="toyota">Toyota</label>
                        </p>
                        <p>
                            <input type="checkbox" id="nissan" />
                            <label for="nissan">Nissan</label>
                        </p>
                        <p>
                            <input type="checkbox" id="bmw" />
                            <label for="bmw">BMW</label>
                        </p>
                        <p>
                            <input type="checkbox" id="hyundai" />
                            <label for="hyundai">Hyundai</label>
                        </p>
                    </div>
                </div>
                <div className='params'>
                    <p>Տարեթիվը</p> <AiOutlineDown className='downIcon' /><AiOutlineUp className='upIcon' />
                </div>
                <div>
                    <div>
                        <input type="number" min="1911" max="2022" placeholder="սկսած" />
                        <input type="number" min="1911" max="2022" placeholder="մինչև" />
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div className='params'>
                    <p>Գինը</p> <AiOutlineDown />
                </div>
                <div >
                    <div>
                        <input type="number" value="0" min="0" max="100000" placeholder="սկսած" />
                        <input type="number" value="100000000" min="0" max="100000" placeholder="մինչև" />
                    </div>
                    <div class="clearfix"></div>

                    <div class="marg-top-12 ">
                        <p>
                            <input type="checkbox" id="custcleared" />
                            <label for="custcleared">Մաքսազերծված է</label>
                        </p>
                        <p>
                            <input type="checkbox" id="custuncleared" />
                            <label for="custuncleared">Մաքսազերծված չէ</label>
                        </p>
                    </div>
                </div>
                <div className='params'>
                    <p>Թափքը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="sedan" />
                        <label for="sedan">Սեդան</label>
                    </p>
                    <p>
                        <input type="checkbox" id="hatchback" />
                        <label for="hatchback">Հետչբեք</label>
                    </p>
                    <p>
                        <input type="checkbox" id="universal" />
                        <label for="universal">Ունիվերսալ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="coupe" />
                        <label for="coupe">Կուպե</label>
                    </p>
                    <p>
                        <input type="checkbox" id="cabrio" />
                        <label for="cabrio">Կաբրիոլետ / Ռոդսթեր</label>
                    </p>
                    <p>
                        <input type="checkbox" id="offroad" />
                        <label for="offroad">Ամենագնաց</label>
                    </p>
                    <p>
                        <input type="checkbox" id="pickup" />
                        <label for="pickup">Պիկապ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="minivan" />
                        <label for="ch-ell-17">Մինիվեն /  Միկրոավտոբուս</label>
                    </p>
                    <p>
                        <input type="checkbox" id="furgon" />
                        <label for="furgon">Ֆուրգոն</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Շարժիչը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="gasoline" />
                        <label for="gasoline">Բենզին</label>
                    </p>
                    <p>
                        <input type="checkbox" id="gas" />
                        <label for="gas">Գազ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="diesel" />
                        <label for="diesel">Դիզել</label>
                    </p>
                    <p>
                        <input type="checkbox" id="hybrid" />
                        <label for="hybrid">Հիբրիդ</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Փոխանցման տուփը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="mechanican" />
                        <label for="mechanican">Մեխանիկական</label>
                    </p>
                    <p>
                        <input type="checkbox" id="auto" />
                        <label for="auto">Ավտոմատ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="semiauto" />
                        <label for="semiauto">Կիսաավտոմատ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="variator" />
                        <label for="variator">Վարիատոր</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Քարշակը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="front" />
                        <label for="front">Առջևի</label>
                    </p>
                    <p>
                        <input type="checkbox" id="rear" />
                        <label for="rear">Ետևի</label>
                    </p>
                    <p>
                        <input type="checkbox" id="allwheel" />
                        <label for="allwheel">Լիաքարշակ 4x4</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Ղեկը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="left" />
                        <label for="left">Ձախ</label>
                    </p>
                    <p>
                        <input type="checkbox" id="right" />
                        <label for="right">Աջ</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Վազքը</p> <AiOutlineDown />
                </div>
                <div>
                    <input type="number" value="10" min="10" max="1000000" placeholder="սկսած" class="range-from left " />
                    <input type="number" value="1000000" min="10" max="1000000" placeholder="մինչև" class="range-to  right" />
                </div>
                <div className='params'>
                    <p>Շարժիչի ծավալը</p> <AiOutlineDown />
                </div>
                <div>
                    <p>
                        <input type="checkbox" id="1_5" />
                        <label for="1_5">1.5</label>
                    </p>
                    <p>
                        <input type="checkbox" id="1_6" />
                        <label for="1_6">1.6</label>
                    </p>
                    <p>
                        <input type="checkbox" id="1_8" />
                        <label for="1_8">1.8</label>
                    </p>
                    <p>
                        <input type="checkbox" id="1_9" />
                        <label for="1_9">1.9</label>
                    </p>
                    <p>
                        <input type="checkbox" id="2_0" />
                        <label for="2_0">2.0</label>
                    </p>
                    <p>
                        <input type="checkbox" id="2_2" />
                        <label for="2_2">2.2</label>
                    </p>
                    <p>
                        <input type="checkbox" id="2_4" />
                        <label for="2_4">2.4</label>
                    </p>
                    <p>
                        <input type="checkbox" id="2_5" />
                        <label for="2_5">2.5</label>
                    </p>
                    <p>
                        <input type="checkbox" id="2_8" />
                        <label for="2_8">2.8</label>
                    </p>
                    <p>
                        <input type="checkbox" id="3_0" />
                        <label for="3_0">3.0</label>
                    </p>
                    <p>
                        <input type="checkbox" id="3_2" />
                        <label for="3_2">3.2</label>
                    </p>
                    <p>
                        <input type="checkbox" id="3_5" />
                        <label for="3_5">3.5</label>
                    </p>
                    <p>
                        <input type="checkbox" id="4_0" />
                        <label for="4_0">4.0</label>
                    </p>
                    <p>
                        <input type="checkbox" id="4_4" />
                        <label for="4_4">4.4</label>
                    </p>
                    <p>
                        <input type="checkbox" id="4_8" />
                        <label for="4_8">4.8</label>
                    </p>
                    <p>
                        <input type="checkbox" id="5_0" />
                        <label for="5_0">5.0</label>
                    </p>
                    <p>
                        <input type="checkbox" id="5_5" />
                        <label for="5_5">5.5</label>
                    </p>
                    <p>
                        <input type="checkbox" id="6_3" />
                        <label for="6_3">6.3</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Գույնը</p> <AiOutlineDown />
                </div>
                <div>
                    <p >
                        <input type="checkbox" id='white' />
                        <label for="white">Սպիտակ</label>
                    </p>
                    <p >
                        <input type="checkbox" id='black' />
                        <label for="black">Սև</label>
                    </p>
                    <p >
                        <input type="checkbox" id='silver' />
                        <label for="silver">Արծաթագույն</label>
                    </p>
                    <p >
                        <input type="checkbox" id='bleu' />
                        <label for="bleu">Կապույտ</label>
                    </p>
                    <p >
                        <input type="checkbox" id='red' />
                        <label for="red">Կարմիր</label>
                    </p>
                    <p >
                        <input type="checkbox" id='green' />
                        <label for="green">Կանաչ</label>
                    </p>
                    <p >
                        <input type="checkbox" id='grey' />
                        <label for="grey">Մոխրագույն</label>
                    </p>
                    <p >
                        <input type="checkbox" id='lightbleu' />
                        <label for="lightbleu">Երկնագույն</label>
                    </p>
                    <p >
                        <input type="checkbox" id='lightbleu' />
                        <label for="lightbleu">Երկնագույն</label>
                    </p>
                    <p >
                        <input type="checkbox" id='gold' />
                        <label for="gold">Ոսկեգույն</label>
                    </p>
                    <p >
                        <input type="checkbox" id='other' />
                        <label for="other">Այլ գույն</label>
                    </p>
                </div>
                <div className='params'>
                    <p>Գտնվելու վայրը</p> <AiOutlineDown />
                </div>
                <div>
                    <div class="p">
                        <input type="checkbox" id="armenia" />
                        <label for="armenia">Հայաստան</label>
                    </div>
                    <div class="p">
                        <input type="checkbox" id="usa" />
                        <label for="usa">ԱՄՆ</label>
                    </div>
                </div>
                <div className='findClose'>
                    <span className='findSpan'> <BsSearch /> loop</span> <span className='closeSpan'><FaRegTimesCircle /></span>
                </div>
            </nav>
            <div className='carsHeaderContainer'>
                <header className='carsHeader'>
                    <div className='filterByType'>
                        <p>text</p> <AiOutlineDown />
                    </div>
                    <div className='buyers'>
                        <input type="checkbox" name='individuals' /><label htmlFor="individuals">Անհատներ</label>
                        <input type="checkbox" name='dealers' /><label htmlFor="dealers">Դիլերներ</label>
                    </div>
                    <div className='carsIcons'>icons</div>
                </header>
                <div className="content">
                    {data.map((el) => <div className='contentDiv'>{el}</div>)}
                </div>
            </div>
        </div>
    )
}

export default CarsPage