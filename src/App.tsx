import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layouts
import UserLayout from "./layouts/UserLayout"

// Public Pages (Hamma ko'radigan)
import Home from "./pages/public/Home"
import Services from "./pages/public/Services"
import About from "./pages/public/About"
import Contact from "./pages/public/Contact"

// Auth Pages (Login va Ro'yxatdan o'tish)
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// Private/Patient Pages (Bemor sahifalari)
import Booking from "./pages/patient/Booking"
import Profile from "./pages/patient/Profile"

/**
 * App Komponenti - Loyihaning asosiy marshrutizatsiya (Routing) qismi.
 * Barcha sahifalar shu yerda birlashtiriladi.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        {/* 1. Foydalanuvchi qismi (UserLayout bilan o'ralgan) 
            Bu yo'llarda Sidebar va Bottom Navigation doim ko'rinib turadi.
        */}
        <Route path="/" element={<UserLayout />}>
          {/* Asosiy sahifa */}
          <Route index element={<Home />} />

          {/* Xizmatlar ro'yxati */}
          <Route path="xizmatlar" element={<Services />} />

          {/* Klinika haqida ma'lumot */}
          <Route path="biz-haqimizda" element={<About />} />

          {/* Aloqa ma'lumotlari */}
          <Route path="aloqa" element={<Contact />} />

          {/* Qabulga yozilish (Booking) */}
          <Route path="qabul" element={<Booking />} />

          {/* Profil sahifasi */}
          <Route path="profil" element={<Profile />} />
        </Route>

        {/* 2. Avtorizatsiya qismi (Layoutsiz - To'liq ekran) */}

        {/* Tizimga kirish */}
        <Route path="/login" element={<Login />} />

        {/* Yangi profil yaratish */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
