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
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";
import KingBedIcon from '@mui/icons-material/KingBed';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
const Item = styled(Paper)({
    backgroundColor: "#fff",
    padding: "8px",
    textAlign: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const ViewDetails = () => {
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
            id:1,
            icon:<KingBedIcon />,
            title:"Sleep, or don’t, on my tour bus",
            subtitle:"Join mi parche on our bus for a week and see what tour life is really like."
        },
        {
            id:2,
            icon:<MusicNoteIcon />,
            title:"Get exclusive tour access",
            subtitle:"You’ll get VIP tickets to a whole week of the FERXXOCALIPSIS tour."
        },
        {
            id:3,
            icon:<CelebrationIcon />,
            title:"Come backstage with me",
            subtitle:"Watch me prep for my show before I go on stage. Make sure to wear green."
        },
        {
            id:4,
            icon:<EarbudsBatteryIcon />,
            title:"Take part in tour traditions",
            subtitle:"Get in on video game tournaments and ugly thrifting challenges."
        }
    ]
    return (
        <>
            <Navbar />
            <Stack spacing={3} width="90%" margin="2px auto" bgcolor="white">
                {/* Title and Icons */}
                <Stack
                    flexDirection={isSmallScreen ? "column" : "row"}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={isSmallScreen ? 2 : 0}
                    textAlign={isSmallScreen ? "center" : "left"}
                >
                    <Typography variant="h4" fontWeight="600">
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
                                height: isSmallScreen ? "250px" : isMediumScreen ? "300px" : "350px",
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
                            -119 ratings
                        </Typography>
                    </Stack>
                </Box>
                <Stack flexDirection="row" spacing={2} gap={2} width="100%" m={0}>
                    <IconButton>
                        <KingBedIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">Sleep, or don’t, on my tour bus</Typography>
                        <Typography variant="body2">Join mi parche on our bus for a week and see what tour life is really like.</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Footer />
        </>
    );
};

export default ViewDetails;
