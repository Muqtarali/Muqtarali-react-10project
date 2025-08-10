import React from 'react'
import img from '../assets/45175a94d5389cc06b9d40c646878c60ac4bf7ed.png'

function header() {
  return (
 <>
    <div className="header">
        <img className="img" src={img} alt="Logo" />
      <li className="header-list">
        <a href="MEAN">Mean</a>
        <a href="">LOCATION</a>
        <a href="">ABOUT</a>
        <a href="CONTACT">CONTACT</a>
        <a href=""></a>
      </li>
      <button className='header-button'>LOGO</button>

    </div>
    
    </>

  )
}

export default header
