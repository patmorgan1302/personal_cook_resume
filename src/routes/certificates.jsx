import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './routes.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function RecipeReviewCard() {

  return (
      <Box id="cert-box"  sx={{ marginTop: '64px', marginBottom: '34px'}}>
        <h1 id="dirty-secret">Certificates and Permits</h1>
        <hr style={{ marginBottom: '64px' }}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={require('../photos/utah-food-handler.jpg')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Food Handlers Permit - UT
                    </Typography>
                  </CardContent>
              </Card>
            </Item>
          </Grid>
        
          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={require('../photos/Food_Manager_Badge.png')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      ServSafe Food Certified
                    </Typography>
                  </CardContent>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: '33px'}}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
               
                  <CardMedia
                    component="img"
                    height="340"
                    image={require('../photos/grms_badge.png')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Global Red Meta Standard (GRMS) 
                    </Typography>
                  </CardContent>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: '33px'}}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
              
                  <CardMedia
                    component="img"
                    height="340"
                    image={require('../photos/PRM-FS.png')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                       Kitchen Manager Certification (Utah)
                    </Typography>
                  </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>

  );
}