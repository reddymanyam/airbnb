import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const Experience = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white" }}>
      {/* Section 1 */}
      <Stack
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 0",
          bgcolor: "white",
        }}
      >
        <Stack
          sx={{
            width: "80%",
            alignItems: "flex-start",
            justifyContent: "left",
            gap: "40px",
          }}
        >
          <Typography variant="h5" sx={{ color: "black", fontSize: "24px", fontWeight: 700 }}>
            Host an experience on Airbnb
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "4.68rem",
              fontWeight: "bold",
              background: "linear-gradient(to left, #008489, #a61d55, #ffb400)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            Earn money leading people on activities you love.
          </Typography>
          <Stack   sx={{
          width: "100%",
          justifyContent: "center",
          bgcolor: "white",
          position:"sticky",
          top:0
        }}>
          <Stack sx={{justifyContent:"center", alignItems:"flex-start"}}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                padding: "15px",
                borderRadius: "15px",
                fontSize: "14px",
                fontWeight: 600
              }}
            >
              Let’s Go
            </Button>
          </Stack>
          </Stack>
         
        </Stack>
      </Stack>

      {/* Section 2 */}
      <Stack sx={{ padding: "40px 20px", gap: 4 }}>
        <Typography variant="h5">
          Host an experience on Airbnb. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Totam explicabo dolorem consequatur quia! Maxime
          consectetur, aliquam blanditiis ex porro exercitationem quo harum
          sunt aut sint reiciendis qui, dolor ipsum repellendus!
        </Typography>
        <Typography variant="h1">
          Earn money leading people on activities you love. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Rem, id assumenda! Natus iste
          tenetur at modi ea consequatur delectus laborum, numquam quidem vero
          tempora, neque ex fugiat odio quaerat voluptas?
        </Typography>
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
