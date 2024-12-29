import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga aperiam ducimus, aspernatur sit iure sunt, molestiae quisquam consectetur, vel maxime qui aut rem reiciendis nobis quasi. Officiis, sapiente eius!</p>
                 <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                 </div>

            </div>
            <div className="footer-content-mid">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>

            </div>
            <div className="footer-content-right">
              <h2>Get in Touch</h2>
              <ul>
                <li>+123 456 789</li>
                <li>abc@gmail.com</li>

              </ul>

            </div>
           
        </div>
      <hr />
      <div className="footer-copyright"><p>Copyright 2024 @ XYZ.com -All Right Reserved</p></div>
    </div>
  )
}

export default Footer
