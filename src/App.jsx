// IMPORTS -------------------------------------------------------------------------------------
import { useState } from 'react'

// import images
// import viteLogo from '/vite.svg'

// import CSS
import './App.css'

// import pages
import Test from './pages/Test'

// import components
import Alert from './components/alert/Alert'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import Events from './components/events/Events'
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Alert />
      <Navbar />
      <Hero />
      <Breadcrumb />
      <Events />

      <Footer />
    </>
  )
}

export default App
