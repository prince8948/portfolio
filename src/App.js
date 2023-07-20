import './App.css';
import Profile from './components/Home/Profile';
import Aboutme from './components/Home/Aboutme';
import Resume from './components/Home/Resume';
import Contact from './components/Home/Contact';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Profile />
      {/* <Aboutme />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Navigate to="Profile" />} />
        <Route path="Aboutme" element={<Aboutme />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
