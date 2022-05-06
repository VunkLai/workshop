import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const createCustomTheme = () => {
  const options = {
    palette: { mode: "dark" },
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            "*::-webkit-scrollbar": {
              width: "5px",
            },
            "*::-webkit-scrollbar-track": {
              webkitBorderRadius: "10px",
              borderRadius: "10px",
              margin: "0",
            },
            "*::-webkit-scrollbar-thumb": {
              webkitBorderRadius: "4px",
              borderRadius: "4px",
              background: "rgb(219,219,219)",
            },
          },
        },
      },
    },
  };
  const theme = createTheme({ ...options });
  return responsiveFontSizes(theme);
};

export default function App() {
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      App
    </ThemeProvider>
  );
}
