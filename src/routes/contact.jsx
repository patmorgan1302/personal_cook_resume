import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

import './routes.css';


export default function ContactPage() {

  return (
    <Box id="contact-box">
      <Card id="contact-card" sx={{ border: 1, borderColor: 'gold' }}>
        <h1>Contact Page</h1>
        <Container>

        <h2 id="second-headers">email: patrickmorgan1302@gmail.com</h2>
        <h2 id="second-headers">phone: (385)313-4897</h2>
        <h2 id="second-headers">linkedIn: www.linkedin.com/in/patrick-k-morgan</h2>

        <h2 id="second-headers" >github: patmorgan1302</h2>

        <Accordion id="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h2>
                Send Me a Message!
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField             
            id="fullWidth"
            fullWidth label="Put Your Name Here!"             
            />
            <TextField sx={{ marginTop : '14px' }}            
            id="fullWidth"
            fullWidth label="Put Your Contact Info Here!"             
            />
            <TextField sx={{ marginTop : '14px' }} 
             fullWidth label="Put Your Message Here!" id="fullWidth"
            />
          </AccordionDetails>
        </Accordion>
 
        </Container>
        </Card>
    </Box>
  );
};
