import React, { useEffect, useState } from 'react';
import '../userpage-content/userContent.css';
import axios from 'axios';

function UserContent() {
  const [cars, setCars] = useState([]);
  const [status, setStatus] = useState(false);
  const [brands, setBrands] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');

  function getData() {
    let url = 'http://localhost:3005/api/availablecars';
    axios.get(url).then((data) => {
      setCars(data.data);
      if (data.data.length > 0) setStatus(true);
    });
  }

  useEffect(() => {
    if (!status) getData();
    updateValues();
  }, [status]);

  function updateValues() {
    const updatedBrands = cars.map((obj) => obj.brand);
    setBrands(updatedBrands.filter((item, index) => updatedBrands.indexOf(item) === index));
  }

  const carBrands = brands.map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));

  return (
    <>
      <div className='card1 col-7'>
        <form>
          <div className='search'>
            <label htmlFor='startDate'>Start Date:</label>
            <input
              type='date'
              id='startDate'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label htmlFor='endDate'>End Date:</label>
            <input
              type='date'
              id='endDate'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <label htmlFor='carBrand'>Car Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className=''
            >
              {carBrands}
            </select>

            <label htmlFor='carType'>Car Type:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className=''
            >
              <option value=''>Select Type</option>
              <option value='SUV'>SUV</option>
              <option value='XUV'>XUV</option>
              <option value='Hatchback'>Hatchback</option>
              {/* Add more car types as needed */}
            </select>

            <input className='button' type='submit' value='Book Now' />
          </div>
        </form>
      </div>
    </>
  );
}

export default UserContent;
