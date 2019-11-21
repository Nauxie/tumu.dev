import React from 'react'

function Framework(props) {
  return (
    <a
      href={props.link}
      title={props.title}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='icon' src={props.imgsrc} alt={props.title} />
    </a>
  )
}
export default Framework
