import { useState } from 'react'
import Register from './components/registration';
import Dashbord from './dashbord/dashbord';
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    
<h1>hello ethiopia</h1>
 <Register />
 <Dashbord/>

    </>
  )
}

export default App
