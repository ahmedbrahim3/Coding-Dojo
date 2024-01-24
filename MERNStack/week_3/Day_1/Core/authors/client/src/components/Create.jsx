import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    Container,
  } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Create = () => {
  
  const [name,setName]= useState("")
  const [errors, setErrors] = useState({}) 
const nav = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      name,

    }
    axios.post("http://localhost:8000/api/create",data)
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
    <Link to={"/"}>
    <p>Home</p>
    </Link>
    <Container maxWidth="sm">
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create
          </Typography>
          <TextField
            fullWidth
            label="name"
            variant="outlined"
            margin="normal"
            name="title"
            onChange={(e)=>setName(e.target.value)}
              ={!!errors.name} // Check if there is an error for the 'name' field
            helperText={errors.name && errors.name.message} // Display error message
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

export default Create
