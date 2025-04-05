import { Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
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
    id: 0,
    header: "Guides for getting started",
    images: [
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png",
    ],
    footer: "Getting started with Airbnb"
  },
  {
    id: 1,
    header: "Guides for hosts",
    images: [
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg",
    ],
    footer: "Hosting on Airbnb"
  },
  {
    id: 2,
    header: "Guides for Experience Hosts",
    images: [
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png",
    ],
    footer: "Experience Hosting"
  },
  {
    id: 3,
    header: "Guides for travel admins",
    images: [
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt7b9def132e4aa927/help-with-a-reservation-optimized.jpg",
    ],
    footer: "Travel Administration"
  }
];


const HelpCenter = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Box sx={{ width: '90%', margin: "0 auto" }}>
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
              <CustomTabPanel value={value} index={id} key={id}>
                <Typography variant='h5' gutterBottom sx={{ fontWeight: 600 }}>
                  {item.header}
                </Typography>
                <Box sx={{ display: "flex", gap: "20px", overflowX: "auto", padding: "10px" }}>
                  {item.images.map((imgSrc, imgIndex) => (
                    <img key={imgIndex} src={imgSrc} style={{ width: "250px", height: "250px", borderRadius: "20px" }} />
                  ))}
                </Box>
                <Typography variant='h6' sx={{ fontWeight: 700 }}>
                  {item.footer}
                </Typography>
              </CustomTabPanel>
            ))}
          </Box>
        </Stack>

        <Stack sx={{ bgcolor: "black", height: "420px", padding: "60px 100px", color: 'white', gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>Explore more</Typography>
          <Stack flexDirection="row" gap={4}>
            <Card sx={{ width: 400, borderRadius: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfd0c4aa52a78e466/618406a16676ac790d1b8f8f/policy-feature-page-banner-optimized.png"
                  alt="green iguana"
                />
                <CardContent sx={{ padding: "8px", background: "#222222", color: "white" }}>
                  <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>Our community policies </Typography>
                  <Typography variant='subtitle2'>How we build a foundation of trust.</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: 400, borderRadius: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png"
                  alt="green iguana"
                />
                <CardContent sx={{ padding: "8px", background: "#222222", color: "white" }}>
                  <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>Safety tips and guidelines</Typography>
                  <Typography variant='subtitle2'>Resources to help travellers stay safe.</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Stack gap={2} sx={{ width: "350px" }} >
              <Typography variant='h5'>Need to get in touch?</Typography>
              <Typography variant='body1'>We’ll start with some questions and get you to the right place.</Typography>
              <Button variant='contained' sx={{ background: "white", color: "black", fontWeight: "bold", fontSize: "16px", width: "90%", alignSelf: "center", }}>Contact us</Button>
              <Typography variant='subtitle1'>You can also, <a href="#" style={{ textDecoration: "underline", color: "white" }}>give us feedback.</a></Typography>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Box>
    </>
  )
}

export default HelpCenter
