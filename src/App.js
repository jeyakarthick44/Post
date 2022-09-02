import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <SideBar />
      <Grid container direction="row" p={4}>
        <Grid item xs={12}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
