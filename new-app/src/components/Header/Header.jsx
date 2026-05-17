import React from "react";
import { NavLink } from "react-router-dom";

import s from'./Header.module.css';
import imgLogo from '../../icon/ai.png'

import NavProfile from '../NavBar/NavProfile'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
    return <header className={s.header}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        <img src={imgLogo} alt="Logo" className={s.logo}/>
      </NavLink>

        <SearchForm/>

        <NavProfile />
    </header>
}

export default Header;