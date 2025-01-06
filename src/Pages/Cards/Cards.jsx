import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import { locations } from '../../data/mockdata';

const ImageCarousel = ({ location, currentIndex, onPrevious, onNext }) => {
  const theme = useTheme();
  return (
    <Card elevation={2}>
      <CardActionArea
        disableRipple
        sx={{
          '&:hover .hoverIcons': {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '50%',
            opacity: 1,
          },
        }}
      >
        <CardMedia
          component="img"
          height="260px"
          image={location.locationImages[currentIndex].url}
          alt={location.location}
        />
        <FavoriteBorderIcon
          sx={{
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
            color: theme.palette.error.main,
          }}
        />
        <KeyboardArrowLeftIcon
          className="hoverIcons"
          sx={{
            position: 'absolute',
            bottom: '60%',
            left: theme.spacing(1),
            cursor: 'pointer',
          }}
          onClick={onPrevious}
        />
        <KeyboardArrowRightIcon
          className="hoverIcons"
          sx={{
            position: 'absolute',
            bottom: '60%',
            right: theme.spacing(1),
            cursor: 'pointer',
          }}
          onClick={onNext}
        />
        <CardContent>
          <Typography variant="body1" component="div">
            {location.location}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {location.days}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {location.price}
          </Typography>
          <Typography variant="body1">{location.rating}*</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Cards = ({ selectedCategory }) => {
  const [currentIndices, setCurrentIndices] = useState(locations.map(() => 0));

  // Filter locations based on the selected category
  const filteredLocations =
    selectedCategory === 'All'
      ? locations
      : locations.filter((location) => location.category === selectedCategory);

  const handlePrevious = (index) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const isFirstSlide = newIndices[index] === 0;
      newIndices[index] = isFirstSlide
        ? locations[index].locationImages.length - 1
        : newIndices[index] - 1;
      return newIndices;
    });
  };

  const handleNext = (index) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const isLastSlide = newIndices[index] === locations[index].locationImages.length - 1;
      newIndices[index] = isLastSlide ? 0 : newIndices[index] + 1;
      return newIndices;
    });
  };

  return (
    <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
      <Grid container spacing={2} sx={{ padding: 2, paddingX: 5 }}>
        {filteredLocations.map((location, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ImageCarousel
              location={location}
              currentIndex={currentIndices[index]}
              onPrevious={() => handlePrevious(index)}
              onNext={() => handleNext(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default Cards;
