import React, { useState } from 'react'
import pic from './images/abhinav3.png'
import './App.css'
import Typing from 'react-typing-animation'
import MiniIcon from './components/MiniIcon'
import Language from './components/Language'
import Framework from './components/Framework'
import data from './data'

function App() {
  const [miniIcons] = useState(data.miniIcons)
  const [languages] = useState(data.languages)
  const [frameworks] = useState(data.frameworks)

  const name = '{Abhinav Tumu}'

  const miniIconsList = miniIcons.map(linkData => (
    <MiniIcon
      link={linkData.link}
      title={linkData.title}
      imgsrc={linkData.imgsrc}
    />
  ))
  const languagesList = languages.map(linkData => (
    <Language title={linkData.title} imgsrc={linkData.imgsrc} />
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
      <Typing speed={100}>
        <h1>{name}</h1>
      </Typing>
      <img className='profpic' src={pic} alt='profilepicture' />

      <div className='links'>{miniIconsList}</div>
      <div>
        <div>
          <p className='titletype'>Languages</p>
          {languagesList}
        </div>
        <div>
          <p className='titletype'>Frameworks and Libraries</p>
          {frameworksList}
        </div>
      </div>
      <div className='bottomtext'>Powered by React and Github Pages</div>
    </div>
  )
}

export default App
