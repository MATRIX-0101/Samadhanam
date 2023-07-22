import React from 'react'
import './style.css'
export default function NavBar() {
  return (
    <div className="mainDiv">
        {/* <!-- upper nav bar  --> */}
        <nav className="navbar" >
    {/* 1st logo part  */}
    <div className="logo" >
          <h4 >
            <span className="logospan"><b>S</b></span>amadhanam
          </h4>
      </div>
    <div className="navbar-top" style={{
      height: '4rem', 
      display: 'flex', 
      justifyContent: 'space-around',
      gridColumn: '4/5', 
      alignItems: 'center'
    }}>
      
      <a className="Anchor" href="login" ><b>Login</b></a>
      <a className="Anchor" href="register" ><b>Register</b></a> 
    
    </div>
  </nav>
  </div>

  )
}
