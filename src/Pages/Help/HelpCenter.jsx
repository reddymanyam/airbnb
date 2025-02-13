import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import Navbar from '../Navbar/Navbar';

const HelpCenter = () => {

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", background: "white" }}>
       <Navbar variant="helpcenter"/>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "50px" }}>
          <Typography variant="h3" component="h2">Hi, how can we help?</Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <TextField
              label="Search how to's and more"
              variant="outlined"
              sx={{
                width: "50%",
                marginTop: "20px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "40px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search"
                      sx={{
                        color: "white",
                        backgroundColor: "#ff385c",
                        height: "45px",
                        width: "45px",
                        '&:hover': { backgroundColor: "#ff385c" },
                      }}
                    >
                      <IoSearch />
                    </IconButton>
                  </InputAdornment>)
              }} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HelpCenter
