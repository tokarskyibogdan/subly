import React from "react";
import Header from "src/components/Header";
import MediaList from "src/components/MediaList";
import { ThemeProvider } from "@mui/system";
import theme from "src/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <MediaList/>
    </ThemeProvider>
  );
}

export default App;
