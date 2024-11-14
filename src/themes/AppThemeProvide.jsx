import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey, black } from '@mui/material/colors'


const theme = createTheme({
   
    typography:{
        allVariants:{
            fontFamily:"Raleway",
            textTransform:"none",
            fontSize:15,
        },
    },

    palette:{
        primary:{
            main: grey[700]
        },
        secondary:{
            main: black[600]
        },
    }

})


const AppThemeProvide = (prop) => {
  return (
    <ThemeProvider theme={theme}>
            {prop.children}
    </ThemeProvider>
  )
}

export default AppThemeProvide
