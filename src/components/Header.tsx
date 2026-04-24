import { Link } from 'react-router-dom';
import { Smile } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo qismi */}
        <Link to="/" className="flex items-center gap-2">
          <Smile className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Stomatologiya Klinikasi</span>
        </Link>

        {/* Navigatsiya */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md">Bosh sahifa</Link>
          <Link to="/biz-haqimizda" className="text-gray-600 hover:text-blue-600 transition">Biz haqimizda</Link>
          <Link to="/talim" className="text-gray-600 hover:text-blue-600 transition">Ta'lim</Link>
          <Link to="/qabul" className="text-gray-600 hover:text-blue-600 transition">Qabulga yozilish</Link>
          <Link to="/xizmatlar" className="text-gray-600 hover:text-blue-600 transition">Xizmatlar</Link>
          <Link to="/aloqa" className="text-gray-600 hover:text-blue-600 transition">Aloqa</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;