import React from 'react'
import './footer.scss'

import footer_logo from '../Assets/logo_big.png'
import insta_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Shopper</p>
            </div>

            <ul className="footer-links">
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={insta_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer