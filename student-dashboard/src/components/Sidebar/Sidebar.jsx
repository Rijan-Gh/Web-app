import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = ({activePage,onNavigate}) => {
  
  return (
    <div className="sidebar">

      <nav className="sidebar-menu">

        <NavLink to='/Overview' className={`menuitem ${activePage==="overview"?"active":""}`}

        onClick={()=>onNavigate('overview')}
        style={{textDecoration: 'none'}}
        >
            Overview
        </NavLink>
        <NavLink to='/Details'
        className={`menuitem ${activePage==="details"?"active":""}`}
        onClick={()=>onNavigate('details')}
        style={{textDecoration: 'none'}}
        >
            Details
        </NavLink>
      </nav>
    </div>
   )
}

export default Sidebar