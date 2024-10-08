import { useState } from 'react'

import UploadCsv from './uploadcsv/UploadCsv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:'100vw' ,height:'100vh'}}>
       <UploadCsv/>
   
    </div>
  )
}

export default App
