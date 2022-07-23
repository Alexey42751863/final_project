import React from 'react'
import { useEffect } from 'react'

const SellCar = ({ openLogin, setOpenLogin }) => {

  useEffect(() => {
    let handlerL = (event) => {
      if (event.target.className == 'modal open') {
        setOpenLogin(false)
      }
    }
    document.addEventListener("mousedown", handlerL)
    return () => {
      document.removeEventListener("mousedown", handlerL)
    }
  })

  return (
    <div className='SellCar'>
      <div id="myModal" className={openLogin ? "modal open" : "modal"}>
        <div className="modal-content">
          <div className='head'>
            <span className="close" onClick={() => setOpenLogin(false)}>&times;</span>
            <h2 className='enter'>Մուտք</h2>
          </div>
          <span className='about'> <p>Սոց. հաշիվներով </p> </span>
          <div className='btns'>
            <button className='btn'>Facebook</button>
            <button className='btn'>Google</button>
          </div>
          <span><p>կամ</p></span>
          <div className='inputs'>
            <input type="text" placeholder='էլ․ հասցե' className='input' />
            <input type="text" placeholder='գաղտնաբառ' className='input' />
          </div>
          <div className='user'>
            <input type="checkbox" className='checkmark'></input>
            <span className='remember'>հիշել</span>
            <span className='forgot'>Մոռացե՞լ եք գաղտնաբառը</span>
          </div>
          <button className='btn1'>Մուտք</button>
          <h4>Չունե՞ք հաշիվ - Գրանցվել</h4>
        </div>
      </div>

    </div>
  )
}

export default SellCar