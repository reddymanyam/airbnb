import { Stack } from '@mui/material'
import React from 'react'
import Auth from '../../../Auth/Auth';
import HomePage from '../../../Pages/Home/HomePage';
import Experience from '../../../Pages/Experience/Experience';
import HelpCenter from '../../../Pages/Help/HelpCenter';


const Layout = () => {
  return (
    <Stack>
        <Auth />
        <HelpCenter />
        <Experience />
        <HomePage />
    </Stack>
  )
}

export default Layout