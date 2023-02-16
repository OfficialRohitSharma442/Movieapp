import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handlechange =(e)=>{
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="login-page">
       
  <div className="form">
  <h3>Sign in your account</h3>
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button onClick={(e)=>{
         handlechange(e);
      }}>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    
  )
}

export default Login;