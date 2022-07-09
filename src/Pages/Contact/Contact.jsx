import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact_item">
            <div className="text1">
                <h1>Կապ</h1>
                <p>Հարցերի եւ առաջարկների դեպքում դուք կարող եք դիմել մեզ` ներկայացված նամակի ձեւի միջոցով:</p>
                <p>Հաճախակի տրվող հարցերի պատասխանները կարող եք գտնել <a href="/help">Օգնություն</a> բաժնում:</p>
                <p>Կարող եք կապ հաստատել մեզ հետ նաեւ սոցցանցերում Auto.am-ի էջերի միջոցով.</p>
                <p><span>Էլ. հասցե.</span> support@auto.am </p>
                <p><span>Facebook.</span> <a href="https://www.facebook.com/auto.am/">https://www.facebook.com/auto.am/</a></p>
            </div>

            <div className="form">
                <label>Թեմա</label>
                <select id="select">
                    <option value="Գրանցում">Գրանցում</option>
                    <option value="Հեռախոսահամարների հաստատում">Հեռախոսահամարների հաստատում</option>
                    <option value="Հայտարարությունների տեղադրում">Հայտարարությունների տեղադրում</option>
                    <option value="Արագ վաճառք ծառայություն և վճարումներ">Արագ վաճառք ծառայություն և վճարումներ</option>
                    <option value="Մակնիշների և մոդելների ավելացում">Մակնիշների և մոդելների ավելացում</option>
                    <option value="Խախտումներ">Խախտումներ</option>
                    <option value="Դիլերական հաշիվ">Դիլերական հաշիվ</option>
                    <option value="Գովազդ կայքում">Գովազդ կայքում</option>
                </select>

                <div className="email">
                    <label>Ձեր էլ. փոստի հասցեն</label>
                    <input type="email" name="email" id="email" value='email@example.com' required/>
                </div>

                <div className="textarea">
                    <label>Ձեր հաղորդագրությունը</label>
                    <textarea name="" id=""></textarea>
                </div>

                
                <input type="submit" value="Ուղարկել" className="send"/>
            </div>

        </div>
    </div>
  )
}

export default Contact