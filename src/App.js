import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import WhatsAppIcon from './components/whatsapp-icon/whatsAppIcon';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Somos from './pages/QuemSomos/QuemSomos';
import FaleConosco from './pages/FalaConosco/FaleConosco';
import PageNotFound from './pages/PageNotFound/PageNotFound.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <WhatsAppIcon />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fale-conosco' element={<FaleConosco />} />
          <Route path='/quem-somos' element={<Somos />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
