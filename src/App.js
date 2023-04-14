import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
