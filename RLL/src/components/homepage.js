import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to Our Car Rental Service</h1>
        <div className="dropdowns">
          <div className="dropdown-container">
            <label htmlFor="car-brand">Car Brand:</label>
            <select id="car-brand" name="car-brand" className="dropdown">
              <option value="volvo">Volvo</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="dropdown-container">
            <label htmlFor="car-type">Car Type:</label>
            <select id="car-type" name="car-type" className="dropdown">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="dropdown-container">
            <label htmlFor="price">Price:</label>
            <select id="price" name="price" className="dropdown">
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <button className="get-car-btn">Get Car</button>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
