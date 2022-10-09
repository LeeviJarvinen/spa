import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
