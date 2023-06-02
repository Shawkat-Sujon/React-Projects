import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Shawkat</span>
        <div className="chatIcons">
          <img src="https://cdn.onlinewebfonts.com/svg/img_324403.png" alt="" />
          <img src="https://www.clipartmax.com/png/middle/41-410452_add-friend-comments-add-friend-icon-free.png" alt="" />
          <img src="https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png" alt="" />
        </div>
        
      </div>
      <Messages />
      <Input />
    </div>
  )
}
