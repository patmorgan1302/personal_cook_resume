import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

import React from 'react'; 


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Box sx={{ bgcolor: 'white', height: '100vh',  padding: '2%' }}>
          <Card className="card-1" sx={{ minWidth: 175,  padding: '2px', marginTop: '37px', marginLeft: '34px', marginRight: '34px', bgcolor: '#f0f5f5', border: 1, borderTop: 2, borderColor: '#f0f0f5' }}>
            <CardContent sx={{ marginTop: '23px'}}>
              <Typography variant="h1" component="div" id="typo" style={{ fontFamily: 'Times New Roman, Times, serif' , textAlign: 'center', marginTop: '95px', textShadow: '1px 3px 2px #a2cf6e' }}>
                Patrick Morgan
              </Typography>
              <Typography variant="h4" id="typo" style={{ textAlign: 'center', marginTop: '36px', marginBottom: '144px' }}>
                experienced kitchen manager for hire.         
              </Typography>
            </CardContent>
          </Card>

            <Box sx={{ flexGrow: 1 , marginTop: '53px', textAlign: 'center'}}>
              <Box>           
                <Button><Link to="/search" className="button"> Search Catalog</Link></Button> 
                <Button><Link to="/catalog">Drink Catalog</Link></Button> 
                <Button><Link to="/random">Generate Random Recipe!</Link></Button>
                <Outlet />
              </Box>
            </Box>
          </Box>
        </Container>
    </React.Fragment>
    );
  }

