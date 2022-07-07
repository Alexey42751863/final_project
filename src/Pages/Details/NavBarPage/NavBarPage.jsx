import React from 'react'
 
const NavBarPage = ({id}) => {
  return (
    <nav className='NavBarPage'>
                    <div className="id">
                        ID: {id}
                    </div>
                    <div className="insurance">
                        Ռոսգոսստրախ
                    </div>
                    <div className="credit">
                        Գնիր վարկով
                    </div>
                </nav>
  )
}

export default NavBarPage