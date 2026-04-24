import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponentlar
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Sahifalar
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Appointment from './pages/Appointment';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* ScrollToTop komponenti <Routes> dan tashqarida bo'lishi kerak.
        Bu har safar URL o'zgarganda sahifani tepaga (0,0) qaytaradi.
      */}
      <ScrollToTop />

      <Routes>
        {/* Layout komponenti Header va Footer-ni o'z ichiga oladi.
          U barcha ichki sahifalar uchun o'rovchi (wrapper) vazifasini bajaradi.
        */}
        <Route path="/" element={<Layout />}>
          
          {/* Asosiy sahifa (Bosh sahifa) */}
          <Route index element={<Home />} />
          
          {/* Ichki sahifalar */}
          <Route path="biz-haqimizda" element={<About />} />
          <Route path="talim" element={<Education />} />
          <Route path="qabul" element={<Appointment />} />
          <Route path="xizmatlar" element={<Services />} />
          <Route path="aloqa" element={<Contact />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;