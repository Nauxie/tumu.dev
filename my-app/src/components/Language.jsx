import React from 'react'

function Language(props) {
  return (
    <a
      href={props.link}
      title={props.title}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='icon2' src={props.imgsrc} alt={props.title} />
    </a>
  )
}
export default Language
