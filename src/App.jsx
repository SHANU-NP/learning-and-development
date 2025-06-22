import { useState } from 'react'
import Search from './component/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
   <Search></Search>
      
    </div>
  )
}

export default App
