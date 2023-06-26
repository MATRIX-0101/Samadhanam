import React, { useState,useEffect } from "react"; 
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();
  
  const [values,setvalues] = useState({
    firstname:"",
    lastname:"",
    password:"",
    confirmpassword:"",
    emailID:"",
    gender:"",
    year:"",
    hostel:"",
    phonenumber:"",
    registrationnumber:"",
    course:"",
    admin:"",
  });

  const handleSubmit =  async(event) => {
    event.preventDefault();
    if(handleValidation()){
      console.log("invalidation",registerRoute);
      const { firstname,lastname,password,emailID,gender,year,hostel,phonenumber,registrationnumber,course,admin } = values;
      const { data } = await axios.post(registerRoute,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': 'JWT fefege...'
        },
        firstname,
        lastname,
        password,
        emailID,
        gender,
        year,
        hostel,
        phonenumber,
        registrationnumber,
        course,
        admin,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("web-chat-user",JSON.stringify(data.user));
        console.log("data stored in localStorage"+data.user);
        toast.error(data.msg, toastOptions);
        navigate("/setAvatar");
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
    const { firstname,lastname,password,confirmpassword,emailID,gender,year,hostel,phonenumber,registrationnumber,course,admin } = values;
    if( password!==confirmpassword){
      toast.error("password and confirm password should be same.",toastOptions);
      return false;
    }else if(firstname.length>20){
      toast.error("Can't accept such a long name!!!",toastOptions);
      return false;
    } else if(lastname.length>20){
      toast.error("Can't accept such a long last name!!!",toastOptions);
      return false;
    } else if(admin!=="100" && admin!==""){
      toast.error("Sorry you are not an admin.",toastOptions);
      return false;
    }
    return true;
  };
  
  const handleChange = (event) => {
      setvalues({ ...values, [event.target.name]: event.target.value});    
  };
  const handleReset=()=>{
    if(window.confirm("Are you sure you want to reset the form ?"))
    document.getElementById('reg-form').reset();
  }
   

  return (
    
      <>
      
      <form  id="reg-form" onSubmit={(event) => handleSubmit(event)}>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" className="img-fluid"
                      styles="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Firstname" name="firstname" required onChange={(e) => handleChange(e)}/>
                            <label className="form-label" htmlFor="form3Example1m"></label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="Lastname" name="lastname" required onChange={(e) => handleChange(e)}/>
                            <label className="form-label" htmlFor="form3Example1n"></label>
                          </div>
                        </div>
                      </div>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="password" id="form3Example1m1" className="form-control form-control-lg" placeholder="Password" name="password" required onChange={(e) => handleChange(e)}/>
                            <label className="form-label" htmlFor="form3Example1m1"></label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="password" id="form3Example1n1" className="form-control form-control-lg" placeholder="Confirmpassword" name="confirmpassword" required onChange={(e) => handleChange(e)}/>
                            <label className="form-label" htmlFor="form3Example1n1"></label>
                          </div>
                        </div>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example8" className="form-control form-control-lg" placeholder="Email" name="emailID" required onChange={(e) => handleChange(e)}/>
                        <label className="form-label" htmlFor="form3Example8"></label>
                      </div>
      
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
      
                        <h6 className="mb-0 me-4">Gender: </h6>
      
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" placeholder="Female" name="gender" id="femaleGender" required onChange={(e) => handleChange(e)} 
                            value="Female" />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>
      
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" placeholder="Male" name="gender" id="maleGender" required onChange={(e) => handleChange(e)}
                            value="Male" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>
      
                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" placeholder="Other" name="gender" id="otherGender" required onChange={(e) => handleChange(e)}
                            value="other" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
      
                      </div>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
      
                          <select className="select" placeholder="Option" name="year" required onChange={handleChange}>
                            <option>Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
      
                        </div>
                        <div className="col-md-6 mb-4">
      
                          <select className="select" placeholder="Hostel" name="hostel" required onChange={handleChange}>
                            <option>Hostel</option>
                            <option value="SVBH">SVBH</option>
                            <option value="Tandon">Tandon</option>
                            <option value="Patel">Patel</option>
                            <option value="Malviya">Malviya</option>
                            <option value="Tilak">Tilak</option>
                            <option value="Raman">Raman</option>
                            <option value="PGHostel">PG Hostel</option>
                            <option value="KNGH">KNGH</option>
                            <option value="DJ">DJ</option>
                            <option value="Sarojininaidu">Sarojini Naidu</option>
                          </select>
      
                        </div>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder="Phonenumber" name="phonenumber" required onChange={(e) => handleChange(e)}/>
                        <label className="form-label" htmlFor="form3Example9"></label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example90" className="form-control form-control-lg" placeholder="Registrationnumber" name="registrationnumber" required onChange={(e) => handleChange(e)}/>
                        <label className="form-label" htmlFor="form3Example90"></label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" placeholder="Course" name="course" required onChange={(e) => handleChange(e)}/>
                        <label className="form-label" htmlFor="form3Example99"></label>
                      </div>
      
                     {/* <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg" placeholder="Problemsynopsis" name="problemsynopsis"  onChange={(e) => handleChange(e)}/>
                        <label className="form-label" htmlFor="form3Example97"></label>
                        </div> */}

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="password" id="form3Example1m1" className="form-control form-control-lg" placeholder="Admin-key" name="admin"  onChange={(e) => handleChange(e)}/>
                            <label className="form-label" htmlFor="form3Example1m1"></label>
                          </div>
                        </div>
                      </div>

                      
      
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg" onClick={handleReset}>Reset all</button>
                        <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
      <ToastContainer/>
      </>
    
  )
}

export default Register;
