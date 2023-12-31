import React from 'react';

import './style.css';

function Footer() {
  return (
        <div className="footerParentDiv">
          <div className="content">
            <div>
              <div className="heading">
                <p>Categories</p>
              </div>
              <div className="list">
                <ul>
                  <li>Cars</li>
                  <li>Flats for rent</li>
                  <li>Mobile Phones</li>
                  <li>Jobs</li>
                  <li>Property</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="heading">
                <p>About Us</p>
              </div>
              <div className="list">
                <ul>
                  <li>About Olx</li>
                  <li>OLX Blog</li>
                  <li>Contact Us</li>
                  <li>OLX for Your Ease</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="heading">
                <p>OLX</p>
              </div>
              <div className="list">
                <ul>
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer">
            <p></p>
            <p>Free Classifieds in Pakistan. ©  © 2006-2023 OLX</p>
          </div>
        </div>
      );
    }

export default Footer;
