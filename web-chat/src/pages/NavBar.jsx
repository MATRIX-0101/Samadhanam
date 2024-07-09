import React, { useEffect } from 'react';
import './style.css';

export default function NavBar() {
  useEffect(() => {
    const title = document.querySelector('.logo');
    title.classList.add('animate-pulse');
  }, []);

  return (
    <div className="mainDiv">
      <nav className="navbar flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg">
        {/* Logo Part */}
        <div className="logo text-white text-3xl font-bold">
          <h4>
            <span className="logospan"><b>S</b></span>amadhanam
          </h4>
        </div>
        {/* Navigation Links */}
        <div className="navbar-top flex space-x-8">
          <a className="Anchor text-white text-lg font-semibold hover:underline transition duration-300" href="login">
            <b>Login</b>
          </a>
          <a className="Anchor text-white text-lg font-semibold hover:underline transition duration-300" href="register">
            <b>Register</b>
          </a>
        </div>
      </nav>
    </div>
  );
}
