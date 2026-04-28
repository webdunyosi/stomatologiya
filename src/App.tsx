import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";


// Layouts
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout"; // <-- Admin layout

// Public Pages (Hamma ko'radigan)
import Home from "./pages/public/Home";
import Services from "./pages/public/Services";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

// Auth Pages (Login va Ro'yxatdan o'tish)
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Private/Patient Pages (Bemor sahifalari)
import Booking from "./pages/patient/Booking";
import Profile from "./pages/patient/Profile";

// Admin Pages (Boshqaruv paneli sahifalari)
import Dashboard from "./pages/admin/Dashboard";
import Appointments from "./pages/admin/Appointments";
import AdminSettings from "./pages/admin/AdminSettings";
import Patients from "./pages/admin/Patients";
import Doctors from "./pages/admin/Doctors";
import Notifications from "./pages/admin/Notifications";
import AdminAddAppointment from "./pages/admin/AdminAddAppointment";
import { Toaster } from "react-hot-toast";

/**
 * App Komponenti - Loyihaning asosiy marshrutizatsiya (Routing) qismi.
 * Barcha sahifalar shu yerda birlashtiriladi.
 */
const App = () => {
  return (
    <Router>
      {/* Har safar URL o'zgarganda sahifani tepaga (0,0) qaytaradi */}
      <ScrollToTop />

      {/* 2. Toaster komponentini istalgan joyga qo'shing */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        {/* ==========================================
            1. FOYDALANUVCHI QISMI (UserLayout) 
            Sidebar va Header doim ko'rinib turadi
        ========================================== */}
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


        {/* ==========================================
            2. AVTORIZATSIYA (Layoutsiz)
            To'liq ekranli sahifalar
        ========================================== */}
        {/* Tizimga kirish */}
        <Route path="/login" element={<Login />} />

        {/* Yangi profil yaratish */}
        <Route path="/register" element={<Register />} />


        {/* ==========================================
            3. ADMIN PANEL QISMI (AdminLayout)
            Faqat adminlar uchun maxsus layout
        ========================================== */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Asosiy statistika sahifasi */}
          <Route index element={<Dashboard />} />
          
          {/* YANGA QO'SHILGAN QABULLAR SAHIFASI */}
          <Route path="qabullar" element={<Appointments />} />

          {/* YANGA QO'SHILGAN: QABUL QO'SHISH SAHIFASI */}
          <Route path="qabullar/yangi" element={<AdminAddAppointment />} />

          {/* YANGA QO'SHILGAN BEMORLAR SAHIFASI */}
          <Route path="bemorlar" element={<Patients />} />

          {/* YANGA QO'SHILGAN SHIFOKORLAR SAHIFASI */}
          <Route path="shifokorlar" element={<Doctors />} />

          {/* YANGA QO'SHILGAN BILDIRISHNOMALAR */}
          <Route path="bildirishnomalar" element={<Notifications />} />

          {/* PROFIL SOZLAMALARI SAHIFASI */}
          <Route path="sozlamalar" element={<AdminSettings />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;