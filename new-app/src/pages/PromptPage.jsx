import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Prompt from '../components/Prompt/Prompt';



function PromptPage() {
  return (
    <div>
        <Prompt/>
        <Prompt/>
        <Prompt/>
        <Prompt/>
      </div>
  );
}

export default PromptPage;
