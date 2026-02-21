import React from 'react'
import { useState } from 'react'
import axios from 'axios';

  
const Login = () => {
  const [emailId, setEmail] = useState("MSD077@gmail.com"); 
  const [password, setPassword] = useState("Mahendrah@dhoni2004");

  const handleLogin = () => {
  
    try{

    const res = axios.post("http://localhost:7777/login",{
      emailId,
      password,
    });}
    catch(err){
    console.error(err);
   }
  }
  return (
    <div className="flex justify-center my-10">
    <div className="card card-border bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Login Page</h2>
        <div>
          <fieldset className="fieldset">
          <legend className="fieldset-legend justify-center">EmailId</legend>
          <input type="email" className="input" placeholder="Enter your email" value={emailId} onChange={(e) => setEmail(e.target.value)} />

        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

        </fieldset>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary " onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login