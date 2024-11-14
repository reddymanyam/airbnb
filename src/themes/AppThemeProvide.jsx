import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'


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
            
        }
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
