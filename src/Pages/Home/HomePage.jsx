import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import GoogleMaps from '../../GoogleMaps/GoogleMaps';
import Grid from '@mui/material/Grid2';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
 

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
      <Navbar variant="homepage" />
      {/* <Stack sx={{ width: "91%", height: "80px", background: "white", mx: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 1000 }}>
        <SiAirbnb size={36} color='#ff385c' onClick={handleHome} cursor="pointer" />
        <Stack sx={{ flexDirection: "row", gap: "30px", alignItems: "center" }}>
          <Typography color='black' variant='body1' component="h2" sx={{ fontWeight: 500 }}> Ready to Airbnb it?</Typography>
          <Button sx={{ bgcolor: '#d90166', borderRadius: "15px", minWidth: "200px" }} variant='contained'><RxHome size={28} /> <Typography color='white' variant='h6' component="h2" sx={{ fontWeight: 500, fontSize: "20px", marginLeft: "10px", textTransform: "none", cursor: "pointer" }}> Airbnb Setup</Typography></Button>
        </Stack>
      </Stack> */}
      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <GoogleMaps />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px auto" }}>
        <Typography variant='h4' component="h2" sx={{ fontWeight: "600", color: "light black" }}>Airbnb it easily with Airbnb Setup</Typography>
      </Box>
      <Box sx={{ width: "85%", margin: "20px auto" }}>
        <img src='https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq' alt='imghome' style={{ width: "100%", marginBottom:"50px" }} />
        <Grid container spacing={2}>
        <Grid size={{xs:12, sm:6, md:4}}>
          <Typography variant='h6' component="h2">One-to-one guidance from a Superhost</Typography>
          <Typography variant='subtitle1' component="h2" color='gray'>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
        <Typography variant='h6' component="h2">An experienced guest for your first booking</Typography>
          <Typography variant='subtitle1' component="h2" color='gray'>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
        <Typography variant='h6' component="h2">Specialised support from Airbnb</Typography>
        <Typography variant='subtitle1' component="h2" color='gray'>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</Typography>
        </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage
