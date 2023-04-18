import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
