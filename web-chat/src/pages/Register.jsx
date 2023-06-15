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
    problemsynopsis:"",

  });

  const handleSubmit =  async(event) => {
    event.preventDefault();
    if(handleValidation()){
      console.log("invalidation",registerRoute);
      const { firstname,lastname,password,emailID,gender,year,hostel,phonenumber,registrationnumber,course,problemsynopsis } = values;
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
        problemsynopsis,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("web-chat-user",JSON.stringify(data.user));
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
    const { firstname,lastname,password,confirmpassword,emailID,gender,year,hostel,phonenumber,registrationnumber,course,problemsynopsis } = values;
    if( password!==confirmpassword){
      toast.error("password and confirm password should be same.",toastOptions);
      return false;
    }else if(firstname.length>20){
      toast.error("Can't accept such a long name!!!",toastOptions);
      return false;
    } else if(lastname.length>20){
      toast.error("Can't accept such a long last name!!!",toastOptions);
      return false;
    } 
    return true;
  };
  
  const handleChange = (event) => {
      setvalues({ ...values, [event.target.name]: event.target.value});    
  };
   

  return (
    
      <>
      
      <form onSubmit={(event) => handleSubmit(event)}>
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" class="img-fluid"
                      styles="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">Student registration form</h3>
      
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Firstname" name="firstname" onChange={(e) => handleChange(e)}/>
                            <label class="form-label" for="form3Example1m"></label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" id="form3Example1n" class="form-control form-control-lg" placeholder="Lastname" name="lastname" onChange={(e) => handleChange(e)}/>
                            <label class="form-label" for="form3Example1n"></label>
                          </div>
                        </div>
                      </div>
      
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="password" id="form3Example1m1" class="form-control form-control-lg" placeholder="Password" name="password" onChange={(e) => handleChange(e)}/>
                            <label class="form-label" for="form3Example1m1"></label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="password" id="form3Example1n1" class="form-control form-control-lg" placeholder="Confirmpassword" name="confirmpassword" onChange={(e) => handleChange(e)}/>
                            <label class="form-label" for="form3Example1n1"></label>
                          </div>
                        </div>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="email" id="form3Example8" class="form-control form-control-lg" placeholder="Email" name="emailID" onChange={(e) => handleChange(e)}/>
                        <label class="form-label" for="form3Example8"></label>
                      </div>
      
                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
      
                        <h6 class="mb-0 me-4">Gender: </h6>
      
                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" placeholder="Female" name="gender" id="femaleGender" onChange={(e) => handleChange(e)} 
                            value="Female" />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>
      
                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" placeholder="Male" name="gender" id="maleGender" onChange={(e) => handleChange(e)}
                            value="Male" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>
      
                        <div class="form-check form-check-inline mb-0">
                          <input class="form-check-input" type="radio" placeholder="Other" name="gender" id="otherGender" onChange={(e) => handleChange(e)}
                            value="other" />
                          <label class="form-check-label" for="otherGender">Other</label>
                        </div>
      
                      </div>
      
                      <div class="row">
                        <div class="col-md-6 mb-4">
      
                          <select class="select" placeholder="Option" name="year" onChange={handleChange}>
                            <option>Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
      
                        </div>
                        <div class="col-md-6 mb-4">
      
                          <select class="select" placeholder="Hostel" name="hostel" onChange={handleChange}>
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
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example9" class="form-control form-control-lg" placeholder="Phonenumber" name="phonenumber" onChange={(e) => handleChange(e)}/>
                        <label class="form-label" for="form3Example9"></label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example90" class="form-control form-control-lg" placeholder="Registrationnumber" name="registrationnumber" onChange={(e) => handleChange(e)}/>
                        <label class="form-label" for="form3Example90"></label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Course" name="course" onChange={(e) => handleChange(e)}/>
                        <label class="form-label" for="form3Example99"></label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" placeholder="Problemsynopsis" name="problemsynopsis" onChange={(e) => handleChange(e)}/>
                        <label class="form-label" for="form3Example97"></label>
                      </div>
      
                      <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
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
