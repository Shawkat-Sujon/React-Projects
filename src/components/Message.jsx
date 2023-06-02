import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13216087/pexels-photo-13216087.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/13216087/pexels-photo-13216087.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
      </div>
    </div>
  )
}
