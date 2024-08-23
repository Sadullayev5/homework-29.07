import { BiBell } from "react-icons/bi"; 
import { BiGift } from "react-icons/bi"; 
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Fabrx from '../../images/Fabrx.svg'
import avatar from '../../images/avatar.png'

const Nav = () => {
  return (
    <nav>
        <img src={Fabrx} alt="" />
        <div className="nav-links">
        <div className="nav-profile">
            <img src={avatar} alt="" />
            <Link>Bruce Lee</Link>
        </div>
        <Link><BiGift /></Link>
        <Link><BiBell /></Link>
        </div>
    </nav>
  )
}

export default Nav