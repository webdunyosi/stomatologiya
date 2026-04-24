import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About" // Shu qatorni qo'shasiz
import Education from "./pages/Education"
import Appointment from "./pages/Appointment"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biz-haqimizda" element={<About />} />{" "}
            <Route path="/talim" element={<Education />} />
            <Route path="/qabul" element={<Appointment />} />
            <Route path="/xizmatlar" element={<Services />} />
            <Route path="/aloqa" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
