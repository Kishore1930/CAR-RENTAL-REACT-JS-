import React, { useState } from 'react';
import '../home-navbar/homeNavBar.css';
import { BrowserRouter as Link } from 'react-router-dom';
function HomeNavBar()
{
    return(
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars toggler-btn"></i>
                    </button>
                    <div className='navbar-brand'>
                        <span>Crazy Car Rental</span>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Coins</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Account/Profile</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/availableCars' class="nav-link">Booking Status</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Offers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Available Cars</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">History</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* <li class="nav-item"> */}
                            <Link to="/userOrAdmin" class="nav-link">Login</Link>
                        {/* </li> */}
                    </div>
                </div>
            </nav>
        </>
    )

}
export default HomeNavBar;