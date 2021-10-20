import React, {useContext} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'

const Navbar = () => {
  const {openSideBar} = useContext(AppContext)

  return <nav className='nav'>
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='nav-logo' src={logo}/>
        <button className='btn toggle-btn' onClick={openSideBar}>
          <FaBars/>
        </button>
      </div>

      <ul className='nav-links'>
        {sublinks.map((link)=>{return (
          <li><button className="link-btn">{link.page}</button></li>
        )})}
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
}

export default Navbar
