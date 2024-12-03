import React from "react";
import { useRoutes } from "react-router-dom";
import { Router } from './Auth/Auth';

const App = () => {
  const routing = useRoutes(Router);
  
  return routing;
};

export default App;
