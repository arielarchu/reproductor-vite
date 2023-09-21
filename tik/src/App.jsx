import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const videoUrl = "https://www.youtube.com/shorts/lEvrGkwDH0Q?feature=share";

  
  return (
    <>
      <div>
        <div className='main'>
        <iframe
        src={videoUrl}
        controls= {false}

        ></iframe>
        </div>
      </div>
    </>
  )
}

export default App
