import React from 'react';

function Register() {
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample pic" className="img-fluid"
                      styles="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          {/* <!-- <div className="form-outline">
                            <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m1">Mother's name</label>
                          </div> -->
                          <!-- <div className="form-outline">
                            <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m1">Mother's name</label>
                          </div> -->
                        </div>
                        <div className="col-md-6 mb-4">
                          <!-- <div className="form-outline">
                            <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1n1">Father's name</label>
                          </div> --> */}
                        </div>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example8">Email Id</label>
                      </div>
      
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
      
                        <h6 className="mb-0 me-4">Gender: </h6>
      
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label className="form-check-label" for="femaleGender">Female</label>
                        </div>
      
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" for="maleGender">Male</label>
                        </div>
      
                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" for="otherGender">Other</label>
                        </div>
      
                      </div>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
      
                          <select className="select">
                            <option value="1">Year</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                            <option value="5">4</option>
                          </select>
      
                        </div>
                        <div className="col-md-6 mb-4">
      
                          <select className="select">
                            <option value="1">Hostel</option>
                            <option value="2">SVBH</option>
                            <option value="3">Tandon</option>
                            <option value="4">Patel</option>
                            <option value="5">Malviya</option>
                            <option value="6">Tilak</option>
                            <option value="7">Raman</option>
                            <option value="8">PG Hostel</option>
                            <option value="9">KNGH</option>
                            <option value="10">DJ</option>
                            <option value="11">Sarojini Naidu</option>
                          </select>
      
                        </div>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example9">DOB</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example90" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example90">Registration Number</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example99">Course</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example97">Problem Synopsis</label>
                      </div>
      
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">Reset all</button>
                        <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register;
