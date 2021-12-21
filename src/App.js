import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './Components/Home';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
