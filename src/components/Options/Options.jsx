import { Box, Container, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'Countryside', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
  { id: 21, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 22, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 23, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 24, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 25, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 26, label: 'Bed & Breakfast', icon: <AiOutlineCoffee size={24} /> },
  { id: 27, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 28, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 29, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 30, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 31, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 32, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 33, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 34, label: 'Countryside', icon: <GiMountainCave size={24} /> },
  { id: 35, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 36, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 37, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 38, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 39, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 40, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

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
          }, '& .MuiTabs-indicator':{color:"black"} }}>
              {locationsTab.map((tab)=>{
                return <Tab key={tab.id} icon={tab.icon} label={tab.label} sx={{color:"black"}} />;
              })}
          </Tabs>
        </Box>
    </Container>
  )
}

export default Options
