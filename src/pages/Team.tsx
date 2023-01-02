import React from 'react'
import styled from 'styled-components'

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 100vh;
`

const Team: React.FunctionComponent = () => {
    return (
        <TeamText>
      <div className="container" id="compnentpizza">
        <div className="row" id="pizza">
        <h1 className="titre">PIZZA#1</h1>
          <main className="page-content">
            <div>
              <div className="card">
                <div className="content">
                  <h2 className="title">
                    PIZZA <br />
                    MARGARETA</h2>
                  <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                </div>
              </div>
              <button className="btn">Order</button>

            </div>
            <div>
              <div className="card">
                <div className="content">
                  <h2 className="title">
                    PIZZA <br />
                    MARGARETA
                  </h2>
                  <p className="copy">Plan your next beach trip with these fabulous destinations</p>
               </div>
              </div>
              <button className="btn">Order</button>
            </div>
            <div>  
              <div className="card">
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
              <div className="card">
              <div className="content">
                <h2 className="title">
                  PIZZA <br />
                  MARGARETA
                </h2>
                <p className="copy">Seriously, straight up, just blast off into outer space today</p>
              </div>
            </div>
            <button className="btn">Order</button>
              </div>
          </main>
        </div>
      </div>
        </TeamText>
    )
}

export default Team