import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Experience = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Stack sx={{ width: "100%",  bgcolor: "white", justifyContent: "center", alignItems: "center", padding: "60px 0",  }}>
        <Stack sx={{ width: "80%", alignItems: "flex-start", justifyContent: 'left', gap: '40px' }}>
        <Typography variant='h5'>Host an experience on Airbnb</Typography>
      <Typography variant='h2' font>Earn money leading people on activities you love.</Typography>
      <Stack sx={{}}> 
       <Button variant='contained' sx={{bgcolor:"black", padding:"15px", borderRadius:"15px"}}>Lets Go</Button>

      </Stack>
        </Stack>
      </Stack>

      <Stack sx={{color:"white"}}>
      <Typography variant='h5'>Host an experience on Airbnb Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo dolorem consequatur quia! Maxime consectetur, aliquam blanditiis ex porro exercitationem quo harum sunt aut sint reiciendis qui, dolor ipsum repellendus!</Typography>
      <Typography variant='h1'>Earn money leading people on activities you love. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id assumenda! Natus iste tenetur at modi ea consequatur delectus laborum, numquam quidem vero tempora, neque ex fugiat odio quaerat voluptas?</Typography>
      </Stack>


    </Box>
  );
};

export default Experience;
