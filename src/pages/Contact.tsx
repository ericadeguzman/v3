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


function Contact() {

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{marginTop: 2, backgroundColor: 'white',}} maxWidth="lg"> 
<DrawerAppBar />
    <Box my={2}>
    <Typography variant="h1">
    Contact
    </Typography>
   </Box>

  <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={2}>
          <BasicCard />
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default Contact;
