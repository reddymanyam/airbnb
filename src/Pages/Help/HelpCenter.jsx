import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const cards = [
  {
    id: 1,
    img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
    header: "Getting started with Airbnb"
  },
  {
    id: 2,
    img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
    header: "Retired article 3114: Access and manage your account"
  },
  {
    id: 3,
    img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg",
    header: "Help with a reservation"
  },
  {
    id: 4,
    img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png",
    header: "AirCover for guests"
  }
]

const HelpCenter = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", background: "white", marginBottom: "40px" }}>
        <Navbar variant="helpcenter" />
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "50px" }}>
          <Typography variant="h3" component="h2">Hi, how can we help?</Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <TextField
              label="Search how to's and more"
              variant="outlined"
              sx={{
                width: "50%",
                marginTop: "20px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "40px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search"
                      sx={{
                        color: "white",
                        backgroundColor: "#ff385c",
                        height: "45px",
                        width: "45px",
                        '&:hover': { backgroundColor: "#ff385c" },
                      }}
                    >
                      <IoSearch />
                    </IconButton>
                  </InputAdornment>)
              }} />
          </Box>
        </Box>

        <Stack sx={{ margin: "10px auto" }}>
          <Box sx={{ width: '80%', margin: "0 auto" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Guest" {...a11yProps(0)} />
                <Tab label="Host" {...a11yProps(1)} />
                <Tab label="Experience Host" {...a11yProps(2)} />
                <Tab label="Travel admin" {...a11yProps(3)} />
              </Tabs>
            </Box>

            <Stack sx={{ padding: "20px", border: "1px solid gray", borderRadius: "20px", width: "85%", margin: "40px auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

              <Box>
                <Typography variant='h4' component="h2">We’re here for you</Typography>
                <Typography variant='subtitle1' component="h2">Log in to get help with your reservations, account, and more.</Typography>
              </Box>
              <Button variant='contained' sx={{ backgroundColor: '#dc0e63', padding: "12px 120px", borderRadius: "8px" }}>Login or SignUp</Button>
            </Stack>
            {cards.map((item, id) => (
              <>
                <Box sx={{width:"280px", height:"280px"}}>
                  <CustomTabPanel value={value} index={0} key={id}>
                    <Box sx={{ width: "200px", height: "200px", borderRadius: "20px" }}>
                      <img src={item.img} />
                    </Box>
                    <Typography variant='h5'>{item.header}</Typography>
                  </CustomTabPanel>
                </Box>
              </>
            ))}
          </Box>
        </Stack>
        <Footer />
      </Box>
    </>
  )
}

export default HelpCenter
