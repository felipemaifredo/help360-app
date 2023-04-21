import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { useEffect } from "react";

//Components
import Navbar from './components/Navbar/Navbar';
import WhatsAppIcon from './components/whatsapp-icon/whatsAppIcon';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Somos from './pages/QuemSomos/QuemSomos';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <WhatsAppIcon />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quem-somos' element={<Somos />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
