import React from 'react';
import logo from './logo.svg';
import pic from './images/abhinav3.png'
import './App.css';
import Typing from 'react-typing-animation';

const name = "{Abhinav Tumu}"

function App() {
  return (
    <div className="Background">
      <Typing speed={100}>
        <h1>{name}</h1>

      </Typing>
      <img className="profpic" src={pic} alt="logo" />


      <p className="text1">
        Work in progress! Check back later :)
      </p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/abhinav-tumu-863635170/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Nauxie"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Github
        </a>
        <a
          href="https://devpost.com/Nauxie?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Devpost
        </a>

      </div>

    </div>
  );
}

export default App;
