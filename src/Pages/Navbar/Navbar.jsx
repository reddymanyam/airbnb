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
  MenuItem,
  useMediaQuery
} from '@mui/material';
import { SiAirbnb } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline, IoSearch } from "react-icons/io5";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useNavigate } from 'react-router-dom';
import { RxHome } from "react-icons/rx";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Navbar = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 769px)');

  const handleDatePicker = () => setShowDatePicker(prev => !prev);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleNavigation = (path) => { navigate(path); handleClose(); };
  const handleHome = () => navigate('/dashboard');

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
        width: "95%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Airbnb Logo */}
        <SiAirbnb size={36} color='#ff385c' onClick={handleHome} cursor="pointer" />

        {/* Responsive Search Bar */}
        {isDesktop && variant !== "helpcenter" && (
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
            {showDatePicker && (
              <Box sx={{
                position: 'absolute', top: '100px', width: "300px", zIndex: 1200, background: "#ffffff", borderRadius: "15px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)", border: "1px solid #e0e0e0", padding: "16px", transition: 'all 0.3s ease-in-out',
                transform: showDatePicker ? 'scale(1)' : 'scale(0.95)',
              }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DatePicker',
                      'MobileDatePicker',
                      'DesktopDatePicker',
                      'StaticDatePicker',
                    ]}
                  >
                    <DemoItem label={
                      <Typography fontWeight="bold" fontSize="14px">
                        Select your date for destiny date😉
                      </Typography>
                    }>
                      <DatePicker defaultValue={dayjs('2022-04-17')} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            )}
            <Typography variant='body1' color='black' onClick={handleDatePicker}>Any week</Typography>
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
        )}

        {/* Right Side Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isDesktop && (
            <Typography variant='body1' color='#000000' sx={{ cursor: "pointer" }}
              onClick={() => handleNavigation('/homepage')}>
              Airbnb your home
            </Typography>
          )}

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
          {isMobile && (
            <>
              <MenuItem onClick={() => handleNavigation('/search')}>Search</MenuItem>
              <Divider />
            </>
          )}
          <MenuItem onClick={() => handleNavigation('/auth')}>Sign up</MenuItem>
          <MenuItem onClick={() => handleNavigation('/auth')}>Login</MenuItem>
          <Divider />
          <MenuItem onClick={() => handleNavigation('/homepage')}>Airbnb your home</MenuItem>
          <MenuItem onClick={() => handleNavigation('/experience')}>Host an experience</MenuItem>
          <MenuItem onClick={() => handleNavigation('/helpcenter')}>Help Centre</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
