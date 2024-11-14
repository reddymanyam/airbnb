import React from 'react'
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import { SiAirbnb } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <Box sx={{width:"100%", height:"80px", borderBottom:"1px solid #E5E4E2", display:"flex", alignItems:"center", position:"sticky"}}>
      <Box sx={{width:"95%", display:"flex", justifyContent:"space-between", margin:"0 auto"}}>
           <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center", cursor:"pointer" }}>
                <SiAirbnb size={40} color='#ff385c'/>
                <Typography sx={{fontWeight:"bold", color:"#ff385c", fontSize:"1.5rem"}}>airbnb</Typography>
           </Box>
           <Paper elevation={1} sx={{border:"1px solid #E5E4E2", borderRadius:"50px", padding:"4px 3px 4px 26px"}} >
           <Stack sx={{display:"flex", flexDirection:"row", height:"40px",  alignItems:"center", cursor:"pointer", gap:1}} >
            <Typography variant='body1' color='black' fontFamily="Arial, Helvetica, sans-serif">Anywhere</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body1' color='black' fontFamily="Arial, Helvetica, sans-serif">Any week</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body1' color='gray' fontFamily="Arial, Helvetica, sans-serif">Add guests</Typography>
            <IconButton aria-label='SearchIcon' sx={{color:"white", backgroundColor:"#ff385c", height:"35px", width:"35px", '&:hover':{backgroundColor: '#ff385c'}}}>
                <IoSearch />
            </IconButton>
           </Stack>
           </Paper>
           <Box sx={{display:'flex', alignItems:"center", gap:2}}>
            <Typography variant='body1' color='#000000' fontFamily="Arial, Helvetica, sans-serif" sx={{cursor:"pointer"}}>Airbnb your home</Typography>
            <IconButton  sx={{ fontSize: '20px',color:'black' }}  >
            <CiGlobe />
            </IconButton>
            <Paper sx={{border:"1px solid #E5E4E2", borderRadius:"50px", padding:"2px"}}>
            <Stack sx={{display:"flex", flexDirection:"row"}}>
                 <IconButton aria-label='MenuIcon'>
                 <IoMenuOutline color='black'/>
                 </IconButton>
                 <IconButton aria-label='Account'>
                 <AccountCircleTwoToneIcon />
                 </IconButton>
            </Stack>
            </Paper>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar
