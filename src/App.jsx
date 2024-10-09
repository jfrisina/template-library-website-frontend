// IMPORTS -------------------------------------------------------------------------------------
import { useState } from 'react'

// import images
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import CSS
import './App.css'

// import pages
import Test from './pages/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Test /> */}
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Template Library Website</h1>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}


    </>
  )
}

export default App
