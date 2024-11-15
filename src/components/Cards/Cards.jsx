import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import {locations} from '../../data/mockdata';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Cards = () => {
    return (
        <Box sx={{ width: "100%", boxSizing: "border-box" }}>
            <Grid container spacing={2} sx={{ padding: { xs: "2px 18px", md: "3px 40px 15px 40px", lg: "3px 40px 15px 40px" } }}>
                {locations.map((location) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
                    <Card sx={{ borderRadius: "12px" }} elevation={1}>
                        <CardActionArea>
                            <CardMedia component="img" height="260px" image={location.locationImages.map((img)=>(img.url))} alt='resart' />
                            <FavoriteBorderIcon sx={{position:"absolute", top:"8px", right:"8px"}} />
                            <CardContent >
                                <Typography variant='body1' component="div" >{location.location}</Typography>
                                <Typography variant='body1' sx={{ color: "gray" }}>{location.days}</Typography>
                                <Typography variant='body1' sx={{ color: "gray" }} gutterBottom>{location.price}</Typography>
                                <Typography variant='body1'>{location.rating}*</Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Cards
