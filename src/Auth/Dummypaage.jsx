import React from 'react'
import Cookies from 'js-cookie';
function Dummypaage() {
    const token = localStorage.getItem('jwtToken');

    let user;
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
        user = payload; // Get user data
    }
  return (
    <div>
    <h1>Dummy Page</h1>
    {user ? (
        <div>
            <h2>Welcome, {user.username}!</h2>
            <p>You are logged in.</p>
        </div>
    ) : (
        <div>
            <h2>Access Denied</h2>
            <p>You are not logged in. Please log in to access this page.</p>
        </div>
    )}
</div>
  )
}

export default Dummypaage