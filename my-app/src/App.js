import React, { useState } from 'react'
import pic from './images/abhinav3.png'
import './App.css'
import Typing from 'react-typing-animation'
import MiniIcon from './components/MiniIcon'
import Language from './components/Language'
import Framework from './components/Framework'
import dataa from './data'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

function App() {
  const [miniIcons] = useState(dataa.miniIcons)
  const [languages] = useState(dataa.languages)
  const [frameworks] = useState(dataa.frameworks)

  const name = 'Abhinav Tumu'

  const miniIconsList = miniIcons.map(linkData => (
    <MiniIcon
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
    />
  ))
  const languagesList = languages.map(linkData => (
    <Language
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
    />
  ))

  const frameworksList = frameworks.map(linkData => (
    <Framework
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
    />
  ))
  return (
    <div className='Background'>
      <p class='headers'>{name}</p>
      <Fade>
        <img className='profpic' src={pic} alt='profilepicture' />
      </Fade>
      <Fade>
        <div className='links'>{miniIconsList}</div>
        <Typing>
          <div className='bioDiv'>
            <span className='bio'>Hi! </span>
            <Typing.Delay ms={500} />
            <span className='bio'>
              I'm a computer science student at UC Irvine.
            </span>
          </div>
        </Typing>
      </Fade>

      <Fade bottom>
        <div>
          <p className='titletype'>Languages</p>
          {languagesList}
        </div>
        <div>
          <p className='titletype'>Frameworks and Libraries</p>
          {frameworksList}
        </div>
      </Fade>

      <div className='bottomtext'>Powered by React and Github Pages</div>
    </div>
  )
}

export default App
