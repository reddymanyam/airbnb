import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  Menu,
  MenuItem
} from '@mui/material';
import { SiAirbnb } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline, IoSearch } from "react-icons/io5";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useNavigate } from 'react-router-dom';
import { RxHome } from "react-icons/rx";

const Navbar = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleNavigation = (path) => { navigate(path); handleClose(); };
  const handleHome = () => navigate('/homepage');

  return (
    <Box sx={{
      width: "100%",
      height: "80px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "white",
      borderBottom: variant === "homepage" ? "none" : "1px solid #E5E4E2",
      display: "flex",
      alignItems: "center"
    }}>
      <Box sx={{
        width: variant === "homepage" ? "91%" : "95%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Airbnb Logo */}
        <SiAirbnb size={36} color='#ff385c' onClick={handleHome} cursor="pointer" />

        {variant === "homepage" ? (
          // 🎯 Homepage Variant
          <Stack sx={{ flexDirection: "row", gap: "30px", alignItems: "center" }}>
            <Typography color='black' variant='body1' sx={{ fontWeight: 500 }}>
              Ready to Airbnb it?
            </Typography>
            <Button sx={{ bgcolor: '#d90166', borderRadius: "15px", minWidth: "200px" }} variant='contained'>
              <RxHome size={28} />
              <Typography color='white' variant='h6'
                sx={{ fontWeight: 500, fontSize: "20px", marginLeft: "10px", textTransform: "none" }}>
                Airbnb Setup
              </Typography>
            </Button>
          </Stack>
        ) : (
          // 🎯 Default Variant
          <>
            {/* Search Bar */}
            <Paper elevation={1} sx={{
              border: "1px solid #E5E4E2",
              borderRadius: "50px",
              padding: "4px 3px 4px 26px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer"
            }}>
              <Typography variant='body1' color='black'>Anywhere</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant='body1' color='black'>Any week</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant='body1' color='gray'>Add guests</Typography>
              <IconButton sx={{
                color: "white",
                backgroundColor: "#ff385c",
                height: "35px",
                width: "35px",
                '&:hover': { backgroundColor: '#ff385c' }
              }}>
                <IoSearch />
              </IconButton>
            </Paper>

            {/* Right Side Menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant='body1' color='#000000' sx={{ cursor: "pointer" }}
                onClick={() => handleNavigation('/homepage')}>
                Airbnb your home
              </Typography>
              <IconButton sx={{ fontSize: '20px', color: 'black' }}>
                <CiGlobe />
              </IconButton>
              <Paper sx={{
                border: "1px solid #E5E4E2",
                borderRadius: "50px",
                padding: "2px"
              }}>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton onClick={handleClick}>
                    <IoMenuOutline color='black' />
                  </IconButton>
                  <IconButton onClick={handleClick}>
                    <AccountCircleTwoToneIcon />
                  </IconButton>
                </Stack>
              </Paper>
            </Box>

            {/* Account Menu */}
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={() => handleNavigation('/auth')}>Sign up</MenuItem>
              <MenuItem onClick={() => handleNavigation('/auth')}>Login</MenuItem>
              <Divider />
              <MenuItem onClick={() => handleNavigation('/homepage')}>Airbnb your home</MenuItem>
              <MenuItem onClick={() => handleNavigation('/experience')}>Host an experience</MenuItem>
              <MenuItem onClick={() => handleNavigation('/helpcenter')}>Help Centre</MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
