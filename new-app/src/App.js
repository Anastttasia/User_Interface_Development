import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/NavBar/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SearchPromptPage from './pages/SearchPage/SearchPage';


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

      <Header />
      <Nav />
      <div>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/prompts' element={<PromptPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<SearchPromptPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
