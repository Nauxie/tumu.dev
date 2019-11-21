import React from 'react'

function Language(props) {
  return (
    <img
      title={props.title}
      className='icon2'
      src={props.imgsrc}
      alt={props.title}
    />
  )
}
export default Language
