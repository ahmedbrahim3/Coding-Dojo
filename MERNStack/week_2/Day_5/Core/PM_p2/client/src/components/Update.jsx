import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";

const Update = () => {
  const [title,setTitle]=useState("")
    const [price,setPrice]=useState(0)
    const [discription,setDiscription]=useState("")
    const [errors, setErrors] = useState([]); 
    const nav = useNavigate()


    const { id } = useParams();
    
    const getOne=()=>{
      axios.get(`http://localhost:8000/api/one/${id}`)
      .then((result)=>{
        setTitle(result.data.title)
        setPrice(result.data.price)
        setDiscription(result.data.discription)
      })
      .catch((err)=>console.log(err))
      
  }
  useEffect(()=>{
    getOne()
  },[])

    const upp=(e)=>{
      e.preventDefault()
      const data={
        title,
        price,
        discription,
      }
      axios.patch(`http://localhost:8000/api/up/${id}`,data)
      .then((result)=>{
          console.log(result)
          nav("/")
      })
      .catch((err)=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
      })
   
    }


  return (
    <div>
    <form onSubmit={upp}>
    {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
      
    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        required
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="price" className="form-label">
        Price
      </label>
      <input
        type="text"
        className="form-control"
        id="price"
        name="price"
        required
        onChange={(e)=>setPrice(e.target.value)}
        value={price}

      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        name="description"
        required
        onChange={(e)=>setDiscription(e.target.value)}
        value={discription}

      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
    </div>
  )
}

export default Update
