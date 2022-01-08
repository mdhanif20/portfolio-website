import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './Components/Home';

import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home  to="/home"/>} />
      <Route path="/home" element={<Home />} />
     
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
