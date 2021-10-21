import React, {useContext} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'

const Navbar = () => {
  const {closeSubmenu, openSubmenu, openSideBar} = useContext(AppContext)

  const showSubMenu = (e) => {
    const text = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    // console.log(tempBtn)
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    openSubmenu(text, {center, bottom})
  }

  const handleSubmenu = (e) => {
  // if className is not "link-btn" for any component then only we will use closeSubmenu
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='nav-logo' src={logo}/>
        <button className='btn toggle-btn' onClick={openSideBar}>
          <FaBars/>
        </button>
      </div>

      <ul className='nav-links'>
        {sublinks.map((link)=>{return (
          <li><button className="link-btn" onMouseOver={showSubMenu}>{link.page}</button></li>
        )})}
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
}

export default Navbar
