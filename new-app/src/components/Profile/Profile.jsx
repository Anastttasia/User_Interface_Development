import React from "react";
import { NavLink } from "react-router-dom";

import { Link, useNavigate } from 'react-router-dom';

import s from '../../pages/Signup/Signup.module.css';

const Profile = () => {
    return <div >
        <div className={s.signupPage}>
            <div className={s.signupContainer}>
                <div className={s.signupHeader}>
                    <h1>Профиль</h1>
                </div>

                <div className={s.block}>
                    <p>Анастасия</p>
                </div>

                <div className={s.block}>
                    <p>test.99@gmail.com</p>
                </div>

                <div className={s.signupFooter}>
                    <p><Link to="/signup" className={s.link}>Зарегистрироваться</Link></p>
                </div>
                <div className={s.signupFooter}>
                    <p><Link to="/login" className={s.link}>Войти</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;
