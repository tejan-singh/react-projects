import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page} = useContext(AppContext)
  const container = useRef(null)
  const [column, setColumn] = useState('col-2')
  useEffect(() => {
    const {center, bottom} = location
    const submenuContainer = container.current

    //styling the submenuContainer by setting position
    submenuContainer.style.left = `${center}px`
    submenuContainer.style.top = `${bottom}px`

    setColumn('col-2')
    if(page.links.length === 3){
      setColumn('col-3')
    }

    if(page.links.length > 3){
      setColumn('col-4')
    }
    
  }, [location])
  return (
    <aside className={isSubmenuOpen ? "submenu show": "submenu"} ref={container}>
        <h4>{page.page}</h4>
        <div className={`submenu-center ${column}`}>{
          page.links.map((link,index) => {return (<a key={index} href='#'>{link.icon} {link.label}</a>)})
        }</div>
    </aside>
  )
}

export default Submenu
