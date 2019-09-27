import React from 'react';
import logo from './logo.svg';
import pic from './images/abhinav2.jpg'
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Abhinav Tumu
        </p>
        <img src={pic} className="App-logo" alt="logo" />

        <div className="links">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/abhinav-tumu-863635170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn 
        </a>
        <p>

        </p>
          <a
            className="App-link"
            href="https://github.com/Nauxie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
        </a>
        <p>
          Work in progress! Check back later :)
        </p>

        </div>

      </header>
    </div>
  );
}

export default App;
