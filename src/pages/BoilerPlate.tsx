import React from "react";
// Styles
import { ThemeProvider} from '@mui/material/styles';
import theme from "../Styles";
// import "./App.css";
// Components
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BasicCard from "../components/BasicCard";
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DrawerAppBar from "../Nav";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BoilerPlate() {
  
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{marginTop: 2, backgroundColor: 'white',}} maxWidth="lg"> 
    <DrawerAppBar />
    
    <Box my={2}>
    <Typography variant="h1">
     Header 1
    </Typography>
    <Typography variant="h2">
      Header 2
    </Typography>
    <Typography variant="h3">
      Header 3
    </Typography>
    <Typography variant="h4">
      Header 4
    </Typography>
    <Typography variant="h5">
      Header 5
    </Typography>
    <Typography variant="h6">
      Header 6
    </Typography>
    </Box>
    <Grid sx={{display: 'flex',}}>
    <Box>
    <Typography  variant="body1">Chips</Typography>
    <Stack spacing={1}>
    <Chip color="primary" icon={<MdPhone />} label="Primary" /> 
    <Chip color="secondary" icon={<MdPhone />} label="Secondary" />
    </Stack>    
    </Box>
    <Box mx={2}>
      <Typography  variant="body1">Switches</Typography>
    <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </Box>
    <Box mx={2}>
    <Typography>Form</Typography>
    <FormGroup sx={{display: 'flex',}}>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
    </Box>
    </Grid>
      <Box mt={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <BasicCard
              upperSubHead={"Red"}
              mainHeader={"Bianca"}
              lowerSubhead={"Delgado"}
              definition={"Drumstick beef ribs alcatra picanha ham, corned beef cupim tri-tip capicola turducken chicken salami. "}
              button={"Pickle"}
              imageURL={'https://simplot-media.azureedge.net/-/media/foundation/recipes/us-recipes/buenos-dias-breakfast-burrito_058.jpg?rev=2cc61ab196a741fa9eaa2036c00f8f1d&h=550&w=550&la=en&hash=198E96B9AC824869D72AA47ED07744AF'}
            />
              </Grid>
        <Grid item xs={12} sm={3}>
        <BasicCard upperSubHead={"Pre Subheader"} mainHeader={"Main Header"} lowerSubhead={"Lower Subheader"} definition={"Drumstick beef ribs alcatra picanha ham, corned beef cupim tri-tip capicola turducken chicken salami."} 
        button={"Highlight"} 
        imageURL={'https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG'}
        />        
        </Grid>
        <Grid item xs={12} sm={3}>
        <BasicCard upperSubHead={"Pre Subheader"} mainHeader={"Main Header"} lowerSubhead={"Lower Subheader"} definition={"Drumstick beef ribs alcatra picanha ham, corned beef cupim tri-tip capicola turducken chicken salami."} 
        button={"Highlight"} 
        imageURL={'https://www.thespruceeats.com/thmb/i5J_05iux4LH9apYwmQRWVVwX2A=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-rice-and-bean-vegetarian-burrito-3377050-hero-02-925ce8bd71764196b4f9b289716c2fe2.jpg'}
        />        
        </Grid>        
        <Grid item xs={12} sm={3}>
        <BasicCard upperSubHead={"Pre Subheader"} mainHeader={"Main Header"} lowerSubhead={"Lower Subheader"} definition={"Drumstick beef ribs alcatra picanha ham, corned beef cupim tri-tip capicola turducken chicken salami."} 
        button={"Highlight"} 
        imageURL={'https://static.toiimg.com/thumb/62082983.cms?width=1200&height=900'}
        />        
        </Grid>
        </Grid>
      </Box>
      <Box my={2}>
        <Typography variant="body1">
          Pagination
        </Typography>
      <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
      </Box>
    </Container>
    </ThemeProvider>
  );
}

export default BoilerPlate;
