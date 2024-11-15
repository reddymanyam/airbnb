import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { locations } from '../../data/mockdata';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Cards = () => {

    const [currentIndices, setCurrentIndices] = useState(
        locations.map(() => 0) 
    );

    const goToPrevious = (index) => {
        setCurrentIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            const isFirstSlide = newIndices[index] === 0;
            newIndices[index] = isFirstSlide ? locations[index].locationImages.length - 1 : newIndices[index] - 1;
            return newIndices;
        });
    };

    const goToNext = (index) => {
        setCurrentIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            const isLastSlide = newIndices[index] === locations[index].locationImages.length - 1;
            newIndices[index] = isLastSlide ? 0 : newIndices[index] + 1;
            return newIndices;
        });
    };

    return (
        <Box sx={{ width: "100%", boxSizing: "border-box" }}>
            <Grid container spacing={2} sx={{ padding: { xs: "2px 18px", md: "3px 40px 15px 40px", lg: "3px 40px 15px 40px" } }}>
                {locations.map((location, index) => (
                    <Grid item key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Card sx={{ borderRadius: "12px" }} elevation={1}  >
                            <CardActionArea disableRipple sx={{ '&:hover .hoverIcons': { backgroundColor: "white", borderRadius: "50%", opacity: 1 } }}>
                                <CardMedia
                                    component="img"
                                    height="260px"
                                    image={location.locationImages[currentIndices[index]].url}
                                    alt="carousel"
                                />
                                <FavoriteBorderIcon sx={{ position: "absolute", top: "8px", right: "8px" }} />
                                <KeyboardArrowLeftIcon
                                    className="hoverIcons"
                                    sx={{ position: "absolute", bottom: "61%", left: "5px", cursor: "pointer" }}
                                    onClick={() => goToPrevious(index)}
                                />
                                <KeyboardArrowRightIcon
                                    className="hoverIcons"
                                    sx={{ position: "absolute", bottom: "61%", right: "5px", cursor: "pointer" }}
                                    onClick={() => goToNext(index)}
                                />
                                <CardContent>
                                    <Typography variant="body1" component="div">{location.location}</Typography>
                                    <Typography variant="body1" sx={{ color: "gray" }}>{location.days}</Typography>
                                    <Typography variant="body1" sx={{ color: "gray" }} gutterBottom>{location.price}</Typography>
                                    <Typography variant="body1">{location.rating}*</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Cards;
