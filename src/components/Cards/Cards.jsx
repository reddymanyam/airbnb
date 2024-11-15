import { Box, Card, CardActionArea, CardContent, CardMedia} from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';


const Cards = () => {
  return (
   <Box sx={{width:"100%", boxSizing:"border-box"}}>
   <Grid container spacing={2}>
        <Grid item size={{xs:12, md:6, lg:3}} sx={{borderRadius:"20px"}}>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia  component="img" height="100px" image='' alt='resart'/>
                        <CardContent>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
        </Grid>
   </Grid>
   </Box>
  )
}

export default Cards
