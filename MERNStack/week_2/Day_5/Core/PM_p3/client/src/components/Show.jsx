import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom";

const Show = () => {    
    const { id } = useParams();
 
    const [one,setOne]=useState(null)
    const [ref,setRef]=useState(false)

    const nav = useNavigate()

const upp=()=>{
nav(`/update/${id}`)
}


const getOne=()=>{
    axios.get(`http://localhost:8000/api/one/${id}`)
    .then((result)=>setOne(result.data))
    .catch((err)=>console.log(err))
    
}


const del=()=>{
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((result)=>{
        console.log(result.data)
        setRef(true)
        nav("/")
    })
    .catch((err)=>console.log(err))
    
}



    useEffect(()=>{
     getOne()
    },[!ref])



  return (
    <div>
      
      {one && (
        <div>
        <h2 style={{marginTop:"110px"}}>{one.title}</h2>
        <h4>{one.price}</h4>
        <h4>{one.discription}</h4>
        </div>
      )}
      <button type="button" class="btn btn-info" onClick={()=>{upp()}}>Update</button>
      <button type="button" class="btn btn-danger" onClick={()=>{del()}}>Delete</button>
    </div>
  )
}

export default Show
