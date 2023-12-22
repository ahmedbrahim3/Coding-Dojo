import React, { useState } from 'react'

const Form = ({color,set}) => {
    const [data,setData] =useState("")
    

    const add =(e)=>{
        e.preventDefault();
        set(([...color, data]))
        setData("")
        
    }
    
  return (
    <div>
    <form onSubmit={add}>
    

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Add color</label>
    <input type='text' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setData(e.target.value)}} value={data}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form
