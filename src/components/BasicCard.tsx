import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

interface CardProps {
  upperSubHead: string;
  mainHeader: string;
  lowerSubhead: string;
  definition: string;
  button: string;
  imageURL: string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props: CardProps) {
  const { upperSubHead, mainHeader, lowerSubhead, definition, button, imageURL } = props;
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };
 
  
  return (
    <Card>
       <Box>
          <img style={{ width: "100%", height: '10rem', objectFit: 'cover',}} src={imageURL} />
          </Box>
      <CardContent sx={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}>
         
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {upperSubHead}
        </Typography>
        <Typography variant="h5" component="div">
          {mainHeader}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lowerSubhead}
        </Typography>
        <Typography variant="body2">
          {definition}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth id="colorChange" size="small" onClick={handleClick}>{button}</Button>
      </CardActions>
    </Card>
  );
}
