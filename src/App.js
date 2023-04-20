import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

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
      <Navbar />
      <WhatsAppIcon />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/quem-somos' element={<Somos />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
