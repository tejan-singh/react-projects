import React,{useContext} from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from './context'

const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useContext(AppContext)

  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar": "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding-addict" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url}>{social.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
