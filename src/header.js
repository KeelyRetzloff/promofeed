//navbar component

import React from 'react'
import logo from './assets/tvmlogo.png'
import searchIcon from './assets/search.png'
import menuIcon from './assets/menu.png'

export default function Header() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="icon-wrap">
          <img src={searchIcon} className="App-searchicon" alt="search" />
          <img src={menuIcon} className="App-menuicon" alt="menu" />
        </div>
      </header>
    );
}