import React from "react";
import { NavLink } from "react-router-dom";

import s from '../NavBar/Nav.module.css';

import imgLogoUser from '../../icon/user.png'
import imgLogoLike from '../../icon/like.png'


const NavProfile = (props) => {
  return <nav className={s.nav}>

    <div className={s.item}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        <img src={imgLogoUser} alt="User" className={s.logo}/>
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/prompts"
        className={({ isActive }) =>
          isActive ? s.activeLink : undefined
        }
      >
        <img src={imgLogoLike} alt="User" className={s.logo}/>
      </NavLink>
    </div>


        <div className={s.item}>
    </div>

  </nav>
}

export default NavProfile;