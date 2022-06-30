import React from "react";

// Styles
import { ThemeProvider} from '@mui/material/styles';
import { makeStyles, Typography } from "@mui/material";
import theme from "../Styles";
import DrawerAppBar from "../Nav";

// Components
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import BasicCard from "../components/BasicCard";
import Grid from "@mui/material/Grid";




function About() {
  
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{marginTop: 2, backgroundColor: 'white',}} maxWidth="lg"> 
    <DrawerAppBar />
    <Box my={2}>
    <Typography variant="h1">
    About
    </Typography>
   </Box>
   <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
        <BasicCard 
        upperSubHead={"Bacon"} 
        mainHeader={"Breakfast"} 
        lowerSubhead={"Breakfast Burrito"} 
        definition={"Pork chop salami pig pancetta chislic frankfurter strip steak. Landjaeger pastrami fatback tongue shank turkey picanha pig ribeye chislic bacon."} 
        button={"Deep Fry"} 
        imageURL={'https://simplot-media.azureedge.net/-/media/foundation/recipes/us-recipes/buenos-dias-breakfast-burrito_058.jpg?rev=2cc61ab196a741fa9eaa2036c00f8f1d&h=550&w=550&la=en&hash=198E96B9AC824869D72AA47ED07744AF'}
        />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
        <BasicCard 
        upperSubHead={"Bacon"} 
        mainHeader={"Breakfast"} 
        lowerSubhead={"Breakfast Burrito"} 
        definition={"Pork chop salami pig pancetta chislic frankfurter strip steak. Landjaeger pastrami fatback tongue shank turkey picanha pig ribeye chislic bacon."} 
        button={"Deep Fry"} 
        imageURL={'https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG'}        
        />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
        <BasicCard 
        upperSubHead={"Bacon"} 
        mainHeader={"Breakfast"} 
        lowerSubhead={"Breakfast Burrito"} 
        definition={"Pork chop salami pig pancetta chislic frankfurter strip steak. Landjaeger pastrami fatback tongue shank turkey picanha pig ribeye chislic bacon."} 
        imageURL={'https://www.thespruceeats.com/thmb/i5J_05iux4LH9apYwmQRWVVwX2A=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-rice-and-bean-vegetarian-burrito-3377050-hero-02-925ce8bd71764196b4f9b289716c2fe2.jpg'}
        button={"Deep Fry"} />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
        <BasicCard 
        upperSubHead={"Bacon"} 
        mainHeader={"Breakfast"} 
        lowerSubhead={"Breakfast Burrito"} 
        definition={"Pork chop salami pig pancetta chislic frankfurter strip steak. Landjaeger pastrami fatback tongue shank turkey picanha pig ribeye chislic bacon."} 
        imageURL={'https://static.toiimg.com/thumb/62082983.cms?width=1200&height=900'}        
        button={"Deep Fry"} />
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default About;
