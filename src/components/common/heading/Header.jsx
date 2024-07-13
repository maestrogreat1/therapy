import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {

    const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About me</Link></li>
                <li><Link to="/coaching">1:1 Coaching</Link></li>
                <li><Link to="/group">Group coaching</Link></li>
            </ul>
            <div className="start">
                <Link to="/contact" className='button'>REACH OUT</Link>
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
      </header>
    </>
  )
}

export default Header
