import React, { useState } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: 'black'}}>
      <div className="navbar">
        <div className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
        <ul className="w-full" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
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