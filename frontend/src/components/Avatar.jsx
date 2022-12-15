import React from 'react'

function Avatar({name ,lastname}) {
 let firstChar = name.charAt(0).toUpperCase() 
 let secondChar = lastname.charAt(0).toUpperCase() 
  return (
    <div data-testid="avatar" className='avatar'>{firstChar}{secondChar}</div>
  )
}

export default Avatar