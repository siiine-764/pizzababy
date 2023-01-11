import React from 'react';
import ProjectsPage from './projects/ProjectsPage';
import ProjectsCart from './projectscart/Projectscart';
import TextCircle from './TextCircle/TextCircle';
import CompnentContact from './componentcontact/ComponentContact';
import ComponentCartHamburger from './componentcarthamburger/ComponentCartHamburger';
import Testcompenent from './test/Testcompenent';
import Componentslider from './componentslider/Componentslider';
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
    </div>
  );
}

export default App;
