import React from 'react'
import './style.css'
import NavBar from './NavBar';
function Menu() {
  
    
  function toggleMenu() {
    console.log("toggled");
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }

  

  
  return (
    <>
    <NavBar/>

    
 

  
 
  
{/* <!-- upper nav bar end  --> */}
  {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Anger</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown1" aria-controls="navbarNavDropdown1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown1">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/56/">Chapter 2 - Text 56</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/62/">Chapter 2 - Text 62</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/63/">Chapter 2 - Text 63</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/26/">Chapter 5 - Text 26</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/1-3/">Chapter 16 - Text 1-3</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/21/">Chapter 16 - Text 21</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Greed</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown2">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/14/17/">Chapter 14 - Text 17</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/21/">Chapter 16 - Text 21</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/17/25/">Chapter 17 - Text 25</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Confusion</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown3" aria-controls="navbarNavDropdown3" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown3">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/7/">Chapter 2 - Text 7</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/2/">Chapter 3 - Text 2</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/61/">Chapter 18 - Text 61</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Demotivated</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown4" aria-controls="navbarNavDropdown4" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown4">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/11/33/">Chapter 11 - Text 33</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/48/">Chapter 18 - Text 48</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/78/">Chapter 18 - Text 78</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Depression</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown5" aria-controls="navbarNavDropdown5" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown5">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/3/">Chapter 2 - Text 3</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/14/">Chapter 2 - Text 14</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/21/">Chapter 5 - Text 21</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Pride</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown6" aria-controls="navbarNavDropdown6" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown6">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/4/">Chapter 16 - Text 4</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/13-15/">Chapter 16 - Text 13-15</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/26/">Chapter 18 - Text 26</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/58/">Chapter 18 - Text 58</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Fear</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown7" aria-controls="navbarNavDropdown7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown7">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/4/10/">Chapter 4 - Text 10</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/11/50/">Chapter 11 - Text 50</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/30/">Chapter 18 - Text 30</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Uncontrolled Mind</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown8" aria-controls="navbarNavDropdown8" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown8">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/5/">Chapter 6 - Text 5</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/6/">chapter 6 - Text 6</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/26/">Chapter 6 - Text 26</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/35/">Chapter 6 - Text 35</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Loneliness</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown9" aria-controls="navbarNavDropdown9" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown9">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/30/">Chapter 6 - Text 30</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/9/29/">Chapter 9 - Text 29</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/13/16/">Chapter 13 - Text 16</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/13/18/">Chapter 13 - Text 18</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Laziness</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown10" aria-controls="navbarNavDropdown10" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown10">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/8/">Chapter 3 - Text 8</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/20/">Chapter 3 - Text 20</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/16/">Chapter 6 - Text 16</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/39/">Chapter 18 - Text 39</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Discriminated</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown11" aria-controls="navbarNavDropdown11" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown11">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/18/">Chapter 5 - Text 18</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/19/">Chapter 5 - Text 19</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/6/32/">Chapter 6 - Text 32</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/9/29/">Chapter 9 - Text 29</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Seeking Peace</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown12" aria-controls="navbarNavDropdown12" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown12">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/66/">Chapter 2 - Text 66</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/71/">Chapter 2 - Text 71</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/4/39/">Chapter 4 - Text 39</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/29/">Chapter 5 - Text 29</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/8/28/">Chapter 8 - Text 28</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Losing Hope</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown13" aria-controls="navbarNavDropdown13" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown13">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/4/11/">Chapter 4 - Text 11</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/9/22/">Chapter 9 - Text 22</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/9/14/">Chapter 9 - Text 14</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/66/">Chapter 18 - Text 66</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/78/">Chapter 18 - Text 78</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Forgetfulness</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown14" aria-controls="navbarNavDropdown14" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown14">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/15/15/">Chapter 15 - Text 15</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/61/">Chapter 18 - Text 61</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Forgiveness</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown15" aria-controls="navbarNavDropdown15" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown15">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/11/44/">Chapter 11 - Text 44</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/12/13-14/">Chapter 12 - Text 13-14</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/1-3/">Chapter 16 - Text 1-3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Envy</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown16" aria-controls="navbarNavDropdown16" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown16">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/12/13-14/">Chapter 12 - Text 13-14</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/19/">Chapter 16 - Text 19</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/21/">Chapter 18 - Text 21</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Death of Loved One</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown17" aria-controls="navbarNavDropdown17" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown17">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/13/">Chapter 2 - Text 13</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/30/">Chapter 2 - Text 30</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/22/">Chapter 2 - Text 22</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/25/">Chapter 2 - Text 25</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/27/">Chapter 2 - Text 27</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Lust</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown18" aria-controls="navbarNavDropdown18" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown18">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/37/">Chapter 3 - Text 37</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/41/">Chapter 3 - Text 41</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/3/43/">Chapter 3 - Text 43</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/22/">Chapter 5 - Text 22</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/16/21/">Chapter 16 - Text 21</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Temptation</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown19" aria-controls="navbarNavDropdown19" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown19">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/60/">Chapter 2 - Text 60</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/61/">Chapter 2 - Text 61</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/2/70/">Chapter 2 - Text 70</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/7/14/">Chapter 7 - Text 14</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Feeling Sinful</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown20" aria-controls="navbarNavDropdown20" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown20">
        <ul className="navbar-nav">
       
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/4/36/">Chapter 4 - Text 36</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/4/37/">Chapter 4 - Text 37</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/5/10/">Chapter 5 - Text 10</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/9/30/">Chapter 9 - Text 30</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/10/3/">Chapter 10 - Text 3</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/14/6/">Chapter 14 - Text 6</a></li>
              <li><a className="dropdown-item" href="https://vedabase.io/en/library/bg/18/66/">Chapter 18 - Text 66</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  
  </>
  )
}

export default Menu