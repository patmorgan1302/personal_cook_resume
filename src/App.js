import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, Outlet } from "react-router-dom";
import React from 'react'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';


export default function App() {
  return (
    <React.Fragment >
      <CssBaseline />
        <Container fixed sx={{ width: '100%', height: '100%'}}>
            <Box id="box-1">      
              <AppBar position="sticky" 
                  style={{ 
                    height: '64px', 
                    width: '100%',
                    backgroundColor: 'white', 
                    boxShadow: 'none',
                    marginBottom: '56px',
                  }}> 
                  <Toolbar 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'center', 
                      width: '100%', 
                      padding: '1%',
                      borderBottom: 1,
                      borderColor: '#e0ebeb'
                    }}>
                    <Link to="/" id="first-link">Home</Link>
                    <Link to="/job-experience" id="first-link">Job Experience</Link>
                    <Link to="/certificates" id="first-link">Certificates</Link>
                    <Link to="/about" id="first-link">About Me</Link>   
                    <Link to="/contact" href='#card-2' id="first-link">Contact</Link>   
                  </Toolbar>
                </AppBar> 

                <Container sx={{ 
                    background: '#f0f5f5', 
                    height: '330px', 
                    border: 1, 
                    borderTop: 2, 
                    borderColor: '#cce6ff' 
                      }}>
          
                    <Typography variant="h3" component="div" id="typo-1">
                      Patrick Morgan
                    </Typography>
                    <Typography sx={{ textDecoration: '1px underline' }}variant="h6" id="typo-2">
                      experienced kitchen manager and head cook for hire. 
                        
                    </Typography>
                  </Container>

              <Outlet style={{ marginTop: '45px'}}/>
            <h5 id="footer-header">ⒸSpriggDiddy Productions and Design</h5>
          </Box>
        </Container>
      </React.Fragment>
      );
    }

