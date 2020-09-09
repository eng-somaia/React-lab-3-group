import React, { Component } from 'react';
import index3 from './index3.css';

const Footer = () =>{
    return (
    <div>
    <p className="p-style">W5723 Lake View Chester, CA 96020</p>
    <p className="p-style">Design by <span className = "span-style">Papaya.</span></p>
    <img src="./images/facebook.png" alt="Facebook icon" width="24px" height="24px" className="img-style" />
    <img src="./images/twitter.png" alt="Twitter icon" width="24px" height="24px" className="img-style" />
    <img src="./images/instagram.png" alt="Instagram icon" width="24px" height="24px" className="img-style" />
    <p className="p-style">&copy; Camp Chippewa</p>
    </div>
    );
  }

export default Footer;