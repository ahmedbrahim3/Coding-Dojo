import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [products,setProducts]=useState([])
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState(0)
    const [discription,setDiscription]=useState("")
    const [errors, setErrors] = useState([]); 
    const get=()=>{
        axios.get("http://localhost:8000/api/products")
        .then((results)=>{
        //   console.log(data);
        setProducts(results.data)
        // console.log("ggggggg",products);
        })
        .catch((err)=>{
          console.log(err);
            })            
    }
    const add=(e)=>{
      e.preventDefault()
      const data={
        title,
        price,
        discription,
      }
      axios.post("http://localhost:8000/api/create",data)
      .then((result)=>{
          console.log(result)
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
    
    
    useEffect(()=>{
        get()
        
    
    },[products])
  return (
    <div>
    <h5>Product Manager </h5>
    <div className="container mt-5">
      <form onSubmit={add}>
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
    <h1>All Products</h1>
    {products.map((element)=>{
     return(
        <div>
        <Link to={`/one/${element._id}`}>
        <h2>{element.title}</h2>
      
        </Link>
        </div>

     )
    })}
    </div>
  )
}

export default Home
