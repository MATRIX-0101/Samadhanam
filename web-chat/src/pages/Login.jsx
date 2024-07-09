import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    emailID: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { emailID, password } = values;
      const { data } = await axios.post(loginRoute, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': 'JWT fefege...'
        },
        emailID,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else if (data.status === true) {
        toast.success(data.msg, toastOptions);
        localStorage.setItem("web-chat-user", JSON.stringify(data.user));
        navigate("/chat");
      } 
    }
  };
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  
  const handleValidation = () => {
    const { emailID, password } = values;
    if (!emailID || !password) {
      toast.error("Email and Password are required", toastOptions);
      return false;
    }
    return true;
  };
  
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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

      <div className="flex items-center justify-center min-h-screen animate-fadeIn">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-slideInUp" onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h4 className="text-3xl font-bold text-gray-800 animate-fadeIn">
              <span className="text-indigo-600"><b>S</b></span>amadhanam
            </h4>
          </div>
          <div className="space-y-4">
            <div>
              <input 
                type="email" 
                id="loginName" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 animate-slideInUp" 
                name="emailID" 
                placeholder="E-mail" 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="password" 
                id="loginPassword" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 animate-slideInUp" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 animate-slideInUp"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 animate-fadeIn">
              Not a member? <a href="register" className="text-indigo-600 hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
