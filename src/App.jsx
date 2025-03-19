import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About/AboutUs'
import AppLayout from './Components/AppLayout/AppLayout'
import ContactUs from './Pages/ContactUs/ContactUs'
import CountryDetails from './Pages/CountryDetails/CountryDetails'
import NotFound from './Pages/404/NotFound'

function App() {

  return (
    <>


      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/' element={<Home />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/:name' element={<CountryDetails />} />
          <Route path='*' element={<NotFound />} />

        </Route>


      </Routes>



    </>
  )
}

export default App
