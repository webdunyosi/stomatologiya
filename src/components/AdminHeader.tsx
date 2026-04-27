import { Bell, Search, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between z-10 sticky top-0">
      
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
      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-none">{user?.name || 'Admin'}</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center font-bold shadow-md">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;