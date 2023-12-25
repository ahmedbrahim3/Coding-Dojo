import React, { useState } from 'react'

const Add = ({posts,set}) => {
    // const [data,setData] =useState("")
    const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

    const add =(e)=>{
        e.preventDefault();
        if (! title && !body) {
            return
            
        }
        const newP={
            title,
            body,
        }
        set([...posts,newP])
        setBody("")
        setTitle("")
        
    }
    
    
    
  return (
    <div>
    <form onSubmit={add}>
    

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Add Todo</label>
    <input type='text' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
  </div>
  <div class="">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setBody(e.target.value)}} value={body}></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Add
