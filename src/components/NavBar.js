import React,{useState} from "react";
import { FaInstagramSquare,FaPhoneAlt,FaFacebookSquare } from "react-icons/fa";
import '../styles/NavBar.css'
// import logo from '../images/Kathari.png'

function NavBar(){
  const [show, setShow] = useState(false)
  
    return(
        <div className="nav-bar">
          <img className="logo" src='../images/Kathari.png' alt="logo picture"/>
          <div className="icons-container">
                {show ? <div className="number">+385 555 321</div> : <div></div>}
              
              <FaPhoneAlt className="react-icon phone" onClick={()=>{setShow(!show)}} /> 
              <a  href="https://www.instagram.com/"><FaInstagramSquare  className="react-icon"/></a>
              <a  href="https://www.facebook.com/"><FaFacebookSquare className="react-icon"/></a>
          </div>
        </div>
    )
}
export default NavBar;