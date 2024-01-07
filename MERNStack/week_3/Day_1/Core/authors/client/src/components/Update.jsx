import React from 'react'
import {Card,CardContent,Typography,TextField,Button,Grid,Container,} from '@mui/material';
import { Link } from "react-router-dom";

import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Update = () => {
  const [name,setName]=useState()
  const [errors,setErrors]=useState({})
  const {id}=useParams()
  const nav = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      name,

    }
    axios.patch(`http://localhost:8000/api/up/${id}`,data)
    .then((result)=>{
        console.log(result)
        nav("/")
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.errors) {
        
        setErrors(err.response.data.errors);
      } else {
        console.error('Unexpected error:', err);
      }
    });


  }



  const handleCancel = () => {
    // Add your cancel logic here
  };



  return (  
    <div>
    <Container maxWidth="sm">
    <Link to={"/"}>
    <p>Home</p>
    </Link>
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Update
          </Typography>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            onChange={(e)=>setName(e.target.value)}
          />
        </CardContent>
        <Grid container justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: '8px' }}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            style={{ margin: '8px' }}
          >
            Cancel
          </Button>
        </Grid>
      </Card>
    </form>
  </Container>
    </div>
  )
}

export default Update
