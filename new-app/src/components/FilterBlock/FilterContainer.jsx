import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FilterBlock from '../FilterBlock/FilterBlock';

import s from'../FilterBlock/FilterBlock.module.css';


function FilterContainer() {
  return (
    <div className={s.containerFilters}>
        <FilterBlock/>
        <FilterBlock/>
        <FilterBlock/>
        <FilterBlock/>
        <FilterBlock/>
      </div>
  );
}

export default FilterContainer;