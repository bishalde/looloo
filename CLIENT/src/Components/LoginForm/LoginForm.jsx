import React,{useState} from 'react'
import './LoginForm.css'
import { Link , useNavigate  } from 'react-router-dom'
import Flip from 'react-reveal/Flip';


function LoginForm() {
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
  
    const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      navigate("/")

    }
  
  
  
    return (
    <Flip left>
      <section className="loginframe">
          <div className="loginbox">
              <form onSubmit={handleSubmit} method="post">
              <h1>Login</h1>
                  <label htmlFor="username">Username</label>
                  <input type="text" id='username' placeholder='Enter Username' name='username' minLength='4' value={userName}  onChange={(e)=>setUserName(e.target.value)} />
                  <label htmlFor="password">Password</label>
                  <input type="password" id='password' placeholder='Enter Password' name='password' minLength='6' value={Password}  onChange={(e)=>setPassword(e.target.value)}  />
                  <div className="login-btns">
                      <button className='btn-sec' type="submit">Login</button>
                      <Link to="/signup">
                      <button type='button'>Register</button>
                      </Link>
                  </div>
              </form>
          </div>
      </section>
      </Flip>
    )
  }
  
  export default LoginForm