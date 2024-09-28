import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Team from './pages/Team';
import Mods from './pages/Mods';
import Socials from './pages/Socials';
import Philosophy from './pages/Philosophy';
import './App.css';

function App() {
  return (
    <Router>
      <div className='root-sub'>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/philosophy" element={<Philosophy />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
