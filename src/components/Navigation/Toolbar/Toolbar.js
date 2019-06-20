import React from 'react'
import './_Toolbar.scss'
import Logo from './../../Logo/Logo'
import NavigationItems from './../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
  <header className='Toolbar'>
    <div className='Logo'>
      <Logo />
    </div>
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
    <div className='toggleBtnRight'>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </div>
  </header>
)

export default toolbar
