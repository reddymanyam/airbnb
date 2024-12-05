import React, { useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Dialog
} from '@mui/material';
import { SiAirbnb } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoMenuOutline, IoSearch } from "react-icons/io5";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

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

  const handleDatePicker = () => {
    setIsDatePickerOpen(true);
  };

  const handleDatePickerClose = () => {
    setIsDatePickerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          borderBottom: "1px solid #E5E4E2",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          zIndex: 1000,
          top: 0,
          backgroundColor: "white"
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            margin: "0 auto",
            justifyContent: { xs: "center", md: "space-between" }
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: { xs: 'none', md: "flex" },
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={() => handleNavigation('/homepage')}
          >
            <SiAirbnb size={40} color='#ff385c' />
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#ff385c",
                fontSize: "1.5rem"
              }}
            >
              airbnb
            </Typography>
          </Box>

          {/* Search Bar */}
          <Paper
            elevation={1}
            sx={{
              border: "1px solid #E5E4E2",
              borderRadius: "50px",
              padding: "4px 3px 4px 26px"
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                height: "40px",
                alignItems: "center",
                cursor: "pointer",
                gap: 1
              }}
            >
              <Typography
                variant='body1'
                color='black'
                component={Link}
                to='https://www.google.com/maps'
                sx={{ textDecoration: 'none' }}
              >
                Anywhere
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography
                variant='body1'
                color='black'
                onClick={handleDatePicker}
              >
                Any week
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography
                variant='body1'
                color='gray'
              >
                Add guests
              </Typography>
              <IconButton
                aria-label='SearchIcon'
                sx={{
                  color: "white",
                  backgroundColor: "#ff385c",
                  height: "35px",
                  width: "35px",
                  '&:hover': { backgroundColor: '#ff385c' }
                }}
              >
                <IoSearch />
              </IconButton>
            </Stack>
          </Paper>

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
      </Box>

      {/* Date Picker Dialog */}
      <Dialog open={isDatePickerOpen} onClose={handleDatePickerClose} fullWidth s sx={{
        '& .MuiPaper-root': {
          borderRadius: '30px',
          bgcolor: '#F0F8FF' ,
          padding:"40px"
        }
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DateRangeCalendar />
        </LocalizationProvider>
      </Dialog>
    </>
  );
};

export default Navbar;
