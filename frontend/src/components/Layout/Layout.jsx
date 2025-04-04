import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Outlet /> {/* This will render the child route that matches the current path */}
    </>
  )
}

export default Layout