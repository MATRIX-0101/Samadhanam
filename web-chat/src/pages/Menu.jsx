import React, { useState } from 'react';
import prob from './Menu_Data.json';
import NavBar from './NavBar';

import './styleMenu.css';

function Menu() {
  // const [coloumn, setColoumn] = useState([])

  const [show,setShow] = useState(false);
  




  return (
    <div>
      <NavBar/>
   <div className="outer">
    {prob.problems.map((problems) => {
      return (
        <div className="menu">
            <nav key={problems.id} className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          
          <div className="collapse navbar-collapse" id={problems.id}>
          <a className="navbar-brand" >{problems.name}</a>
          
          {/* <div className="collapse navbar-collapse" key={problems.id} id="navbarNavDropdown1"> */}
            
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                 
                
                <ul className="dropdown-menu">
                    { problems.solutions.map((solutions) => {
                      return (
                        <li><a className="dropdown-item" key={solutions.no}href={solutions.link}>{solutions.source}</a></li>
                      )
                    })}
                </ul>
              
          </div>
        </div>
      </nav>
      </div>
          )
    })}
</div>
  </div>
  )
}

export default Menu;