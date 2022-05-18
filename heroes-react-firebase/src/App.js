import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import Avengers from './Pages/Avengers/Avengers';
import XMen from './Pages/XMen/XMen';
import Defenders from './Pages/Defenders/Defenders';
import Hero from './Pages/Hero/Hero';

function App() {
  return (
    <div className="root">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="avengers" element={<Avengers />} />
          <Route path="xmen" element={<XMen />} />
          <Route path="defenders" element={<Defenders />} />
          <Route path=":id" element={<Hero />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
