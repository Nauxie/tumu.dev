import React, { useState } from 'react';
import pic from './images/abhinav3.png';
import './App.css';
import Typing from 'react-typing-animation';
import MiniIcon from './components/MiniIcon';
import Language from './components/Language';
import Framework from './components/Framework';
import data from './data';

function App() {
  const [miniIcons] = useState(data.miniIcons);
  const [languages] = useState(data.languages);
  const [mobileTech] = useState(data.mobileTech);
  const [webTech] = useState(data.webTech);
  const [cloudTech] = useState(data.cloudTech);

  const miniIconsList = miniIcons.map((linkData) => (
    <MiniIcon
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
      key={linkData.title}
    />
  ));
  const languagesList = languages.map((linkData) => (
    <Language
      title={linkData.title}
      imgsrc={linkData.imgsrc}
      key={linkData.title}
    />
  ));

  const mobileTechList = mobileTech.map((linkData) => (
    <Framework
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
      key={linkData.title}
    />
  ));

  const cloudTechList = cloudTech.map((linkData) => (
    <Framework
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
      key={linkData.title}
    />
  ));

  const webTechList = webTech.map((linkData) => (
    <Framework
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
      key={linkData.title}
    />
  ));
  return (
    <div className='Background'>
      <div className='text1'>
        <h1>Abhinav Tumu</h1>
      </div>

      <img className='profpic' src={pic} alt='profilepicture' />

      <div>{miniIconsList}</div>
      <div>
        <div className='text1'>
          <p>
            {
              "Welcome! I'm a Computer Science student at UC Irvine.\n I'm also an aspiring iOS & web developer."
            }
          </p>

          <p></p>
        </div>
        <div>
          <p className='titletype'>Languages</p>
          {languagesList}
        </div>
        <div>
          <p className='titletype'>Mobile Technologies</p>
          {mobileTechList}
        </div>
        <div>
          <p className='titletype'>Web Technologies</p>
          {webTechList}
        </div>
        <div>
          <p className='titletype'>Cloud Technologies</p>
          {cloudTechList}
        </div>
      </div>
    </div>
  );
}

export default App;
