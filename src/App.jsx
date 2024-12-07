import { useRoutes } from "react-router-dom";
import Router from './Routes/Router';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const App = () => {
  <ThemeProvider>
    <CssBaseline />
    const routing = useRoutes(Router);
    return routing;
  </ThemeProvider>
  
  
 
};

export default App;
