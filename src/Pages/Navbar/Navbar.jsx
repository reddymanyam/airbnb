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

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      {/* Navbar Container */}
      <Box
        sx={{
          width: "100%",
          height: "80px",
          borderBottom: "1px solid #E5E4E2",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            margin: "0 auto",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: { xs: 'none', md: "flex" },
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleNavigation('/homepage')}
          >
            <SiAirbnb size={40} color="#ff385c" />
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#ff385c",
                fontSize: "1.5rem",
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
              padding: "4px 26px",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ height: "40px", cursor: "pointer" }}
            >
              <Typography
                variant="body1"
                component={Link}
                to="https://www.google.com/maps"
                sx={{ textDecoration: "none", color: "black" }}
              >
                Anywhere
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="body1"
                onClick={() => setIsDatePickerOpen(true)}
                sx={{ cursor: "pointer", color: "black" }}
              >
                Any week
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="body1" color="gray">
                Add guests
              </Typography>
              <IconButton
                aria-label="Search"
                sx={{
                  color: "white",
                  backgroundColor: "#ff385c",
                  '&:hover': { backgroundColor: '#ff385c' },
                }}
              >
                <IoSearch />
              </IconButton>
            </Stack>
          </Paper>

          {/* Right Side Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{ cursor: "pointer", color: "#000" }}
              onClick={() => handleNavigation('/homepage')}
            >
              Airbnb your home
            </Typography>
            <IconButton>
              <CiGlobe fontSize="20px" />
            </IconButton>
            <Paper
              sx={{
                border: "1px solid #E5E4E2",
                borderRadius: "50px",
                padding: "2px",
              }}
            >
              <Stack direction="row">
                <IconButton
                  onClick={handleMenuOpen}
                  aria-controls={anchorEl ? 'account-menu' : undefined}
                  aria-haspopup="true"
                >
                  <IoMenuOutline />
                </IconButton>
                <IconButton
                  onClick={handleMenuOpen}
                  aria-controls={anchorEl ? 'account-menu' : undefined}
                  aria-haspopup="true"
                >
                  <AccountCircleTwoToneIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Box>

          {/* Account Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {[
              { label: "Sign up", path: "/auth" },
              { label: "Login", path: "/auth" },
              { label: "Airbnb your home", path: "/homepage" },
              { label: "Host an experience", path: "/experience" },
              { label: "Help Centre", path: "/helpcenter" },
            ].map(({ label, path }) => (
              <MenuItem key={label} onClick={() => handleNavigation(path)}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      {/* Date Picker Dialog */}
      <Dialog
        open={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        fullWidth
        sx={{
          '& .MuiPaper-root': {
            borderRadius: "30px",
            bgcolor: "#F0F8FF",
            padding: "50px",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangeCalendar />
        </LocalizationProvider>
      </Dialog>
    </>
  );
};

export default Navbar;
