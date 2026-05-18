import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Prompt from '../../components/Prompt/Prompt';

import s from'../PromptPage/PromptPage.module.css';



function PromptPage() {
  return (
    <div className={s.containerPrompts}>
        <Prompt/>
        <Prompt/>
        <Prompt/>
        <Prompt/>
        <Prompt/>
      </div>
  );
}

export default PromptPage;
