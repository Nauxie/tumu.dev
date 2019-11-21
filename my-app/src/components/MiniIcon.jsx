import React from 'react'

function MiniIcon(props) {
  return (
    <a href={props.link} className='link' title={props.title}>
      <img className='smallpic' src={props.imgsrc} alt={props.title} />
    </a>
  )
}
export default MiniIcon
