import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, Outlet } from "react-router-dom";
import React from 'react'; 
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactRoundedImage from "react-rounded-image";
import AppBar from '@mui/material/AppBar';
import BlackSliders from "./photos/blacksliders.png";


export default function App() {

  return (
    <React.Fragment >
      <CssBaseline />
        <Container fixed sx={{ width: '100%', height: '100%'}}>
            <Box id="box-1">      
              <AppBar position="sticky" 
                  style={{ 
                    height: '69px', 
                    backgroundColor: 'white', 
                    boxShadow: 'none',
                    marginBottom: '56px',
                  }}> 
                  <Toolbar 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'center', 
                      width: '100%', 
                      padding: '2%',
                      borderBottom: 1,
                      borderColor: '#e0ebeb'
                    }}>
                    <Link to="/" id="first-link">Home</Link>
                    <Link to="/job-experience" id="first-link">Work Experience</Link>
                    <Link to="/certificates" id="first-link">Certificates</Link>   
                    <Link to="/recipes" id="first-link">Recipes</Link>   
                    <Link to="/contact" href='#card-2' id="first-link">Contact</Link>
                  </Toolbar>
                </AppBar> 
             
              <Container sx={{ background: '#f0f5f5', height: '510px', border: 1, borderTop: 2, borderColor: '#cce6ff' }}>
                <Grid sx={{ marginTop: '16px' }} container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h3" component="div" id="typo-1">
                      Patrick Morgan
                    </Typography>
                    <Typography variant="h6" id="typo-2">
                      experienced kitchen manager and head cook for hire. 
                      <hr />     
                    </Typography>
                  </Grid>
                  <Grid item xs={5} >
                    <ReactRoundedImage
                      image={BlackSliders}
                      roundedColor="whitesmoke"
                      imageWidth="390"
                      imageHeight="390"
                      roundedSize="4"
                      borderRadius="220"
                    />
                  </Grid>
                </Grid>
              </Container>
              <Outlet style={{ marginTop: '45px'}}/>
            <h5 id="footer-header">ⒸSpriggDiddy Productions and Design</h5>
          </Box>
        </Container>
      </React.Fragment>
      );
    }

