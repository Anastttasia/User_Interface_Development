import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';
import Prompt from '../../components/Prompt/Prompt';



function PromptPage() {
  return (
    <div>
        <SearchForm/>
        <Prompt />

      </div>
  );
}

export default PromptPage;
