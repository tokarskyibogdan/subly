import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "6px 12px",
        },
        outlined: {
          backgroundColor: "white",
        },
      },
    }
  },
});

export default theme;