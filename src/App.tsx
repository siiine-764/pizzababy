import React from 'react';
import bild from './assets/bild.jpeg';
import ProjectsPage from './projects/ProjectsPage';
import ProjectsCart from './projectscart/Projectscart';
import TextCircle from './TextCircle/TextCircle';
import CompnentContact from './componentcontact/ComponentContact';
import Pagehome from './PageHome/pagehome';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectsPage />
      <header className="App-header">
        <img src={bild} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!!
        </a>
      </header>
      <ProjectsCart />
      <TextCircle />
      <CompnentContact />
      <Pagehome />
    </div>    
  );
}

export default App;
