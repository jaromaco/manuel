

// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Contactdata from './components/common/Contactdata';
import Home from './components/home/Home';
import About from './components/about-me/About';
import Services from './components/services/Services';
import Galery from './components/galery/Galery';
import Contact from './components/contact/Contact'

function App() {
  return (
    
    <BrowserRouter>
      <Contactdata/>
        <Header/>
        <div className='contain'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:servicio" element={<Services />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;