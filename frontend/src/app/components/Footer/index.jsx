"use client"

import "./style.scss"
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer-macy">
            <div className="footer-main-cols">
                <div className="footer-col">
                    <div className="footer-title">XIVV.SHOP</div>
                    <div style={{fontSize: '1rem', opacity: 0.92, marginBottom: 12}}>
                        Director: Shoxrux Shokirov<br/>
                        Address: Uzbekistan, Samarkand,<br/>
                        Samarkand district, X.A.V, Zarafshon St, 160,<br/>
                        GitHub: <a href="https://github.com/ShoxruxShokirov" style={{color:'#fff',textDecoration:'underline'}}>ShoxruxShokirov</a><br />
                        Phone: <a href="+998(77) 220-43-48" style={{color:'#fff',textDecoration:'underline'}}>+998(77) 220-43-48</a>
                    </div>
                    <div className="footer-social-row">
                        <a href="https://www.instagram.com/1shokirov_23/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://t.me/Sh_Shoxrux09" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <div className="footer-title">Working Hours</div>
                    <ul style={{fontSize: '1rem', opacity: 0.92}}>
                        <li>Monday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Tuesday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Wednesday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Thursday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Friday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Saturday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                        <li>Sunday <span style={{float:'right'}}>10:00 - 20:00</span></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <div className="footer-title">Categories</div>
                    <ul style={{fontSize: '1rem', opacity: 0.92}}>
                        <li>Products</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <div className="footer-title">Additional</div>
                    <ul style={{fontSize: '1rem', opacity: 0.92}}>
                        <li>Certificates</li>
                        <li>Branches</li>
                        <li>Photo Gallery</li>
                        <li>Price List</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
            <div className="footer-legal">
                <div className="footer-legal-copy">
                    © 2024 XIVV.SHOP. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer