import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Recipes() {
  return (
    <div>
      <Typography variant="h4" sx={{ 
        textAlign: 'center',
        marginTop: '107px',
        marginBottom: '25px',
        fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
        welcome to my site, please take a look around!
        <hr style={{ marginBottom: '235px'}}/>
      </Typography>
   
    </div>
  );
}