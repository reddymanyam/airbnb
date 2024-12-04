import React from "react";
import { Typography, Link, Box, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
    const sections = [
        {
            title: "Support",
            items: [
                "Help Centre",
                "AirCover",
                "Anti-discrimination",
                "Disability support",
                "Cancellation options",
                "Report neighbourhood concern",
            ],
        },
        {
            title: "Hosting",
            items: [
                "Airbnb your home",
                "AirCover for Hosts",
                "Hosting resources",
                "Community forum",
                "Hosting responsibly",
                "Join a free Hosting class",
                "Find a co-host",
            ],
        },
        {
            title: "Airbnb",
            items: [
                "Newsroom",
                "New features",
                "Careers",
                "Investors",
                "Airbnb.org emergency stays",
            ],
        },
    ];

    return (
        <>
            <hr></hr>
            <Box sx={{ width: "85%", margin: "9px auto", padding: "2rem", backgroundColor: "#f9f9f9" }}>
                <Grid container spacing={10} justifyContent="space-between" alignItems="center" marginBottom="30px">
                    {sections.map((section, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                                {section.title}
                            </Typography>
                            {section.items.map((item, idx) => (
                                <Typography
                                    key={idx}
                                    variant="body1"
                                    sx={{ marginBottom: "0.5rem" }}
                                >
                                    <Link href="#" underline="hover" color="inherit">
                                        {item}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>

                <hr></hr>
                <Grid container justifyContent="space-between" alignItems="center" margin="30px 0 40px">
                    {/* Left Section */}
                    <Grid item>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            © 2024 Airbnb, Inc. ·{" "}
                            <Link href="#" underline="hover" color="inherit">
                                Privacy
                            </Link>{" "}
                            ·{" "}
                            <Link href="#" underline="hover" color="inherit">
                                Terms
                            </Link>{" "}
                            ·{" "}
                            <Link href="#" underline="hover" color="inherit">
                                Sitemap
                            </Link>{" "}
                            ·{" "}
                            <Link href="#" underline="hover" color="inherit">
                                Company details
                            </Link>
                        </Typography>
                    </Grid>

                    {/* Right Section */}
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            {/* Language Selector */}
                            <Box display="flex" alignItems="center" sx={{ marginRight: "1rem" }}>
                                <LanguageIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
                                <Typography variant="body2">English (IN)</Typography>
                            </Box>

                            {/* Currency Selector */}
                            <Box display="flex" alignItems="center" sx={{ marginRight: "1rem" }}>
                                <Typography variant="body2">$ TWD</Typography>
                            </Box>

                            {/* Social Icons */}
                            <IconButton component="a" href="https://www.facebook.com/AirbnbIndia" target="_blank" rel="noopener noreferrer" sx={{ color: "black" }}>
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton component="a" href="https://x.com/i/flow/login?redirect_after_login=%2Fairbnb_in" target="_blank" rel="noopener noreferrer" sx={{ color: "black" }}>
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                            <IconButton component="a" href="https://www.instagram.com/airbnb/" target="_blank" rel="noopener noreferrer" sx={{ color: "black" }} >
                                <InstagramIcon fontSize="small" />
                            </IconButton>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;
