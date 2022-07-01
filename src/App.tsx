import React from "react";
// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles";
import themeLight from "./Styles";
// import "./App.css";
// Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BasicCard from "./components/BasicCard";
import Checkbox from "@mui/material/Checkbox";
import Icon from "@mui/material/Icon";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DrawerAppBar from "./Nav";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import { useState } from "react";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 2, backgroundColor: "white" }} maxWidth="lg">
        <DrawerAppBar />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box my={4}>
              <Typography variant="h3" component="h1">Can I have some bacon!?</Typography>
            </Box>
          </Grid>
          <Header mB={0} mT={0} title="What are we earting today... " />
          <Grid item xs={12}>
          <Button onClick={handleClick} variant="contained"  endIcon={<SavingsOutlinedIcon />}>
              Eat some bacon
              </Button>
            <Box
              sx={{ display: isActive ? "" : "none" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              my={4}
            >
              <Typography sx={{ color: "red" }} variant="h3">
                We're eatining some Baaaaacooonnnn!
              </Typography>
              <img
                style={{
                  padding: 2,
                  width: "10rem",
                  height: "10rem",
                  objectFit: "cover",
                }}
                src="https://healthyrecipesblogs.com/wp-content/uploads/2021/03/oven-bacon-1-2021.jpg"
              />
              <Typography variant="body1">
                Bacon ipsum dolor amet ground round leberkas frankfurter bacon,
                corned beef ham hock sausage swine pastrami pork chop buffalo
                tail venison prosciutto. Meatball turkey ribeye, jowl capicola
                swine pork ham hock landjaeger kielbasa tongue filet mignon
                strip steak cow. Turkey ham hock pancetta pork loin. Jerky
                meatloaf prosciutto meatball pork belly burgdoggen ribeye pork.
                Pork capicola tail porchetta meatloaf.
              </Typography>
            </Box>
          </Grid>
          </Grid>   
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box marginY={2} display="flex" flexDirection="row">
             
              <Button variant="contained">
                <RouterLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/About`}
                >
                  About
                </RouterLink>
              </Button>

              <Button sx={{ marginLeft: 1 }} variant="contained">
                <RouterLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/Contact`}
                >
                  Contact
                </RouterLink>
              </Button>

              <Button sx={{ marginLeft: 1 }} variant="contained">
                <RouterLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/BoilerPlate`}
                >
                  Boilerplate
                </RouterLink>
              </Button>
            </Box>
          </Grid>
        </Grid>
    
      </Container>
    </ThemeProvider>
  );
}

export default App;
