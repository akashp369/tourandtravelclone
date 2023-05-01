import './NavbarStyles.css'
import {Link} from 'react-router-dom'
import { MenuItems } from './MenuItem'

import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className='nav-menu'>
            {
                MenuItems.map((e, ind)=>{
                    return (
                        <li key={ind}>
                            <Link to={e.url}><i className={e.icon}></i> {e.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
      </nav>
    </div>
  )
}
