import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import WhatsAppIcon from './components/whatsapp-icon/whatsAppIcon';

//Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhatsAppIcon />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
