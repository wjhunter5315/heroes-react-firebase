import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import Avengers from './Pages/Avengers/Avengers';
import XMen from './Pages/XMen/XMen';
import Defenders from './Pages/Defenders/Defenders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='main' element={<Main />} />
        <Route path="avengers" element={<Avengers />} />
        <Route path="xmen" element={<XMen />} />
        <Route path="defenders" element={<Defenders />} />
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
