import React from "react";
import { NavLink } from "react-router-dom";
import s from '../NavBar/Nav.module.css';


const Nav = (props) => {
  return <nav className={s.nav}>

    <div className={s.item}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Profile
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/prompts"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        Prompts
      </NavLink>
    </div>

  </nav>
}

export default Nav;