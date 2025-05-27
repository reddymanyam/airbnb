import { useRoutes } from "react-router-dom";
import Router from './Routes/Router';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  // Define a theme (you can customize this as needed)
  const theme = createTheme();

  // Use the routes
  const routing = useRoutes(Router);

  // Return the structure
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
