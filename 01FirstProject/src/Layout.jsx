import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'


function Layout() {
  return (
  <>
   <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout