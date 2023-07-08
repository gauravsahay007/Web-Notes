import logo from './logo.svg';
import './App.css';
import NoteState from './context/Notes/NoteState';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
