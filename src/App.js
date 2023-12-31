import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarProvider } from "./context/NavBarContext";

function App() {
  return (
    <BrowserRouter>
      <NavBarProvider>
        <DesktopNav/>
        <MobileNav />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />}/>
          <Route path="/services" element = {<Services />} />
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </NavBarProvider>
    </BrowserRouter>
  );
}

export default App;
