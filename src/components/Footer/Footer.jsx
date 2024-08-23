import { FiTwitter } from "react-icons/fi"; 
import { BsInstagram } from "react-icons/bs"; 
import { FiFacebook } from "react-icons/fi"; 
import React from 'react'
import './Footer.css'
import Fabrx from '../../images/Fabrx.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="header">
      <div className="footer-list">
        <div className="list">
          <h2>First Column</h2>
          <ul>
            <li>Link First</li>
            <li>Link Second</li>
            <li>Link Third</li>
            <li>Link Fourth</li>
          </ul>
        </div>
        <div className="list">
          <h2>First Column</h2>
          <ul>
            <li>Link First</li>
            <li>Link Second</li>
            <li>Link Third</li>
            <li>Link Fourth</li>
          </ul>
        </div>
        <div className="list">
          <h2>First Column</h2>
          <ul>
            <li>Link First</li>
            <li>Link Second</li>
            <li>Link Third</li>
            <li>Link Fourth</li>
          </ul>
        </div>
        <div className="list">
          <h2>First Column</h2>
          <ul>
            <li>Link First</li>
            <li>Link Second</li>
            <li>Link Third</li>
            <li>Link Fourth</li>
          </ul>
        </div>
      </div>
      <div>
        <p>Never miss an update</p>
        <div className="input">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
      </div>
    </footer>
    <div className="bottom">
    <img src={Fabrx} alt="" />
    <p>© 2019 Fabrx </p>
    <div className="bottom-links">
      <Link><FiFacebook /></Link>
      <Link><BsInstagram /></Link>
      <Link><FiTwitter /></Link>
    </div>
  </div>
    </>
  )
}

export default Footer