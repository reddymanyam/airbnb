import { Box, Divider, IconButton, Menu, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CiGlobe } from 'react-icons/ci'
import { IoMenuOutline } from 'react-icons/io5'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { SiAirbnb } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const HelpCenter = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
   <>
    <Box sx={{ width:"100%", height:"100vh", background:"white"}}>
      <Box sx={{ width:"90%", height:"80px",display:"flex", alignItems:"center",justifyContent:"space-between", position:"sticky", top:"0", zIndex:"1000", margin:"0 auto", backgroundColor:"white"}}>
        <Box sx={{ display:"flex", alignItems:"center", gap:"10px"}}>
          <SiAirbnb size={40} color='black' />
          <Typography variant="h6" component="h2">Help Center</Typography>
        </Box>
         {/* Right Side Menu */}
         <Box
            sx={{
              display: { xs: "none", md: 'flex' },
              alignItems: "center",
              gap: 2
            }}
          >
            <Typography
              variant='body1'
              color='#000000'
              sx={{ cursor: "pointer" }}
              onClick={() => handleNavigation('/homepage')}
            >
              Airbnb your home
            </Typography>
            <IconButton sx={{ fontSize: '20px', color: 'black' }}>
              <CiGlobe />
            </IconButton>
            <Paper
              sx={{
                border: "1px solid #E5E4E2",
                borderRadius: "50px",
                padding: "2px"
              }}
            >
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton aria-label='MenuIcon'  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}>
                  <IoMenuOutline color='black' />
                </IconButton>
                <IconButton
                  aria-label='Account'
                  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <AccountCircleTwoToneIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Box>

          {/* Account Menu */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleNavigation('/auth')}>
              Sign up
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/auth')}>
              Login
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleNavigation('/homepage')}>
              Airbnb your home
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/experience')}>
              Host an experience
            </MenuItem>
            <MenuItem onClick={() => handleNavigation('/helpcenter')}>
              Help Centre
            </MenuItem>
          </Menu>
      </Box>
      <Box sx={{ width:"100%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"50px"}}>
            <Typography variant="h3" component="h2">Hi, how can we help?</Typography>
            <TextField  label="Search how to's and more" sx={{width:"50%", marginTop:"20px", '& .MuiOutlinedInput-root':{borderRadius: "40px", }}}/>
      </Box>
    </Box>
   </>
  )
}

export default HelpCenter
