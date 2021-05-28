
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
               <p>
                  Become part of our story
      
                  <a href="https://www.facebook.com/HackYFutureBE/" target="_blank" rel="noreferrer"><img src= { image1} alt ="pic1"/></a>
                  <a href="https://www.linkedin.com/company/hackyourfuture-belgium/" target="_blank" rel="noreferrer"><img src={image3 } alt ="pic3"/></a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={image2} alt ="pic2"/></a>
      
                  <span>&copy; 2021 HELPY</span>
               </p>
         </div> 
       </footer>
      </div>
    )
}

export default Footer;
