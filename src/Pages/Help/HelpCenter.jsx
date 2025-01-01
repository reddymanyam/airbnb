import { Box, Typography } from '@mui/material'
import React from 'react'
import { SiAirbnb } from 'react-icons/si'

const HelpCenter = () => {
  return (
   <>
    <Box sx={{ width:"100%", height:"100vh", background:"white"}}>
      <Box sx={{ width:"90%", height:"80px",display:"flex", alignItems:"center",justifyContent:"space-between", position:"sticky", top:"0", zIndex:"1000", margin:"0 auto", backgroundColor:"white"}}>
        <Box sx={{ display:"flex", alignItems:"center", gap:"10px"}}>
          <SiAirbnb size={40} color='black' />
          <Typography variant="h6" component="h2">Help Center</Typography>
        </Box>
      </Box>

    </Box>
   </>
  )
}

export default HelpCenter
