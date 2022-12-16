import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import React from 'react'; 

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Box id="box-1">
          <Card id="card-1" sx={{ borderBottom: 1, borderTop: 1,  borderColor: 'gold' }}>
            <CardContent id="card-content-1">
              <Typography variant="h2" component="div" id="typo-1">
                Patrick Morgan
              </Typography>
              {/* <Typography variant="h4" id="typo-3" sx={{ wordSpacing: '.5em'}}>
                dedicated |  respectable |  authoritative
              </Typography> */}
              <Typography variant="h5" id="typo-2">
                 experienced kitchen manager and head cook for hire.      
              </Typography>
              <hr />
            </CardContent>
          </Card>         
            <Box>
              <Box  
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    id='link-box' 
                    flexDirection= 'column'> 
                    
                <Link to="/job-experience" id="first-link">Job Experience</Link>               
                {/* <Link to="/recipes" id="first-link">Recipes</Link> */}
                <Link to="/certificates" id="first-link">Certificates</Link>
                <Link to="/contact" id="first-link">Contact</Link>
              </Box>               
              <Outlet />
                
                <Card id="card-2" sx={{ borderTop: 1, borderColor: 'gold'}} >
                  <Typography component="div" id="blog" variant="h2">Blog</Typography>
                  <CardContent id="card-content">
                    <Card id="card-3">
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                          <Typography component="div" variant="h4">
                                Live From Space
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" component="div">
                                Mac Miller
                          </Typography>
                        </CardContent>
                      </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: '420px', height: '300px' , padding: '1%'}}
                      image={require("./joanna.jpg")}
                      alt="Live from space album cover"
                      />
                    </Card>
                  </CardContent>
                </Card>
              </Box>
            </Box>
        </Container>
      </React.Fragment>
    );
  }

