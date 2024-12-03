import React from 'react'
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import { SiAirbnb } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { IoSearch } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  // const items = ["Anywhere", "Any week", "Add guests"]

  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignUp = () =>{
    navigate('/auth')
  }
 
  const handleHomepage = () =>{
    navigate('/homepage')
  }

  const handleHelpCenter = () =>{
    navigate('/helpcenter')
  }

  const handleExperience = () =>{
    navigate('/experience')
  }
  return (
    <Box sx={{ width: "100%", height: "80px", borderBottom: "1px solid #E5E4E2", display: "flex", alignItems: "center", position: "sticky", zIndex: 1000, top: 0, backgroundColor: "white" }}>
      <Box sx={{ width: "95%", display: "flex", margin: "0 auto", justifyContent: { xs: "center", md: "space-between" } }}>
        <Box sx={{ display: { xs: 'none', md: "flex" }, flexDirection: "row", gap: 1, alignItems: "center", cursor: "pointer" }} onClick={handleHomepage}>
          <SiAirbnb size={40} color='#ff385c' />
          <Typography sx={{ fontWeight: "bold", color: "#ff385c", fontSize: "1.5rem" }}>airbnb</Typography>
        </Box>
        <Paper elevation={1} sx={{ border: "1px solid #E5E4E2", borderRadius: "50px", padding: "4px 3px 4px 26px", }} >
          <Stack sx={{ flexDirection: "row", height: "40px", alignItems: "center", cursor: "pointer", gap: 1 }} >
            <Typography variant='body1' color='black' fontFamily="Arial, Helvetica, sans-serif">Anywhere</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body1' color='black' fontFamily="Arial, Helvetica, sans-serif">Any week</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body1' color='gray' fontFamily="Arial, Helvetica, sans-serif">Add guests</Typography>
            <IconButton aria-label='SearchIcon' sx={{ color: "white", backgroundColor: "#ff385c", height: "35px", width: "35px", '&:hover': { backgroundColor: '#ff385c' } }}>
              <IoSearch />
            </IconButton>
          </Stack>
        </Paper>
        <Box sx={{ display: { xs: "none", md: 'flex' }, alignItems: "center", gap: 2 }}>
          <Typography variant='body1' color='#000000' fontFamily="Arial, Helvetica, sans-serif" sx={{ cursor: "pointer" }} onClick={handleHomepage} >Airbnb your home</Typography>
          <IconButton sx={{ fontSize: '20px', color: 'black' }}  >
            <CiGlobe />
          </IconButton>
          <Paper sx={{ border: "1px solid #E5E4E2", borderRadius: "50px", padding: "2px" }}>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <IconButton aria-label='MenuIcon' >
                <IoMenuOutline color='black' />
              </IconButton>
              <IconButton aria-label='Account'  onClick={handleClick}  aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} >
                <AccountCircleTwoToneIcon />
              </IconButton>
            </Stack>
          </Paper>
        </Box>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleSignUp}>
          <Typography variant="body1" component="span">Sign up</Typography>
        </MenuItem>
        <MenuItem onClick={handleSignUp}>
        <Typography variant="body1" component="span">Login</Typography> 
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleHomepage}>
          <Typography variant="body1" component="span">Airbnb your home</Typography>
        </MenuItem>
        <MenuItem onClick={handleExperience}>
        <Typography variant='body1' component="span">Host an experience</Typography>
        </MenuItem>
        <MenuItem onClick={handleHelpCenter}>
        <Typography variant="body1" component="span">Help Centre</Typography>
        </MenuItem>
      </Menu>
      </Box>
    </Box>
  )
}

export default Navbar
