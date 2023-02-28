import React from "react";
import { useState, useEffect } from 'react';
import logo from "../assets/logo.jpg";
import logofood from "../assets/food.png";
import logomenu from "../assets/menu.png";
import "./ProjectsPage.css";
import {MOCK_PROJECTS} from './MockProjects';
import { Project } from "./Project";
import careerimg1 from "../assets/placeimg_500_300_arch3.jpg";
function MyOtherComponent() {
  return (
    <div className="careeer">
      This is the component that will be displayed when the button is clicked!
      <img src={careerimg1}></img>
    </div>
  );
}





function ProjectsPage() {
      const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

const [showOverlay, setShowOverlay] = useState(false);

const handleClick = () => {
  setShowComponent(true);
};

const [showComponent, setShowComponent] = useState(false);

    return (
        
        // <div className="container" id="controller">
        //     <div className="row">
        //         <div className="col-12">
        //         <img src={logo} alt="" id="logo" />
        //         <ul>
                // <li>
                //     <a href="#pizza">PIZZA#1</a>
                // </li>
                // <li>
                //     <a href="#hamburger">HAMBURGER#2</a>
                // </li>
                // <li>
                //     <a href="#componentcontact">CAREER#3</a>
                // </li>      
                // <li>
                //     <a href="#componentcontact">FEATURES#4</a>
                // </li> 
                // <li>
                //     <a href="#componentcontact">ABOUT#5</a>
                // </li>
                // <li>
                //     <a href="#componentcontact">CONTACT#6</a>
                // </li>
        //     </ul>
        //         </div>
        //     {/* <> 
        //     <pre>
        //         {JSON.stringify(MOCK_PROJECTS, null, ' ')}
        //         </pre>
        //     </>*/}
        //     </div>
        // </div>
<nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
  <img src={logofood} alt="" id="logo" />
    
    <div className={`App ${theme}`} id="mode">
      <button onClick={toggleTheme}>Mode Theme</button>
    </div>
    <a href="#componentcontact" className='bx bxcontact'>contact</a>
    <div>

      <button className="openBtn" onClick={() => setShowOverlay(true)}>
      <img src={logomenu} alt="" id="logo" />
      </button>

      {
      showOverlay && (
        <div className="overlay">
          <span className="closebtn" onClick={() => setShowOverlay(false)} title="Close Overlay">×</span>
          
          <div className="overlay-content">
          <ul className="nav navbar-nav" id="navv">
    <li>
            <a href="#pizza">PIZZA#1</a>
        </li>
        <li>
            <a href="#hamburger">HAMBURGER#2</a>
        </li>
        <li>
            <div>
      <button onClick={handleClick}>CAREER</button>
      {showComponent && <MyOtherComponent />}
    </div>
        </li>      
        <li>
            <a href="#componentcontact">FEATURES#4</a>
        </li> 
        <li>
            <a href="#componentcontact">ABOUT#5</a>
        </li>
        <li>
            <a href="#componentcontact">CONTACT#6</a>
        </li>
    </ul>
          </div>
        </div>
      )}
    </div>
  </div>
</nav>
    );
}

export default ProjectsPage;