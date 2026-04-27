import { Search, User, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="px-4 py-4 md:px-8 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100/50">
      
      {/* 1. Qidiruv paneli - Zamonaviy dizayn */}
      <div className="relative max-w-md flex-1 hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Xizmatlar, shifokorlar qidiruvi..." 
          className="w-full bg-gray-100/50 border border-transparent focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-2.5 rounded-2xl outline-none transition-all duration-300 text-sm"
        />
      </div>

      {/* Mobil logo (Sidebar yo'q paytda ko'rinishi uchun) */}
      <div className="lg:hidden font-black text-2xl tracking-tighter text-blue-600">
        Stoma<span className="text-gray-900">Care</span>
      </div>

      {/* 2. Profil va Kirish qismi */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          /* LOGIN QILGAN FOYDALANUVCHI UCHUN */
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 bg-white border border-gray-100 pl-2 pr-4 py-1.5 rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-blue-200 shadow-lg">
                <User size={18} />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Bemor</p>
                <p className="text-sm font-bold text-gray-800 leading-none">{user?.name}</p>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menyusi */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-[24px] shadow-xl py-2 animate-in fade-in zoom-in duration-200">
                <Link 
                  to="/profil" 
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <User size={16} /> Profil sozlamalari
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsProfileOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} /> Chiqish
                </button>
              </div>
            )}
          </div>
        ) : (
          /* LOGIN QILMAGAN MEHMON UCHUN */
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right mr-2">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Xush kelibsiz</p>
              <p className="text-sm font-bold text-gray-800 italic">Bemor</p>
            </div>
            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 font-bold text-sm"
            >
              <User size={18} />
              <span>Kirish</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;