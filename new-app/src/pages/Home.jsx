import React from "react";

import PromptPage from '../pages/PromptPage/PromptPage';
import FilterContainer from '../components/FilterBlock/FilterContainer';

const HomePage = () => {
    return <div>
        <FilterContainer/>
        <PromptPage />
    </div>
}

export default HomePage;