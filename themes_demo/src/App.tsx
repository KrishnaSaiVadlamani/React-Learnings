import React from "react";
import "./App.css";
import { ThemeProvider, Typography } from "@mui/material";
import Theme from "./Theme";

function App() {
  return <div className="App">
     <div className="App">
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">This is Theme File H1!!!</Typography>
        <Typography variant="h2">This is Theme File H2!!!</Typography>
        <Typography variant="h3">This is Theme File H3!!!</Typography>
      </ThemeProvider>
    </div>

  </div>;
}

export default App;
