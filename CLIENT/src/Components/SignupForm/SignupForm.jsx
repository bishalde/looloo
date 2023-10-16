import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'

import Flip from 'react-reveal/Flip';


import './SignupForm.css'

function SignupForm() {
    const [userName, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
  
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();    
    }

    

  return (
    <Flip right>
    <section className="signupframe">
        <div className="loginbox">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username' name='username' minLength={4} value={userName}  onChange={(e)=>{setUsername(e.target.value)}}/>
                               
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter Email' name='email' value={Email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                
                      
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password' minLength={6}   name='password' value={Password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="login-btns">
                    <button className='btn-sec' type='submit' >Register</button>
                    <Link to="/login">
                    <button type='button'>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    </section>
    </Flip>
  )
}

export default SignupForm