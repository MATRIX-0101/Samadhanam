import React, { useEffect } from 'react';
import NavBar from './NavBar';

const Menu = () => {
  useEffect(() => {
    const text = document.querySelectorAll('.animated-text');
    const buttons = document.querySelectorAll('.animated-button');
    
    text.forEach((element) => {
      element.classList.add('animate-fadeIn');
    });
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('animate-slideInUp');
      }, index * 200);
    });
  }, []);

  const isLoggedIn = () => {
    // Replace this with your actual login check
    return Boolean(localStorage.getItem('user'));
  };

  const navigate = (path) => {
    window.location.href = path;
  };

  const handleChatButtonClick = () => {
    if (isLoggedIn()) {
      navigate('/chat');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <NavBar />
      <div className="outer"></div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideInUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slideInUp {
            animation: slideInUp 0.5s ease-out forwards;
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row justify-between items-center h-screen p-6 bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600">
        <div className="w-full md:w-1/2 text-center md:text-left p-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animated-text transform transition duration-500 hover:scale-105">
            Unlock Your Potential!
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100 animated-text">
            Discover new skills and join a community of learners.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 p-8">
          <button onClick={handleChatButtonClick} className="px-10 py-4 bg-purple-500 text-white text-lg font-bold rounded-lg shadow-md transform animated-button hover:scale-105 hover:bg-purple-600 transition duration-300 ease-in-out">
            Chat with us
          </button>
          <button onClick={() => navigate("/solution")} className="px-10 py-4 bg-pink-500 text-white text-lg font-bold rounded-lg shadow-md transform animated-button hover:scale-105 hover:bg-pink-600 transition duration-300 ease-in-out">
            Go to your daily life problem solution
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
