import React, { useState } from 'react';
import prob from './Menu_Data.json';

function Menu() {
  // const [coloumn, setColoumn] = useState([])
  return (
    <div>
        {/* <!-- upper nav bar  --> */}
        <nav className="navbar" style={{width: '100%',
  height: '10rem',
  display: 'grid',
  gridTemplateColumns: '10rem 2fr 3fr 10rem',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25);',
  backgroundColor:'#1ABC9C'}}>
    {/* 1st logo part  */}
    <div className="logo" style={{
      display: 'grid',
      //backgroundColor: '#3b5998',
      gridColumn:'2/3',
      justifyContent: 'start',
      alignItems: 'center'
    }}>
          <h2 style={{ background: 'linear-gradient(45deg, #FFC107, #FF5722)',
    color: '#FFF',
    padding: '2px 4px',
    borderRadius: '4px',
    fontWeight: 'bold',
    color: 'white',
  textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue' }}>
            <span>S</span>amadhanam
          </h2>
      </div>
    <div className="navbar-top" style={{
      height: '10rem', 
      display: 'flex', 
      justifyContent: 'space-around',
      gridColumn: '3/4', 
      alignItems: 'center'
    }}>
      <a className="nav-item nav-link active" href="/">Home</a>
      <a className="nav-item nav-link active" href="/">Features</a>
      <a className="nav-item nav-link active" href="login" style={{border: '2px solid black', padding: '10px'}}>Login</a>
      <a className="nav-item nav-link active" href="register" style={{border: '2px solid black', padding: '10px'}}>Register</a>
    </div>
  </nav>
{/* <!-- upper nav bar end  --> */}

    {prob.problems.map((problems) => {
      return (
            <nav key={problems.id} className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{problems.name}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown1" aria-controls="navbarNavDropdown1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id={problems.id}>
          {/* <div className="collapse navbar-collapse" key={problems.id} id="navbarNavDropdown1"> */}
            <ul className="navbar-nav">
          
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <ul className="dropdown-menu">
                    {problems.solutions.map((solutions) => {
                      return (
                        <li><a className="dropdown-item" key={solutions.no}href={solutions.link}>{solutions.source}</a></li>
                      )
                    })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          )
    })}

  </div>
  )
}

export default Menu;