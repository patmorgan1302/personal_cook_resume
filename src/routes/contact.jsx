import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import './routes.css';


export default function ContactPage() {
  return (
    <Box id="contact-box" style={{ marginTop: '65px', marginBottom: '30px' }}>
      <Card id="contact-card">
        <h1 id="contact-header">Contact Page</h1>
        <hr style={{ marginBottom: '84px' }}/>
        <Container>
          <h2 id="second-headers">email: patrickmorgan1302@gmail.com</h2>
          <h2 id="second-headers">email: patmorgan313@gmail.com</h2>
          <h2 id="second-headers">phone: (385)313-4897</h2>
          <h2 id="second-headers">linkedIn: www.linkedin.com/in/patrick-k-morgan</h2>
          <h2 id="second-headers" >github: patmorgan1302</h2>
        </Container>
      </Card>
    </Box>
  );
};

