import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, incidunt. Hic, molestiae. Itaque ratione, excepturi sed consectetur magni rem, hic, pariatur a beatae voluptas iusto! Quasi ducimus eligendi laudantium quos iste magni quia soluta tempora pariatur veritatis, nisi illum delectus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, illum?</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook_Icon" />
            <img src={assets.twitter_icon} alt="Twitter_Icon" />
            <img src={assets.linkedin_icon} alt="Linkedin_Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className=''>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
