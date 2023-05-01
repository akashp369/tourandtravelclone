import './NavbarStyles.css'
import {Link} from 'react-router-dom'
import { MenuItems } from './MenuItem'

import React, { useState } from 'react'

export default function Navbar() {
  const[toggle, setToggle]=useState(true)
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className='menu-icons'>
          <i className={toggle?'fas fa-bars' : 'fas fa-times'} onClick={()=>{setToggle(!toggle)}}></i>
          
        </div>
        <ul className={toggle?'nav-menu':'nav-menu active'}>
            {
                MenuItems.map((e, ind)=>{
                    return (
                        <li key={ind}>
                            <Link className={e.cName} to={e.url}><i className={e.icon}></i> {e.title}</Link>
                        </li>
                    )
                })
            }
            <Link to='/signup'><button>Sign up</button></Link>
        </ul>
      </nav>
    </div>
  )
}
