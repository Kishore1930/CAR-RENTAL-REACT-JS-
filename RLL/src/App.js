import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage';
import Footer from './components/footer';
import Navbar from './components/navbar.js';
import Blog from './components/Blog.js';
import Registration from './components/Registration.js';
import Reviews from './components/Reviews.js';
import Contactus from './components/Contactus.js';
import Login from './components/Login.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Reviews' element={<Reviews />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
