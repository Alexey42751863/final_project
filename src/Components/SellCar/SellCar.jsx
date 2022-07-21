import React from 'react'

const SellCar = () => {
  return (
    <div>
      <form action="#">
        <div id="myModal" class="modal">
         <div class="modal-content">
          <h2 className='header'>Մուտք</h2>
          <span class="close">&times;</span>
          <p>Սոց. հաշիվներով</p>
          <div className='btns'>
            <button>Facebook</button>
            <button>Google</button>
          </div>
          <p>կամ</p>
          <div className='inputs'>
            <input type="text" placeholder='էլ․ հասցե'/>
            <input type="text" placeholder='գաղտնաբառ' />
          </div>
          <p>Մոռացե՞լ եք գաղտնաբառը</p>
          <button>Մուտք</button>
          <h3>Չունե՞ք հաշիվ - Գրանցվել</h3>
            </div>
              </div>
      </form>
    </div>
  )
}

export default SellCar