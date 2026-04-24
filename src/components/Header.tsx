import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Smile, Menu, X } from 'lucide-react';

const Header = () => {
  // Burger menyu holatini saqlash uchun state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menyuni yopish funksiyasi (biror sahifaga o'tilganda ishlaydi)
  const closeMenu = () => setIsMenuOpen(false);

  // NavLink uchun umumiy dizayn klassi (Active va odatiy holat uchun)
  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive 
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
    }`;

  return (
    <header className="bg-white shadow-md shadow-blue-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo qismi */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 z-50">
          <Smile className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Stomatologiya Klinikasi</span>
        </Link>

        {/* Katta ekranlar uchun navigatsiya (Desktop) */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>Bosh sahifa</NavLink>
          <NavLink to="/biz-haqimizda" className={navLinkClass}>Biz haqimizda</NavLink>
          <NavLink to="/talim" className={navLinkClass}>Ta'lim</NavLink>
          <NavLink to="/qabul" className={navLinkClass}>Qabulga yozilish</NavLink>
          <NavLink to="/xizmatlar" className={navLinkClass}>Xizmatlar</NavLink>
          <NavLink to="/aloqa" className={navLinkClass}>Aloqa</NavLink>
        </nav>

        {/* Kichik ekranlar uchun Burger menyu tugmasi (Mobile) */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menyuni ochish/yopish"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Telefonlar uchun ochiladigan menyu (Mobile Dropdown) */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Bosh sahifa</NavLink>
          <NavLink to="/biz-haqimizda" onClick={closeMenu} className={navLinkClass}>Biz haqimizda</NavLink>
          <NavLink to="/talim" onClick={closeMenu} className={navLinkClass}>Ta'lim</NavLink>
          <NavLink to="/qabul" onClick={closeMenu} className={navLinkClass}>Qabulga yozilish</NavLink>
          <NavLink to="/xizmatlar" onClick={closeMenu} className={navLinkClass}>Xizmatlar</NavLink>
          <NavLink to="/aloqa" onClick={closeMenu} className={navLinkClass}>Aloqa</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;