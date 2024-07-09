import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    emailID: "",
    gender: "",
    year: "",
    hostel: "",
    phonenumber: "",
    registrationnumber: "",
    course: "",
    admin: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const {
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
      } = values;
      const { data } = await axios.post(registerRoute, {
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
        localStorage.setItem("web-chat-user", JSON.stringify(data.user));
        toast.success(data.msg, toastOptions);
        navigate("/setAvatar");
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
    const {
      firstname,
      lastname,
      password,
      confirmpassword,
      emailID,
      gender,
      year,
      hostel,
      phonenumber,
      registrationnumber,
      course,
      admin,
    } = values;
    if (password !== confirmpassword) {
      toast.error("Password and confirm password should be the same.", toastOptions);
      return false;
    } else if (firstname.length > 20) {
      toast.error("Can't accept such a long name!!!", toastOptions);
      return false;
    } else if (lastname.length > 20) {
      toast.error("Can't accept such a long last name!!!", toastOptions);
      return false;
    } else if (admin !== "100" && admin !== "") {
      toast.error("Sorry you are not an admin.", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the form?"))
      document.getElementById('reg-form').reset();
  };

  return (
    <>
      <form id="reg-form" onSubmit={(event) => handleSubmit(event)}>
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2 p-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Registration Form</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="First Name"
                name="firstname"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Last Name"
                name="lastname"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Confirm Password"
                name="confirmpassword"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Email"
                name="emailID"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="my-4">
              <label className="block text-gray-700">Gender:</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    name="gender"
                    value="Female"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    name="gender"
                    value="Male"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    name="gender"
                    value="Other"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="p-3 rounded-lg border border-gray-300 w-full"
                name="year"
                required
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select
                className="p-3 rounded-lg border border-gray-300 w-full"
                name="hostel"
                required
                onChange={handleChange}
              >
                <option value="">Select Hostel</option>
                <option value="SVBH">SVBH</option>
                <option value="Tandon">Tandon</option>
                <option value="Patel">Patel</option>
                <option value="Malviya">Malviya</option>
                <option value="Tilak">Tilak</option>
                <option value="Raman">Raman</option>
                <option value="PGHostel">PG Hostel</option>
                <option value="KNGH">KNGH</option>
                <option value="DJ">DJ</option>
                <option value="Sarojini Naidu">Sarojini Naidu</option>
              </select>
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Phone Number"
                name="phonenumber"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Registration Number"
                name="registrationnumber"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Course"
                name="course"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="p-3 rounded-lg border border-gray-300 w-full"
                placeholder="Admin Key"
                name="admin"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>

            <div className="flex justify-center items-center mt-4">
              <span>
                Already registered?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </span>
            </div>
          </motion.div>
        </section>
      </form>
      <ToastContainer />
    </>
  );
}

export default Register;
