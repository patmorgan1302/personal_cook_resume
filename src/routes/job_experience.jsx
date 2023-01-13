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
              titleTypographyProps={{ variant:'h5' }}
              subheader="Head Baker / Shift Lead | September 2017 - October 2019"
              subheaderTypographyProps={{ variant: 'h7'}}
            />
            {/* <Typography variant='h6'>August 2020 - October 2022</Typography> */}
             <CardMedia>
                <ol id="job-lists">
                  <li id="list-item">Organized small teams of bakers and drivers in daily performance duties. Performed inventory inspections and conducted reviews of team members proficiency, quarterly.</li>
                  <hr />
                  <li id="list-item">Responsible for all customer correspondence, as well as online product review and customer complaint response.</li>
                </ol>
              </CardMedia>
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
              titleTypographyProps={{ variant:'h5' }}
              subheader="Seasonal Manager | June 2018 - October 2021"
              subheaderTypographyProps={{ variant: 'h7'}}
            />
                <CardMedia>
                  <ol id="job-lists">
                    <li id="list-item">Oversaw daily preparations before catering events, as well as daily truck maintenance.</li>
                    <hr />
                    <li id="list-item"> Responsible for all operations getting to their destination safely, as well as assigning positions for serving, and post service cleaning jobs.</li>
                    <hr />
                    <li id="list-item">Operate POS system at events, made sure all transactions were recorded to the Owner.</li>

                  </ol>
              </CardMedia>
            </Grid>
          </Grid>
        </Card>
        
        <Card style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardHeader
              title="My Pie Pizzeria"
              titleTypographyProps={{ variant:'h5' }}
              subheader="Assistant Restaurant Manager | October 2019 - June 2021"
              subheaderTypographyProps={{ variant: 'h7'}}
            />
             <CardMedia>
                <ol id="job-lists">
                  <li id="list-item">Responsible for assigning positions to bakers and cashiers, as well as handeling 3rd party delivery applications.</li>
                  <hr />
                  <li id="list-item">Early morning dough prep and nightly inventory inspections, compiling lists of responsibilities for the managers team when they arrived later in the day.</li>
                </ol>
              </CardMedia>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
              component="img"
              height="394"
              image={require("../photos/medium.jpg")}
            />
            </Grid>
          </Grid>
        </Card>

        <Card style={cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardHeader
              title="Chestnut Pines Cafe and Bakery"
              titleTypographyProps={{ variant:'h5' }}
              subheader="Kitchen Manager | July 2021 - November 2022"
              subheaderTypographyProps={{ variant: 'h7'}}
            />
             <CardMedia>
                <ol id="job-lists">
                  <li id="list-item">Responsible for quality assurance of all meals served, and daily maintenance checks of kitchen equipment.</li>
                  <hr />
                  <li id="list-item">Designed and implemented new seasonal opportunities such as soups, sandwiches, breads and salads.</li>
                  <hr />
                  <li id="list-item">Preperations for scratch based ingredients that required overnight sitting.</li>

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
      </Box>
  );
}