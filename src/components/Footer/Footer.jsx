import React from 'react'
import './../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
    <div className="social-media-links">
        <FontAwesomeIcon icon={faFacebook} size="4x" className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} size="4x" className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} size="4x" className="social-icon" />
    </div>
    <p>World Travel &copy; 2020, All Rights Reserved</p>
</footer>
  );
}


export default Footer