import React from 'react'
import logo from './logo.svg'
import pic from './images/abhinav3.png'
import './App.css';
import Typing from 'react-typing-animation'
import ract from './images/react.png'
import red from './images/redux.png'
import nod from './images/node.png'
import ker from './images/keras.jpg'
import tensor from './images/tensorflow.png'
import images from './images.js'

const name = "{Abhinav Tumu}"


function App() {
  return (
    <div className="Background">
      <Typing speed={100}>
        <h1>{name}</h1>

      </Typing>
      <img className="profpic" src={pic} alt="logo" />


      <div className="links">
        <a
          href="https://www.linkedin.com/in/abhinav-tumu-863635170/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          title="LinkedIn"
        >
          <img className="smallpic" src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='linkedin' />
        </a>

        <a
          href="https://github.com/Nauxie"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          title="Github"
        >
          <img className="smallpic" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github' />
        </a>
        <a
          href="https://devpost.com/Nauxie?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          title='Devpost'
        >
          <img className="smallpic" src='https://seeklogo.com/images/D/devpost-logo-95FF685C5D-seeklogo.com.png' alt='Devpost' />
        </a>
        
        <a
          href="https://drive.google.com/file/d/1VYiJAIV1bRPoLm8FTjmvuRKIvYH0sgWT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          title='Resume'
        >
          <img className="smallpic" src='https://www.pinclipart.com/picdir/middle/110-1103863_treaty-clipart-transparent-resume-icon-transparent-png-download.png' alt='Resume' />
        </a>

      </div>
      <div>
        <div>
          <p className='titletype'>Languages</p>
          <a href="https://reactjs.org/" title="Javascript">
            <img className="icon2" src='http://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png' alt="logo" />
          </a>
          <a href="https://reactjs.org/" title="Python">
            <img className="icon2" src='http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico' alt="logo" />
          </a>
          <a href="https://reactjs.org/" title="Java">
            <img className="icon2" src='https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png' alt="logo" />
          </a>
          <a href="https://reactjs.org/" title="HTML5">
            <img className="icon2" src='https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png' alt="logo" />
          </a>
          <a href="https://reactjs.org/" title="CSS">
            <img className="icon2" src='https://redpixel.com/_uploads/CSS3_Badge_512.png?w=640' alt="logo" />
          </a>

        </div>

        <div>
          <p className='titletype'>Frameworks and Libraries</p>
          <a href="https://reactjs.org/" title="React">
            <img className="icon" src={ract} alt="logo" />
          </a>
          <a href="https://redux.js.org/" title="Redux">
            <img className="icon" src={red} alt="logo" />
          </a>
          <a href="https://nodejs.org/en/" title="Nodejs">
            <img className="icon" src={nod} alt="logo" />
          </a>
          <a href="https://keras.io/" title="Keras">
            <img className="icon" src={ker} alt="logo" />
          </a>
          <a href="https://www.tensorflow.org/" title="Tensorflow">
            <img className="icon" src={tensor} alt="logo" />
          </a>
        </div>

      </div>

    </div>
  );
}

export default App;
