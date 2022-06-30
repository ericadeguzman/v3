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

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 2, backgroundColor: "white" }} maxWidth="lg">
        <DrawerAppBar />
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box my={1}>
              <Typography variant="h1">Hello World...</Typography>
            </Box>
          </Grid>
          <Header mB={0} mT={0} title="Welcome... " />
          <Grid item xs={12}>
            <Typography variant="body1">
              Bacon ipsum dolor amet ground round leberkas frankfurter bacon,
              corned beef ham hock sausage swine pastrami pork chop buffalo tail
              venison prosciutto. Meatball turkey ribeye, jowl capicola swine
              pork ham hock landjaeger kielbasa tongue filet mignon strip steak
              cow. Turkey ham hock pancetta pork loin. Jerky meatloaf prosciutto
              meatball pork belly burgdoggen ribeye pork. Pork capicola tail
              porchetta meatloaf.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="row">
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
