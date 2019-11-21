import React from 'react'

function MiniIcon(props) {
  return (
    <a
      href={props.link}
      title={props.title}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='smallpic' src={props.imgsrc} alt={props.title} />
    </a>
  )
}
export default MiniIcon
