import React from "react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles, TextField, Typography } from "@mui/material";
import theme from "../Styles";
import DrawerAppBar from "../Nav";

// Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BasicCard from "../components/BasicCard";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Header from "../components/Header";

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 2, backgroundColor: "white" }} maxWidth="lg">
        <DrawerAppBar />
        <Box my={2}>
          <Typography variant="h1">Contact</Typography>
        </Box>
        <Grid container spacing={2}>
        <Header mB={0} mT={0}  title="Welcome... " />
          <Grid item xs={12}>
              <Typography variant="body1">
              Bacon ipsum dolor amet ground round leberkas frankfurter bacon, corned beef ham hock sausage swine pastrami pork chop buffalo tail venison prosciutto. Meatball turkey ribeye, jowl capicola swine pork ham hock landjaeger kielbasa tongue filet mignon strip steak cow. Turkey ham hock pancetta pork loin. Jerky meatloaf prosciutto meatball pork belly burgdoggen ribeye pork. Pork capicola tail porchetta meatloaf.
              </Typography>
          </Grid>
          <Header mB={1} mT={0} title="User Details" />
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              defaultValue="Name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              defaultValue="Last Name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              defaultValue="Email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Favorite color"
              variant="outlined"
              defaultValue="Purple"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Favorite music genre"
              variant="outlined"
              defaultValue="Rock"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              minRows={4}
              maxRows={6}
              id="outlined-basic"
              variant="outlined"
              defaultValue="Hello!"
            />
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" endIcon={<SendIcon />}>Submitt</Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
