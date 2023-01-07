import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  
export default function Recipes() {
  return (
    <Box id="cert-box"  sx={{ marginTop: '64px', marginBottom: '34px'}}>
    <h1 id="dirty-secret">Personal Recipes</h1>
    <hr style={{ marginBottom: '34px' }}/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px red' }} color="text.secondary" gutterBottom>
                    Desserts
                    </Typography>
                    <Typography variant="h5" component="div">
                    Cinnamon Swirl Loaf
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px blue' }} color="text.secondary" gutterBottom>
                    Appetizers
                    </Typography>
                    <Typography variant="h5" component="div">
                    King Clam Chowder
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px red' }} color="text.secondary" gutterBottom>
                    Desserts
                    </Typography>
                    <Typography variant="h5" component="div">
                    Banana Cream Pie
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px green' }} color="text.secondary" gutterBottom>
                    Breakfast
                    </Typography>
                    <Typography variant="h5" component="div">
                    Biscuits and Gravy
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px purple' }} color="text.secondary" gutterBottom>
                    Entrees
                    </Typography>
                    <Typography variant="h5" component="div">
                    Chipolte Hot Wings
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px blue' }} color="text.secondary" gutterBottom>
                    Appetizers
                    </Typography>
                    <Typography variant="h5" component="div">
                    Hoisen Lettuce Wraps
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px purple' }} color="text.secondary" gutterBottom>
                    Entrees
                    </Typography>
                    <Typography variant="h5" component="div">
                    BBQ Blue Sliders
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px purple' }} color="text.secondary" gutterBottom>
                    Entrees
                    </Typography>
                    <Typography variant="h5" component="div">
                    Broiled Portabello Mushrooms
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14, textShadow: '2px 2px 4px green' }} color="text.secondary" gutterBottom>
                    Breakfast
                    </Typography>
                    <Typography variant="h5" component="div">
                    Sherbert Kale Smoothie
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}