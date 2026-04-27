import { useState } from 'react';
import { Bell, Search, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white border-b border-gray-100 px-4 md:px-8 flex items-center justify-between z-30 sticky top-0">
      
      {/* MOBIL LOGO - Faqat lg ekrandan kichikda ko'rinadi */}
      <div className="lg:hidden flex items-center">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-black text-xl">S</span>
          </div>
          <h1 className="text-lg font-black tracking-tighter text-gray-900 leading-none">
            Stoma<span className="text-blue-600">Admin</span>
          </h1>
        </Link>
      </div>

      {/* DESKTOP QIDIRUV - Mobil holatda yashirinadi */}
      <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
        <div className="relative max-w-md w-full hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Bemorlar yoki qabullarni qidirish..." 
            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
          />
        </div>
      </div>

      {/* O'NG TOMON - Bildirishnomalar va Profil */}
      <div className="flex items-center gap-3 md:gap-6">
        
        {/* Bildirishnomalar (Mobil va Desktopda ko'rinadi) */}
        <Link to="/admin/bildirishnomalar" className="relative p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-all">
          <Bell size={22} />
          <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </Link>
        
        <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

        {/* PROFIL DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 bg-gray-50 lg:bg-white border border-transparent lg:border-gray-100 p-1.5 lg:pl-2 lg:pr-4 lg:py-1.5 rounded-2xl hover:shadow-md transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Administrator</p>
              <p className="text-sm font-bold text-gray-800 leading-none">{user?.name || 'Admin'}</p>
            </div>
            <ChevronDown size={14} className={`text-gray-400 transition-transform hidden lg:block ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown menyu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-100 rounded-[24px] shadow-2xl py-2 animate-in fade-in zoom-in duration-200 z-50">
              <div className="px-4 py-3 border-b border-gray-50 lg:hidden">
                 <p className="text-xs text-gray-400 font-bold uppercase">Administrator</p>
                 <p className="text-sm font-black text-gray-900">{user?.name}</p>
              </div>
              <Link 
                to="/admin/sozlamalar" 
                className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsProfileOpen(false)}
              >
                <User size={16} /> Profil sozlamalari
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} /> Chiqish
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default AdminHeader;