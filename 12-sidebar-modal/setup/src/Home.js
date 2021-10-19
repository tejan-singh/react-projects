import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const {openModel, openSideBar} = useContext(AppContext)
  
  return <main>
    <button className="sidebar-toggle" onClick={openSideBar}>
      <FaBars/>
    </button>
    <button className="btn" onClick={openModel}>show model</button>
  </main>
}

export default Home
