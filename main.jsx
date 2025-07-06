import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 
import App from './App';         // Login page
import Info from './Info';       // Post-login info page
import Store from './Store';
import Home from './Home';
import LiveStockUpdate from './LiveStockUpdate';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info" element={<Info />} />
      <Route path="/store" element={<Store />} />
      <Route path="/home" element={<Home />} />
      <Route path="/liveStockUpdate" element={<LiveStockUpdate />}/>
    </Routes>
  </BrowserRouter>
);
