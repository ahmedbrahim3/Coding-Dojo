import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
const Home = () => {

  const [ref,setRef]=useState(false)
  const [authors,setAuthors]=useState([])
  
    // const authors = [
    //     { id: 1, name: 'Author 1' },
    //     { id: 2, name: 'Author 2' },
    //     { id: 3, name: 'Author 3' },
    //     // Add more authors as needed
    //   ];
      const get=()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((results)=>{
          console.log(results.data);
        setAuthors(results.data)
        // console.log("ggggggg",products);
        })
        .catch((err)=>{
          console.log(err);
            })            
    }
    

    const del=(id)=>{
      axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then((result)=>{
          console.log(result.data)
          setRef(!ref)
        
      })
      .catch((err)=>console.log(err))
      
  }
    useEffect(()=>{
      get()
      
  
  },[ref])

  return (
    <div>
    <Link to={"/create"}>
    <p>Add another</p>
    </Link>
    <TableContainer component={Paper}  style={{ width: '700px' , marginTop:"500px" , margin:"auto"}}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Author</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {authors.map((author) => (
          <TableRow key={author._id}>
            <TableCell>{author.name}</TableCell>
            <TableCell>
              {/* Add your action buttons here */}
              <Link to={`/update/${author._id}`}>
              <Button variant="outlined" color="primary" size="small">
                Edit
              </Button>
              </Link>
              <Button onClick={()=>{del(author._id)}} variant="outlined" color="secondary" size="small">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Home
