import React from "react";
import { Typography, Link, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

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
                <Grid container spacing={10} sx={{ display: "flex", justifyContent: "space-between" }}>
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
            </Box>
            <hr></hr>
        </>
    );
};

export default Footer;
