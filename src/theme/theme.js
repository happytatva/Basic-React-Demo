import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#b57eec",
      light: "#F5EBFF",
      dark: "#5d1d9c",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fc0882",
      light: "#fd93c8",
      dark: "#d4006a",
      contrastText: "#ffffff"
    },
  },
  typography: {
    fontFamily: ["Arial, Helvetica, sans-serif"],
    h1: {
      fontSize: 50,
    },
  },
  components: {
    // name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                border: `1px dashed}`,
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
