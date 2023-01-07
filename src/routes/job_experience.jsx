import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import './routes.css';

var cardStyle = {
  display: 'block',
  width: 'auto',
  padding: '3%',
  marginBottom: '24px',
  transitionDuration: '0.3s',
  height: 'auto'
}

export default function RecipeReviewCard() {

  return (
      <Box id="job-box" sx={{ marginTop: '64px' }}>
        
        <h1 id="dirty-secret">Work Experience</h1>
        <hr style={{ marginBottom: '34px' }}/>
        <Card style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardHeader
              title="ChestNut Pines"
              titleTypographyProps={{ variant:'h4' }}
              subheader="Kitchen Manager | August 2020 - October 2022"
              subheaderTypographyProps={{ variant: 'h5'}}
             
            />
             <CardMedia>
                <ol id="job-lists">
                  <li id="list-item">Responsible for quality assurance of all meals served, and daily maintenance checks of kitchen equipment.</li>
                  <li id="list-item">Designed and implemented new seasonal opportunities such as soups, sandwiches, breads and salads.</li>
                </ol>
              </CardMedia>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
              component="img"
              height="394"
              image={require("../photos/chestnut.jpg")}
            />
            </Grid>
          </Grid>
        </Card>
  
        <Card id="cert-card" style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardMedia
              component="img"
              height="394"
              image={require("../photos/chip-store.jpg")}
            />
            </Grid>
            <Grid item xs={6}>
              <CardHeader
              title="Chip Cookies"
              titleTypographyProps={{ variant:'h4' }}
              subheader="Kitchen Manager | August 2020 - October 2022"
              subheaderTypographyProps={{ variant: 'h5'}}
            />
             <CardMedia>
                <ol id="job-lists">
                  <li id="list-item">Led a small team of bakers and drivers in daily performance duties. Performed inventory inspections and conducted weekly interviews.</li>
                  <li id="list-item">Last line for customer correspondence, online product review response as well as compilation of all reports for General Managment.</li>
                </ol>
              </CardMedia>
            </Grid>
          </Grid>
        </Card>

        <Card id="cert-card" style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardHeader
              title="Kneaders Cafe and Bakery"
              titleTypographyProps={{ variant:'h4' }}
              subheader="Kitchen Manager | August 2020 - October 2022"
              subheaderTypographyProps={{ variant: 'h5'}}
            />
            <CardMedia>
              <ol id="job-lists">
                <li id="list-item">Performed managerial duties in the evenings and oversaw the closure and cleaning of the store.</li>
                <li id="list-item">Assisted in line duties, drive-through operations and front of house customer correlations.
</li>
              </ol>
            </CardMedia>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
              component="img"
              height="394"
              image={require("../photos/kneaders_retail.jpg")}
            />
            </Grid>
          </Grid>
        </Card>
  
        <Card id="cert-card" style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardMedia
              component="img"
              height="394"
              image={require("../photos/blacksliders.png")}
            />
            </Grid>
            <Grid item xs={6}>
              <CardHeader
              title="Black's Sliders"
              titleTypographyProps={{ variant:'h4' }}
              subheader="Kitchen Manager | August 2020 - October 2022"
              subheaderTypographyProps={{ variant: 'h5'}}
            />
                <CardMedia>
                  <ol id="job-lists">
                    <li id="list-item">Oversaw daily preparations and truck maintenance.</li>
                    <li id="list-item"> Responsible for all operations getting to their destination safely, as well as assigning positions for serving and post service cleaning jobs.</li>
                  </ol>
              </CardMedia>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
}