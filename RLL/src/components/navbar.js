// import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/Registration">Registration</Link></li>
//         <li><Link to="/Blog">Blog</Link></li>
//         <li><Link to="/Reviews">Reviews</Link></li>
//         <li><Link to="/Login">Login</Link></li>
//         <li><Link to="/Contactus">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">CAR RENTAL</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-links">
            
            <li className="nav-item">
              <Link className="nav-link" to="/Registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
