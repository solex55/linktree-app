import {Routes, Route, BrowserRouter } from 'react-router-dom';
/* import Header from './components/Header';
import Links from './components/Links';
import Subsection from './components/Subsection';
import Footer from './components/Footer'; */
import Home from './pages/Home';
import Contact from './pages/Contact';




function App() {
  return (
    <div>
      
      {/* <Header />
      <Links />
      <Subsection />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

  </div>


  );
}

export default App;
