import React from "react";
import { useState, useEffect } from 'react';
import "./ComponentCartHamburger.css";
import imgduplicate from "../assets/duplicate.jpg";
import ComponentForm from "../componentform/ComponentForm";

function ComponentCartHamburger() {
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  const buttons = document.querySelectorAll(".btnn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });

  const [showOverlay, setShowOverlay] = useState(false);

    return (

      <div id="hamburger">
        <div className="container" id="compnentpizza ">
          <div className="row" id="hamburger">

          <h1 className="titre">HAMBURGER#2</h1>
            <main className="page-content">
              <div>
                <div className="cardhamburger">
                  <div className="content">
                    <h2 className="title">
                      PIZZA <br />
                      MARGARETA</h2>
                    <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                  </div>
                </div>

                <button className="btn btnn" onClick={() => setShowOverlay(true)}>Order</button>
              </div>
              <div>
                <div className="cardhamburger">
                  <div className="content">
                    <h2 className="title">
                      PIZZA <br />
                      MARGARETA
                    </h2>
                    <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                 </div>
                </div>
                <button className="btn btnn">Order</button>
              </div>
              <div>  
                <div className="cardhamburger">
                <div className="content">
                  <h2 className="title">
                    PIZZA <br />
                    MARGARETA
                  </h2>
                  <p className="copy">It's the desert you've always dreamed of</p>
                </div>
              </div>
              <button className="btn">Book</button>
  
              </div>
              <div>   
                <div className="cardhamburger">
                <div className="content">
                  <h2 className="title">
                    PIZZA <br />
                    MARGARETA
                  </h2>
                  <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                </div>
              </div>
              <button className="btn btnn" id="button">Order</button>
                </div>
            </main>
          </div>
        </div>
        {
      showOverlay && (
        <div className="overlay1">
          <span className="closebtn1" onClick={() => setShowOverlay(false)} title="Close Overlay">×</span>
          <div className="overlay-content1">
            <ComponentForm/>
          </div>
        </div>
      )}
      </div>
    );
  }
  
  export default ComponentCartHamburger;