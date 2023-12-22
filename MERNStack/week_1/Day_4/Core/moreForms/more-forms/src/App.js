import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirm,setConfirm]=useState("")
  const [ferror,setFerror]=useState("")
  const [lerror,setLerror]=useState("")
  const [eerror,setEerror]=useState("")
  const [pasEror,setPasEror]=useState("")
  const [pasConfirm,setPasConfirm]=useState("")
  



console.log(firstName);
const validation=(e)=>{
  e.preventDefault()
  console.log(firstName.length,"ddddddddddddddddd");
  if(firstName.length<2){
    setFerror(" firstName Must be at least 2 characters")
  }else{
    setFerror("")
  }
  if(lastName.length<2){
    setLerror("lastName Must be at least 2 characters")
  } else{setLerror("")
    
  }
  if(email.length<2){
    setEerror("email lastName Must be at least 2 characters")
  }else{setEerror("")
    
  }
  if(password.length<2){
    setPasEror("password lastName Must be at least 2 characters")
  }else{setPasEror("")
    
  }
  if(password!==confirm){
    setPasConfirm("password dont much")
  }else{setPasConfirm("")

  }
}
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={validation}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
                <p>{ferror}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
                <p>{lerror}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <p>{eerror}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                <p>{pasEror}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Confirm</label>
                <input type="password" className="form-control" id="password" onChange={(e)=>{setConfirm(e.target.value)}} value={confirm}/>
                <p>{pasConfirm}</p>
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
