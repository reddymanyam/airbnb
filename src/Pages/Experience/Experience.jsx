import React, { useRef, useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Footer from '../Footer/Footer';
import AccordionCard from '../Accordian/AccordionCard';

const Experience = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null); // Create a reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // Track video playing state

  const handlePausePlay = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
    } else {
      videoRef.current.play(); // Play the video
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <Box>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source
          src="https://stream.media.muscache.com/GLBXMO7wXoGpGzwi6QBynOiqpPONrVB2RQ5KCFSuIxM.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Stack
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 0',
          bgcolor: 'white',
        }}
      >
        <Stack
          sx={{
            width: '80%',
            alignItems: 'flex-start',
            justifyContent: 'left',
            gap: '40px',
          }}
        >
          <Typography variant="h5" sx={{ color: 'black', fontSize: '24px', fontWeight: 700 }}>
            Host an experience on Airbnb
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '4.68rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to left, #008489, #a61d55, #ffb400)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite',
            }}
          >
            Earn money leading people on activities you love.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'sticky',
          top: '0',
          zIndex: '1000',
          bgcolor: 'white',
          padding: '20px 0',
        }}
      >
        <Stack sx={{ width: '80%', alignItems: 'flex-end' }}>
          <Button variant="contained" sx={{ bgcolor: 'black', padding: '11px 25px', borderRadius: '15px' }} onClick={() => navigate('/')}>
            Let’s Go
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: '0',
          zIndex: '100',
          padding: '20px 0',
        }}
      >
        <Stack sx={{ width: '80%', paddingTop:"500px" }}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 700 }}>
            What's an experience?
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            It’s an activity that goes beyond the typical tour or class, designed and led by locals all over the world. Show off your city, craft, cause, or culture by hosting an experience.
          </Typography>
        </Stack>

        <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              padding: '11px 20px',
              borderRadius: '15px',
              fontSize: '15px',
              border: '2px solid white',
              margin: '10px',
            }}
            endIcon={isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
            onClick={handlePausePlay}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Stack>
        <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        bgcolor: "white",
        padding: "90px 200px",
        gap: "100px",
      }}
    >
      {/* Left Title */}
      <Typography
        variant="h4"
        sx={{
          color: "gray",
          fontWeight: 600,
        }}
      >
        Show what you know
      </Typography>

      {/* Right Description */}
      <Typography
        variant="body1"
        sx={{
          color: "black",
          maxWidth: "500px", 
          lineHeight: 1.6, 
        }}
      >
        There are experiences of every kind, like cooking, crafting, kayaking,
        and more. There’s no limit to what you can do. Explore these featured
        categories.
      </Typography>
    </Stack>
    <AccordionCard />
    <Box width="100%" bgcolor="white">
    <Footer />
    </Box>
   
      </Stack>
     
      
      
      {/* CSS for Animation */}
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      
    </Box>
  );
};

export default Experience;
