import React from 'react';

import './style.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR CATEGORIES</p>
          </div>
          <div className="list">
            <ul>
              <li>Cars</li>
              <li>Flats for rent</li>
              <li>Mobile Phones</li>
              <li>Jobs</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About Dubizzle Group</li>
              <li>OLX Blog</li>
              <li>Contact Us</li>
              <li>OLX for Businesses</li>
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
