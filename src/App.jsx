// IMPORTS -------------------------------------------------------------------------------------
import { useState } from 'react'

// import images
// import viteLogo from '/vite.svg'

// import CSS
import './App.css'
// import 'uswds/dist/css/uswds.min.css';

// import pages
import Test from './pages/Test'

// import components
import Alert from './components/alert/Alert'
import Navbar from './components/navbar/Navbar'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import Events from './components/events/Events'
import Footer from "./components/footer/Footer"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Alert />
      <Navbar />
      <Breadcrumb />
      <Events />


      <h1>Template Library Website</h1>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

    <Footer />
    </>
  )
}

export default App
