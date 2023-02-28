import React from 'react';
import ProjectsPage from './projects/ProjectsPage';
import ProjectsCart from './projectscart/Projectscart';
import TextCircle from './TextCircle/TextCircle';
import CompnentContact from './componentcontact/ComponentContact';
import ComponentCartHamburger from './componentcarthamburger/ComponentCartHamburger';
import Testcompenent from './test/Testcompenent';
import Componentslider from './componentslider/Componentslider';
import ComponentForm from './componentform/ComponentForm';
import beispiel1 from "./assets/beispiel.jpg";
import beispiel2 from "./assets/beispiel2.jpg";
import beispiel3 from "./assets/beispiel3.jpg";
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';


function App() {
  return (
    
    <div className="App">
      {/* <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Router> */}

      <ProjectsPage />
      <Componentslider />
      
      <ProjectsCart />
      <ComponentCartHamburger />
      <TextCircle />
      <CompnentContact />
      <Testcompenent />
      <ComponentForm/>

      <div className='container'>
        <div className='row'>
          <div id='beispiel_div'>
            <img src={beispiel1} alt="" id='beispiel'/>
          </div>

          <div id='beispiel2_div'>
              <img src={beispiel2} alt="" id='beispiel2'/>
          </div>

          <div id='beispiel3_div'>
              <img src={beispiel3} alt="" id='beispiel3'/>
          </div>


          <div id='career3'>
            <h1>Career #3</h1>
            </div>

            <div id='txt'>
              <p>
              Bei uns bekommt Ihr spannende Projekte und echte Verantwortung. Von Anfang an. Einen Arbeitsplatz samt flexiblen Vertrauensarbeitszeiten in der Stuttgarter City mit Dachterrasse und Kolleg:innen ohne Chichi-Getue – oder unsichtbaren Kolleg:innen aus dem Homeoffice oder mit Notebook auf dem Schoß aus der Hängematte in Asien.
              <br></br>
              <br></br>

              Denn wir fördern digitales Nomadentum: Mit Zuschüssen zu Reisekosten und Co-Workingspaces auf der ganzenWelt. Für uns zählt das Ergebnis, nicht die Stempelkarte.
              </p>
            </div>
      </div>
    </div>
  </div>
  );
}

export default App;
