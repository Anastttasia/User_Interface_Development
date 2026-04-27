import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/NavBar/Nav';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PromptsHub from './pages/PromptsHub';
import PromptPage from './pages/PromptPage';
import Editor from './pages/Editor';
import KnowledgeBase from './pages/KnowledgeBase';
import Research from './pages/Research';
import Profile from './components/Profile/Profile';
import TemplatePage from './pages/TemplatePage';

function App() {
  return (
    <BrowserRouter>
      
      <div className ='appWrapper'>
        <Header/>
        <Nav/>
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/prompts' element={<PromptPage/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
