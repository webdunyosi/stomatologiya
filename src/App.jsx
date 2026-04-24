import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About" // Shu qatorni qo'shasiz

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biz-haqimizda" element={<About />} />{" "}
            {/* Va shu qatorni qo'shasiz */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
