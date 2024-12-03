import { useRoutes } from "react-router-dom";
import Router from './Routes/Router';

const App = () => {
  const routing = useRoutes(Router);
  
  return routing;
};

export default App;
