import React from 'react'

export const Input = () => {
  return (
    <div className='Input'>
      <input type="text" placeholder='Type your Message'/>
      <div className="send">
        <img src="https://w7.pngwing.com/pngs/147/42/png-transparent-computer-icons-paper-clip-email-attachment-others-miscellaneous-document-file-format-email-attachment.png" alt="" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
          <img src="https://icons.veryicon.com/png/o/business/office-icon-series/attach-file-1.png" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
