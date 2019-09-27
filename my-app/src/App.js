import React from 'react';
import logo from './logo.svg';
import pic from './images/abhinav3.png'
import './App.css';
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="Background">
      <Typing>
        <h2>Abhinav Tumu</h2>
      </Typing>
      <img className="profpic" src={pic} alt="logo" />

      <div className="links">
        <a
          href="https://www.linkedin.com/in/abhinav-tumu-863635170/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <p>
        </p>
        <a
          href="https://github.com/Nauxie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

      </div>
      <p>
        Work in progress! Check back later :)
        </p>
    </div>
  );
}

export default App;
