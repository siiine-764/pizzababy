import { useEffect } from 'react';
import React, { useState } from 'react';
import "./ComponentForm.css";
import pizzasimple from "../assets/pngegg1.png";
import mortadela from "../assets/pngegg2.png";
import mozzarella_cheese from "../assets/mozzarella_cheese.png";

function ComponentForm() {
      const [name, setName] = useState('full name');
      const [email, setEmail] = useState('email');
      const [password, setPassword] = useState('password');

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
      };
      const [showImage, setShowImage] = useState(false);
      const [showImage1, setShowImage1] = useState(false);

      function handleCheckboxChange() {
        setShowImage(!showImage);
      }

      function handleCheckboxChange1() {
        setShowImage1(!showImage1);
      }

      return (
        <form onSubmit={handleSubmit}>
          <div id='bar_images'>
            <img src={pizzasimple} alt="pizzasimple" id='pizzasimple'></img>
            {showImage && <img src={mortadela}  id='pizzasimple1'  alt="Image" />}

            {showImage1 && <img src={mozzarella_cheese}  id='pizzasimple2'  alt="Image" />}
           </div>
           <label>
        <input type="checkbox" checked={showImage1}onChange={handleCheckboxChange1} />
        Show Image
      </label>

          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>

          <label>
        <input type="checkbox" checked={showImage}onChange={handleCheckboxChange} />
        Show Image
      </label>
          <button type="submit">Submit</button>
        </form>
      );
  }
  
  class ChildComponent extends React.Component {
    render() {
      return (
        <div>
            {/* <video src="../assets/videos/video.mp4" width="750" height="500" controls>
            </video> */}
          <h2>Child Component</h2>
          <h1>Child Component</h1>
          <p>This is the child component.</p>
        </div>
      );
    }
  }

export default ComponentForm;