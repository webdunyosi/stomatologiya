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
    <header className="h-20 bg-white border-b border-gray-200 px-4 md:px-8 flex items-center justify-between z-30 sticky top-0">
      
      {/* Qidiruv qismi */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Bemorlar yoki qabullarni qidirish..." 
            className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-2.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
          />
        </div>
      </div>

      {/* O'ng panel (Bildirishnomalar va Profil) */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200"></div>

        {/* PROFIL VA DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 bg-white border border-gray-100 pl-2 pr-4 py-1.5 rounded-2xl hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-md">
              A
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Administrator</p>
              <p className="text-sm font-bold text-gray-800 leading-none">{user?.name || 'Admin'}</p>
            </div>
            <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Ochiladigan menyu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-[24px] shadow-xl py-2 animate-in fade-in zoom-in duration-200 z-50">
              <Link 
                to="/admin/sozlamalar" 
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsProfileOpen(false)}
              >
                <User size={16} /> Profil sozlamalari
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
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