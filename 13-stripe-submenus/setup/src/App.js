import React, {useContext} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { AppContext } from './context'
function App() {
  const data = useContext(AppContext)
  
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </>
  )
}

export default App
