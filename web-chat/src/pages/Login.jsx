import React, { useState,useEffect } from "react"; 
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css';
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
    <div className="login">
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
    
    <div className="mainClass">
      {/* <!-- Pills navs --> */}
      
        <div className="background">
      <div className="loginLogo" >
          <h4 >
            <span className="logospan"><b>S</b></span>amadhanam
          </h4>
      </div>
        <div className="inputVals">
          <input type="email" id="loginName" className="form-control" name="emailID" placeholder="E-mail" onChange={(e) => handleChange(e)}/>
          <label className="form-label" htmlFor="loginName">
          </label>
        
          <input type="password" id="loginPassword" className="form-control" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
          <label className="form-label" htmlFor="loginPassword">
          </label>
        </div>

        {/* <!-- 2 column grid layout --> */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center"></div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn-primary ">
            Login
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <a href="register">Register</a>
            </p>
          </div>
          </div>
        </div>
        </div>
    
    </form>
    </div>
    <ToastContainer/>
    </>
    
  )
}

export default Login;