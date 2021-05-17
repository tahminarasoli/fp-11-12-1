import { Container, Typography } from '@material-ui/core';
import React from 'react';
import image1 from '../../images/Facebook_Logo.png';
import image2 from '../../images/insta.png'
import image3 from '../../images/linked.png'
import './styles.css'

const Footer = () => {
    return (
       <div className='bigfoot'>
       <footer className="footer">
          <div className="social">
               <p>Become part of our story</p>
      
                 <a href="https://www.facebook.com/HackYFutureBE/" target="_blank"><img src= { image1} alt ="pic1"/></a>
                 <a href="https://www.linkedin.com/company/hackyourfuture-belgium/" target="_blank"><img src={image3 } alt ="pic3"/></a>
                 <a href="https://www.instagram.com/" target="_blank"><img src={image2} alt ="pic2"/></a>
      
                 <p>&copy; 2021 HELPY</p>
       </div> 
       </footer>
       </div>
    )
}

export default Footer;
