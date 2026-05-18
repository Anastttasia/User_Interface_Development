import React from "react";

import imgLogo from '../../icon/star.png'

import s from '../FilterBlock/FilterBlock.module.css'

const FilterBlock = () => {
    return <div className={s.container}>
        <img src={imgLogo} alt="User" className={s.logo}/>
        <p className={s.text}>Категория</p>
    </div>
}

export default FilterBlock;