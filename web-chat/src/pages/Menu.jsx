import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';

const Menu = () => {
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const text = "Welcome to Samadhanam";
    const animatedTextElement = animatedTextRef.current;

    if (!animatedTextElement) return;

    animatedTextElement.textContent = text;

    const interval = setInterval(() => {
      animatedTextElement.classList.remove('animate-fadeOut');
      animatedTextElement.classList.add('animate-fadeIn');

      setTimeout(() => {
        animatedTextElement.classList.remove('animate-fadeIn');
        animatedTextElement.classList.add('animate-fadeOut');
      }, 2000); // Adjust delay before fading out (milliseconds)
    }, 4000); // Adjust interval between repeats (milliseconds)

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
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
          /* Adjusted button styles */
          .animated-button {
            transition: all 0.3s ease-in-out;
            background-color: #6D28D9; /* Purple color */
            color: #FFFFFF;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: none;
            outline: none;
            cursor: pointer;
          }
          
          .animated-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
            background-color: #5B21B6; /* Darker shade of purple on hover */
          }
          
          /* Adjusted text styles */
          .animated-text {
            font-size: 3rem;
            font-weight: bold;
            color: #333333;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            white-space: nowrap; /* Prevent text from wrapping */
            overflow: hidden; /* Hide overflowing text */
          }

          /* Animation keyframes */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0.2;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-fadeOut {
            animation: fadeOut 1s ease-out forwards;
          }

          /* Divider line */
          .divider-line {
            width: 2px;
            height: 80%; /* Adjust height as needed */
            background-color: #CCCCCC; /* Light gray color */
          }
        `}
      </style>

      <div className="flex items-center h-screen p-6">
        <div className="w-full md:w-1/2 text-center md:text-left p-8">
          <h1 ref={animatedTextRef} className="text-5xl md:text-7xl animated-text transform transition duration-500 hover:scale-105">
            {/* Text content will be dynamically animated */}
          </h1>
        </div>
        <div className="divider-line mx-8 md:mx-16"></div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 p-8">
          <button onClick={handleChatButtonClick} className="px-10 py-4 text-lg font-bold rounded-lg shadow-md animated-button">
            Chat with us
          </button>
          <button onClick={() => navigate("/solution")} className="px-10 py-4 text-lg font-bold rounded-lg shadow-md animated-button">
            Go to your daily life problem solution
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
