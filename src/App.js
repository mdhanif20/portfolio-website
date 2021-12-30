import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home  to="/home"/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
