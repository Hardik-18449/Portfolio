import React from 'react'
import './Footer.css'
import Logo1 from '../../assets/Logo1.png'
import User_icon from '../../assets/User_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Logo1} alt="" />
                <p>I'm FrontEnd Developer basaed in Indore </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={User_icon} alt="" />
                    <input type="email" placeholder='Enter your name' />
                    
                </div>
                <div className="footer-subscribe">Subscribe</div>
                </div>        
                </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Hardik Gurjar. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
