import './App.css';
import Profile from './components/Home/Profile';
import Aboutme from './components/About/Aboutme';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Profile />
        <Routes>
          <Route path="Profile" element={<Profile />} />
          <Route path="Aboutme" element={<Aboutme />} />
          <Route path="Resume" element={<Resume/>} />
          <Route path ="Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
