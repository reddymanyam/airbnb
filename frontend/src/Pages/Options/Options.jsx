import React, { useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
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
import Cards from '../Cards/Cards';

const locationsTab = [
  { id: 1, label: 'All', icon: <MdOutlineApartment size={24} /> },
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
];

const Options = () => {
  const [value, setValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setSelectedCategory(locationsTab[newValue].label);
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          position: 'sticky',
          top: '80px',
          zIndex: 1000,
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            px: { xs: 0, md: 2 },
            alignItems: 'center',
            mt: 2,
            mb: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            sx={{
              ['&.${tabsClasses.scrollButtons}']: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
              '& .MuiTabs-indicator': { color: 'black' },
            }}
          >
            {locationsTab.map((tab) => (
              <Tab
                key={tab.id}
                icon={tab.icon}
                label={tab.label}
                sx={{ color: 'black' }}
              />
            ))}
          </Tabs>
        </Box>
      </Container>
      <Cards selectedCategory={selectedCategory} />
    </>
  );
};

export default Options;
