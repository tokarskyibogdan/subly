import { createTheme } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        caption: {
          color: grey[800],
        },
      },
    },
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