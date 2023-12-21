import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


console.log(firstName);


  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>firstName :{firstName}</p>
            <p>lastName : {lastName}</p>
            <p>email :{email}</p>
            <p>password :{password}</p>
          </div>
          </div>
        
      </div>
      
    </div>
  );
}

export default App;
