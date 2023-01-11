import React from "react";
import img from "../assets/placeimg_500_300_arch7.jpg";
import "./Componentslider.css";


// interface Props {
//   name: string;
// }

class Componentslider extends React.Component {
  render() {
    return (
  <div className="container containerslider">
      <div className="row">
      <div className="cardslider">
        <img src="https://dr.savee-cdn.com/things/6/2/c0bf338a4b9118428e917e.webp" />
        <div className="card__head">Plotting Cat</div>
      </div>
      <div className="cardslider">
        <img src="https://dr.savee-cdn.com/things/6/3/b71643da39312c490b2725.webp" />
        <div className="card__head">Angry Cat</div>
      </div>
      <div className="cardslider">
        <img src="https://dr.savee-cdn.com/things/5/f/a556e2777dd819a086d82f.webp" />
        <div className="card__head">Curious Cat</div>
      </div>
      <div className="cardslider">
        <img src="https://dr.savee-cdn.com/things/5/e/333f327ad6be32328b9eac.webp" />
        <div className="card__head">Prowling Cat</div>
      </div>
      <div className="cardslider">
        <img src="https://dr.savee-cdn.com/things/6/3/bea17d432d73ce59a02426.webp" />
        <div className="card__head">Sleepy Cat</div>
      </div>
    </div>
  </div>

    );
  }
}

export default Componentslider;

