// IMPORTS -------------------------------------------------------------------------------------
import { useState } from 'react'

// import images
import viteLogo from '/vite.svg'

// import CSS
import './App.css'

// import pages
import Test from './pages/Test'

// import components
import Navbar from './components/navbar/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

      <h1>Template Library Website</h1>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}


    </>
  )
}

export default App
