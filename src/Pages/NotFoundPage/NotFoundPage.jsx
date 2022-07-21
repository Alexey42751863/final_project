import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='NotFoundPage'>
      <div className='img'>
      </div>
      <div className='content'>
        <h1>
          Ցավոք, նման էջ գոյություն չունի
        </h1>
        <div className='descr'>
          <p>
            Հնարավոր է, էջը ջնջվել է, անվանափոխվել կամ ժամանակավորապես անհասանելի է։
          </p>
          <h3>
            Փորձեք հետևյալ քայլերը:
          </h3>
          <ul>
            <li>
              Ստուգեք, արդյո՞ք ճիշտ եք ներմուծել հասցեն (հնարավոր է, ներմուծել եք այն հայատառ կամ կիրիլիցայով
            </li>
            <li>
              Այցելեք գլխավոր էջ
              <span>
                <Link to={'/'}>https://auto.am</Link>
              </span>
              օգտվեք Որոնումից, եւ հնարավոր է կգտնեք այն, ինչ փնտրում եք
            </li>
            <li>
              Խնդրում ենք հայտնել մեզ գոյություն չունեցող հասցեի մասին
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default NotFoundPage