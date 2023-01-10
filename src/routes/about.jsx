import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ContactPage() {
  return (
    <Box id="contact-box" style={{ marginTop: '65px' }}>
      <Card id="contact-card">
        <h1 id="contact-header">About Me</h1>
        <hr style={{ marginBottom: '34px' }}/>
        <Box sx={{ flexDirection: 'column', padding: '2%' , display:'flex', justifyContent:'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , display:'flex', justifyContent:'center'}}>
          <Typography component="div" variant="h6" sx={{ textIndent: '50px', textAlign: 'center',  wordSpacing: '2px' }}>
            My name is Patrick Morgan, and I am an experienced kitchen manager and head cook for hire. 
            I have many years experience in a wide variety of kitchens, including bakery, smokehouse, seafood and homestyle.
            Being taught in such a diverse range of tastes and styles, I've grown a love for any and all food that I cook. 
            I am incredibly eager to learn new and more practical ways of cooking delicous meals! Teachability and reasonability are the most important concepts to me
            when its comes to learning a new kitchen, as well as learning about the people that help run it. I find that I exuberate both of these qualities,
            and that's just part of what makes me a valuable member of your kitchen team!
          </Typography>
         
        </CardContent>
      </Box>
        <Card sx={{ padding: '2%', display:'flex', justifyContent:'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 550, height: 550, border: 1, borderColor: 'black' }}
            image={require("../photos/profile_phot.jpg")}
            alt="Live from space album cover"
          />
        </Card>
      </Card>
    </Box>
  );
};

