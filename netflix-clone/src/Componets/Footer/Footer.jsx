import React from 'react';
import './Footer.css';

// Example icons: replace with actual icon imports
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">

        {/* Social Icons */}
        {/* <div className="footer-icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div> */}
{/*  */}
        {/* Footer Links */}
        <div className="footer-data">
          
          <div>
            <p className="footer-icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </p>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
            <p className='footer-bottom-tex'>
        Service code <br>
        </br> © Netflix 1997-2024 INC
        </p>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom text */}
        {/* <p className="footer-bottom-text">
          Service code © Netflix 1997-2024 INC
        </p> */}

        {/* <p className='footer-bottom-tex'>
        Service code <br>
        </br> © Netflix 1997-2024 INC
        </p> */}
      </div>
    </div>
  );
}

export default Footer;