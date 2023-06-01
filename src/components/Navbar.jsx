import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">React Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/17045026/pexels-photo-17045026/free-photo-of-fashion-people-woman-relaxation.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <span>Shawkat</span>
            <button>Logout</button>
        </div>
    </div>
  )
}
