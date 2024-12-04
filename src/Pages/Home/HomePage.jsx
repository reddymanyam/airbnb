import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { SiAirbnb } from 'react-icons/si'
import { RxHome } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import GoogleMaps from '../../GoogleMaps/GoogleMaps';

const HomePage = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
      <Stack sx={{ width: "91%", height: "80px", background: "white", mx: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 1000 }}>
        <SiAirbnb size={36} color='#ff385c' onClick={handleHome} cursor="pointer" />
        <Stack sx={{ flexDirection: "row", gap: "30px", alignItems: "center" }}>
          <Typography color='black' variant='body1' component="h2" sx={{ fontWeight: 500 }}> Ready to Airbnb it?</Typography>
          <Button sx={{ bgcolor: '#d90166', borderRadius: "15px", minWidth: "200px" }} variant='contained'><RxHome size={28} /> <Typography color='white' variant='h6' component="h2" sx={{ fontWeight: 500, fontSize: "20px", marginLeft: "10px", textTransform: "none", cursor: "pointer" }}> Airbnb Setup</Typography></Button>
        </Stack>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <GoogleMaps />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px auto" }}>
        <Typography variant='h4' component="h2" sx={{ fontWeight: "600", color: "light black" }}>Airbnb it easily with Airbnb Setup</Typography>
      </Box>
      <Box sx={{ width: "85%", display: 'flex', justifyContent: "center", margin: "30px auto" }}>
        <img src='https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq' alt='imghome' style={{ width: "100%" }} />
      </Box>
    </Box>
  )
}

export default HomePage
