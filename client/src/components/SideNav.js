import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { LogosClose, LogosAltair } from './Icons';

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-mobile'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} color={'black'} className='hamburger-menu'/>
          </Link>        
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-exit' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
              <LogosAltair style={{verticalAlign: "unset", height: "2em", width: '2em'}}/>
              <h2 className='navbar-title'>Chess Connect</h2>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} style={{marginTop: '20px'}}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;