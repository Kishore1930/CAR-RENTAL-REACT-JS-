import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p align="center">First Class Car Rental with 100% Satisfication</p>
     <div className="image-container">
  <img src='./images/scorpio1.webp' alt="Image 1" />
  <img src='./images/maruti.webp' alt="Image 2" />
  <img src='./images/ertiga.webp' alt="Image 3" />
 
</div>

      <p>&copy; 2024 CAR RENTAL. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
