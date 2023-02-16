import React from 'react';
import './Header.css';
import logo from './Logo.png';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return(
        <>
        <div className="header">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
          <Link className="link" to='/'>home</Link>
          <Link className="link" to="/langauge">Langauge</Link>
          <Link className="link" to="genre">genre </Link>
          <Link className="link" to="/login">account</Link>
          </div>
        </div>
        <div className='line'></div>
          <div className='line'></div>
        </>

    )
}
export default Header;