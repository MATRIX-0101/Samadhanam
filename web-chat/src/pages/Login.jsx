import React, { useState,useEffect } from "react"; 
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  
  const navigate = useNavigate();
  
  const [values,setvalues] = useState({
    emailID:"",
    password:"",

  });

  const handleSubmit =  async(event) => {
    event.preventDefault();
    if(handleValidation()){
      // console.log("invalidation",loginRoute);
      const { emailID,password } = values;
      const { data } = await axios.post(loginRoute,{
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
      }
      if (data.status === true) {
        toast.error(data.msg, toastOptions);
        // console.log(`Login status true`)
        localStorage.setItem("web-chat-user",JSON.stringify(data.user));
        // console.log(`before login to chat navigate`)
        navigate("/chat");
        // console.log(`after login to chat navigate`)
      } 
       
    }
    
  };
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseonHover: true,
    draggable: true,
    theme: "dark",
  };
  

  
  const handleValidation = () => {
    const { emailID,password } = values;
    if( password===""){
      toast.error("Email and Password is required",toastOptions);
      return false;
    }else if(emailID===""){
      toast.error("Email and Password is required",toastOptions);
      return false;
     } //else if(lastname.length>20){
    //   toast.error("Can't accept such a long last name!!!",toastOptions);
    //   return false;
    // } 
    return true;
  };
  
  const handleChange = (event) => {
      setvalues({ ...values, [event.target.name]: event.target.value});    
  };
  
   

  return (
    
    <>
      <div className="login flex items-center justify-center min-h-screen p-4 bg-gray-100">
        <form className="form bg-white p-8 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mainClass">
            <div className="background">
              <div className="loginLogo text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800">
                  <span className="logospan text-blue-600"><b>S</b></span>amadhanam
                </h4>
              </div>
              <div className="inputVals space-y-4">
                <div>
                  <input 
                    type="email" 
                    id="loginName" 
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                    name="emailID" 
                    placeholder="E-mail" 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    id="loginPassword" 
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="row mb-4 flex justify-between items-center mt-6">
                <button 
                  type="submit" 
                  className="btn-primary w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Not a member? <a href="register" className="text-blue-600 hover:underline">Register</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
      </>
    
 
    
  );
}

export default Login;