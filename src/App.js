import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Slider from './Pages/SliderNav/Slider';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/*" element={<Home  to="/home"/>} >
        <Route path="*" element={<Slider  to="/home"/>} />
         <Route path="about" element={<About  to="/about"/>} />
         <Route path="services" element={<Services  to="/about"/>} />
         <Route path="projects" element={<Projects to="/about"/>} />
         <Route path="contact" element={<Contact  to="/about"/>} />
      </Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
