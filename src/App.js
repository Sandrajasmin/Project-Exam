// import useState
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/homepage/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
