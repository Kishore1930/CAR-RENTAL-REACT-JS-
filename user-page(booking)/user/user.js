import React from 'react';
import UserNavBar from '../user-navbar/userNavBar.js';
import '../user/user.css'
import UserContent from '../userpage-content/userContent.js';

function User()
{
    return(
        <div className='bg'>
            <UserNavBar/>
            <UserContent/>
        </div>
    )

}
export default User;