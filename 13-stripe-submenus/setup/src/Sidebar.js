import React, {useContext} from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSideBar} = useContext(AppContext)
  return (
    <div className={
      isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
    }>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((links) => {
            return (
              <article>
                <h4>{links.page}</h4>
                <div className="sidebar-sublinks">
                  {links.links.map((subLink) => {
                    return (
                      <a href="#">
                        {subLink.icon}
                        {subLink.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
