import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="primary" size={60} thickness={4} />
      <Typography variant="h6" mt={2}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default Loader;
