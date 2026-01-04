import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-left">
           <Link to="/"> 
           <img src="../assets/images/Ferilogo.png" alt="logo" width="200px" height="80px"></img></Link>
           <p>Ethical fashion is the ultimate fashion</p>
      </div>

      <div className="footer-right">
          
          <p className="text-center mt-3">
          <Link to="/policy">Privacy Policy</Link> |
          <Link to="/about">About Us</Link> |
          <Link to="/contact">Contact Us</Link> |
          </p>
          <h4 className="text-center"> All right reserved &copy; Feribrandit</h4>
      </div>
    </div>
  )
}

export default Footer
