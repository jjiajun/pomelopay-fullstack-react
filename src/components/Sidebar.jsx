import React, { useState } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#334155'}}>
      <div className="navbar">
        <div className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </div>
      </div>
      <nav className='nav-menu active'>
        <ul className="w-full" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <FaIcons.FaUserCircle size="30"/>
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-text cursor-default">
                {item.icon}
                <span>{item.title}</span>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;