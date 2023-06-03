import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';



export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(err){
      setErr(true)
    }
  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>React Chat App</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" style={{display:"none"}}/>
                <button>Sign Up</button>
                {err && <span>Something Went Wrong</span> }
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
