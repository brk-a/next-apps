import React from 'react'

const Button = ({btnClass, text, onClick}: Button) => {
  return (
    <>
        <button className={`btn ${btnClass}`} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button