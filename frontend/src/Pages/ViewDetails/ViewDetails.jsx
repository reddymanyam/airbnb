import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
    IconButton,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    Grid,
    Box,
    Grid2,
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";
import KingBedIcon from '@mui/icons-material/KingBed';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useEffect } from "react";

const Item = styled(Paper)({
    backgroundColor: "#fff",
    padding: "0px",
    textAlign: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const ViewDetails = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const locationData = useLocation();
    const location = locationData.state?.location;

    // Responsive breakpoints
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    const isMediumScreen = useMediaQuery("(max-width: 960px)");

    if (!location) {
        return <Typography variant="h5">No Data Found</Typography>;
    }

    const items = [
        {
            id: 1,
            icon: <KingBedIcon />,
            title: "Sleep, or don’t, on my tour bus",
            subtitle: "Join mi parche on our bus for a week and see what tour life is really like."
        },
        {
            id: 2,
            icon: <MusicNoteIcon />,
            title: "Get exclusive tour access",
            subtitle: "You’ll get VIP tickets to a whole week of the FERXXOCALIPSIS tour."
        },
        {
            id: 3,
            icon: <CelebrationIcon />,
            title: "Come backstage with me",
            subtitle: "Watch me prep for my show before I go on stage. Make sure to wear green."
        },
        {
            id: 4,
            icon: <EarbudsBatteryIcon />,
            title: "Take part in tour traditions",
            subtitle: "Get in on video game tournaments and ugly thrifting challenges."
        }
    ]

    const reviews = [
        {
            id: 1,
            img: "https://a0.muscache.com/im/pictures/user/User-269567495/original/37b6ed99-12d7-4a71-8825-5326fb86b4ff.jpeg?im_w=240&im_format=avif",
            name: "Kirby",
            address: "Green Bay, Wisconsin",
            review: "I don't think I need to reiterate just how special of an experience this was beyond ecstatic to have the opportunity to be locked in a Blockbuster for an entire..."
        },
        {
            id: 2,
            img: "https://a0.muscache.com/im/pictures/user/e95f0a4e-0297-4fb6-b83b-ee3a26ff5398.jpg?im_w=240&amp;im_format=avif",
            name: "Aika",
            address: "Washington, District of Columbia",
            review: "How’s this This experience was phenomenal. I felt well informed with the communication beforehand. The attention to detail and staff commitment to the experience was seen..."
        },
        {
            id: 3,
            img: "https://a0.muscache.com/im/pictures/user/User-52597631/original/714faf47-42fc-4c58-9803-4afc483fa2d3.jpeg?im_w=240&amp;im_format=avif",
            name: "Heather",
            address: "Winchester, Virginia",
            review: "The entire tour was top notch from beginning to end! The staff was amazing, sweet and so helpful. We were engaged the whole time. Also had no idea we were the last tour they..."
        },
        {
            id: 4,
            img: "https://a0.muscache.com/im/pictures/user/User-221201570/original/b3c59735-0d8c-40a3-91d5-a27e83b63741.jpeg?im_w=240&amp;im_format=avif",
            name: "Brandi",
            address: "Milton, New York",
            review: "This was truly one of the most epic experiences not only I had, but my son had. It happened to work out that we went just before his birthday, and it was a once in a lifetime experience..."
        }

    ]

    const features = [
        {
            icon: <MailOutlineIcon fontSize="large" />,
            title: "Request to book",
            description:
                "Choose your dates, add your guests, then answer a question about why you want to go.",
        },
        {
            icon: <CheckCircleOutlineIcon fontSize="large" />,
            title: "Selection process",
            description:
                "First, we’ll randomly choose a set of potential guests. Next, we’ll review their answers for unique perspectives and connections to the icon. Then, we’ll invite selected guests to book.",
        },
        {
            icon: <ListAltIcon fontSize="large" />,
            title: "Requirements",
            description:
                "You’ll need an active Airbnb account and the app to participate, and be a resident of an eligible country or region. It doesn’t cost anything to submit a request.",
        },
    ];

    return (
        <>
            <Navbar />
            <Stack spacing={2} width="90%" margin="2px auto" bgcolor="white">
                {/* Title and Icons */}
                <Stack
                    flexDirection={isSmallScreen ? "column" : "row"}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={isSmallScreen ? 2 : 0}
                    textAlign={isSmallScreen ? "center" : "left"}
                >
                    <Typography variant="h4" fontWeight="600" marginTop={2}>
                        {location.location}
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton aria-label="Share">
                            <IosShareIcon />
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: "underline", color: "black" }}
                            >
                                Share
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Favorite">
                            <FavoriteBorderIcon />
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: "underline", color: "black" }}
                            >
                                Save
                            </Typography>
                        </IconButton>
                    </Stack>
                </Stack>

                {/* Responsive Image Grid */}
                <Grid container spacing={2} justifyContent="center">
                    {location.locationImages.map((img, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}
                            sx={{
                                height: isSmallScreen ? "250px" : isMediumScreen ? "300px" : "350px"
                            }}
                        >
                            <Item component="img" src={img.url} sx={{ objectFit: "cover" }} />
                        </Grid>
                    ))}
                </Grid>

                {/* Location Details */}
                <Box p="0px 18px" borderRadius={2}>
                    <Typography variant="h6">
                        {location.location}
                    </Typography>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant="body1">
                            {location.days} days,
                        </Typography>
                        <Typography variant="body1">
                            {location.price}
                        </Typography>
                        <Typography variant="body1">
                            {location.category}-view
                        </Typography>
                    </Stack>
                    <Stack flexDirection="row">
                        <Typography variant="body1">
                            <strong>Rating:</strong> ⭐ {location.rating}
                        </Typography>
                        <Typography variant="body1" sx={{ textDecoration: "underline", fontFamily: "Segoe UI Emoji", ml: 2 }}>
                            <strong>{location.reviews} reviews</strong>
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{
                    padding: "12px 0px", borderTop: "1px solid #ccc",
                    borderBottom: "1px solid #ccc"
                }}>
                    {items.map((item, id) => (
                        <Stack flexDirection="row" spacing={2} gap={2} width="100%" m={0} padding="10px" key={id}>
                            <IconButton>
                                {item.icon}
                            </IconButton>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                                <Typography variant="body2">{item.subtitle}</Typography>
                            </Box>
                        </Stack>
                    ))}
                </Box>
                <Stack flexDirection="row" padding="10px 0px">
                    <Typography variant="h6">
                        <strong>⭐{location.rating}</strong>
                    </Typography>
                    <Typography variant="h6" sx={{ textDecoration: "underline", fontFamily: "Segoe UI Emoji", ml: 2 }}>
                        <strong>{location.reviews} reviews</strong>
                    </Typography>
                </Stack>
                <Grid2 container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    {reviews.map((review, id) => (
                        <Grid2 size={6} key={id}>
                            <Box sx={{ margin: '0px 100px 0px 0px' }}>
                                <Stack direction="row" gap={2}>
                                    <img
                                        src={review.img}
                                        alt="User Image"
                                        style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                                    />
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: "600", fontFamily: 'Segoe UI' }}>{review.name} </Typography>
                                        <Typography variant="body1" sx={{ fontFamily: 'Segoe UI' }}>{review.address}</Typography>
                                    </Box>
                                </Stack>
                                <Typography sx={{ fontWeight: "500", fontFamily: 'Segoe UI' }}>★★★★,·September 2020</Typography>
                                <Typography>{review.review}</Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
                <Stack flexDirection="column" borderTop="1px solid gray" borderBottom="1px solid gray" justifyContent="center" alignItems="center">
                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Elvis/original/b8a75b4b-35cc-4b25-b67c-bf6f9f980944.png" style={{ height: "380px", width: "650px" }} />
                    <Typography variant="h1" sx={{ fontFamily: 'Arial' }}>icons</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Arial', width: "50%", textAlign: "center" }}>Extraordinary experiences hosted by the world’s greatest names in music, film, TV, art, sports and more.</Typography>
                </Stack>

                <Box sx={{ maxWidth: 1200, margin: "auto", padding: 4 }}>
                    <Grid container spacing={4} justifyContent="center">
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box display="flex" flexDirection="column" alignItems="left" textAlign="left">
                                    {feature.icon}
                                    <Typography variant="h6" fontWeight="bold" mt={2}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" mt={1}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
            <Footer />
        </>
    );
};

export default ViewDetails;
