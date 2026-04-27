import React from "react";
import { NavLink } from "react-router-dom";
import s from '../NavBar/Nav.module.css';


const Header = () => {
    return <header >
    <div className={s.item}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        HOME
      </NavLink>
    </div>
        <p>Это header</p>
    </header>
}

export default Header;