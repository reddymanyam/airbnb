import React from 'react'
import Navbar from '../Navbar/Navbar'
import Options from '../Options/Options'
import Cards from '../Cards/Cards'
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Options />
      <Cards />
    </>
  )
}

export default Dashboard