import React from 'react';
import "./Header.css";
import netflixLogo from '../../../src/assets/imges/netflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        {/* Left section */}
        <div className="header-left">
          <img src={netflixLogo} alt="Netflix Logo" className="logo" />
          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="header-right">
          <ul className="nav-icons">
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li className="profile">
              <AccountBoxIcon />
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;