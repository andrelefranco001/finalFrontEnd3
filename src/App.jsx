import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useState } from "react";
import ThemesB from "./Funtions/themeButton";
import themeicon from './Assets/day-and-night.png'


const themeStyles = {
  dark: {
    background: '#12121296',
    textColor: 'white'
  },
  light: {
    background: 'white',
    textColor: '#12121296'
  }
}

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  // id="headerApp" style={{backgroundColor: themeStyles[theme].background}}
 
  return (

      <div className="App" >
          <Navbar />
          
          
      <header id="headerApp" style={{backgroundColor: themeStyles[theme].background, color: themeStyles[theme].textColor}}>
      <a id="dayN"><img class="img-fluid rounded" src={themeicon} alt="ligth/dark" onClick={toggleTheme} /></a>
          <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dentist/:id" element={<Detail />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
            </Routes>
          </BrowserRouter>
          <Footer />
          </header>
      </div>
  );
}

export default App;
