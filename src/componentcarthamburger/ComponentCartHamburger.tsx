import React from "react";
import "./ComponentCartHamburger.css"
import imgduplicate from "../assets/duplicate.jpg";
function ComponentCartHamburger() {
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  const buttons = document.querySelectorAll(".btnn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });
    return (

      <div id="hamburger">
        <div className="container" id="compnentpizza">
          <div className="row" id="pizza">

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
                <button className="btn btnn">Order</button>
  
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
      </div>
    );
  }
  
  export default ComponentCartHamburger;