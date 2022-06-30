import React from "react";

// Styles
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
// Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface HeaderProps {
  title: string;
  mB: number;
  mT: number;
}

export default function Header(props: HeaderProps) {
  const { title, mB, mT } = props;

  return (
    <Grid item xs={12}>
      <Box
        marginBottom={mB}
        marginTop={mT}
        sx={{ borderBottom: "1px solid #C9C7C7" }}
      >
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </Box>
    </Grid>
  );
}
