import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DesktopNav/>
      <MobileNav />
      <Routes>
        <Route path="/home" element = {<Home />} />
        <Route path="/about" element = {<About />}/>
        <Route path="/services" element = {<Services />} />
        <Route path="/" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
