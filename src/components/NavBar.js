import React from "react";

import { FaInstagramSquare,FaPhoneAlt,FaFacebookSquare } from "react-icons/fa";
import '../styles/NavBar.css'
// import logo from '../images/Kathari.png'

function NavBar(){
    return(
        <div className="nav-bar">
          <img className="logo" src='../images/Kathari.png' alt="logo picture"/>
          <div className="icons-container">
              <div>+385 555 321</div>
              <FaPhoneAlt className="react-icon phone"  /> 
              <FaInstagramSquare  className="react-icon"/>
              <FaFacebookSquare className="react-icon"/>
          </div>
        </div>
    )
}
export default NavBar;