import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { SiAirbnb } from 'react-icons/si'
import { RxHome } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

  const navigate = useNavigate();

  const handleHome = () =>{
    navigate('/')
  }
  return (
    <Box sx={{width:"100%", minHeight:"100vh"}}>
        <Stack sx={{width:"91%", height:"80px", background:"white", mx:"auto", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <SiAirbnb size={36} color='#ff385c' onClick={handleHome} cursor="pointer"/>
        <Stack sx={{flexDirection:"row", gap:"30px", alignItems:"center"}}>  
          <Typography color='black' variant='body1' component="h2" sx={{fontWeight:500}}> Ready to Airbnb it?</Typography>
          <Button sx={{bgcolor:'#d90166', borderRadius:"15px", minWidth:"200px"}} variant='contained'><RxHome size={28} /> <Typography color='white' variant='h6' component="h2" sx={{fontWeight:500, fontSize:"20px", marginLeft:"10px", textTransform: "none", cursor: "pointer"}}> Airbnb Setup</Typography></Button>
        </Stack>
        </Stack>
    </Box>
  )
}

export default HomePage
