import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const HelpCenter = () => {

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", background: "white" }}>
        <Navbar variant="helpcenter" />
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
        <Stack>

          <Stack sx={{ padding: "20px", border: "1px solid gray", borderRadius: "20px", width: "85%", margin: "0 auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant='h4' component="h2">We’re here for you</Typography>
              <Typography variant='subtitle1' component="h2">Log in to get help with your reservations, account, and more.</Typography>
            </Box>
            <Button variant='contained' sx={{ backgroundColor: '#ff385c', padding: "12px 120px", borderRadius: "8px" }}>Login or SignUp</Button>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

export default HelpCenter
