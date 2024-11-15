import { Box, Container, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import locationsTab from "../../data/mockdata.js"
const Options = () => {
    const [value, setValue] = useState(0);

    const handleChange =(e,newValue) =>{
        setValue(newValue)
    }
  return (
    <Container maxWidth="xl">
        <Box sx={{display:"flex", flexGrow:1, px:{xs:0, md:2}, alignItems:"center", mt:2, mb:2}}>
          <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons sx={{['&.${tabsClasses.scrollButtons}']:{
            '&.Mui-disabled':{opacity:0.3},
          }}}>
              {locationsTab.map((tab)=>{
                return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
              })}
          </Tabs>
        </Box>
    </Container>
  )
}

export default Options
