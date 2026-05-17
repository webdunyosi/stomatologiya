import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  Stethoscope, 
  Settings, 
  Bell, 
  PlusCircle // Yangi qabul uchun ikonka
} from 'lucide-react';

const AdminSidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Bildirishnomalar', path: '/admin/bildirishnomalar', icon: Bell },
    { name: 'Qabullar', path: '/admin/qabullar', icon: CalendarDays },
    { name: 'Yangi qabul', path: '/admin/qabullar/yangi', icon: PlusCircle }, // <-- Yangi qo'shilgan bo'lim
    { name: 'Bemorlar', path: '/admin/bemorlar', icon: Users },
    { name: 'Shifokorlar', path: '/admin/shifokorlar', icon: Stethoscope },
    { name: 'Sozlamalar', path: '/admin/sozlamalar', icon: Settings },
  ];

  return (
    <aside className="w-72 bg-gray-900 text-gray-300 flex flex-col h-full shadow-2xl z-20">
      {/* Admin Logo qismi */}
      <div className="h-20 flex items-center px-8 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 p-2 rounded-xl shadow-lg shadow-amber-500/20">
            <span className="font-black text-xl text-blue-900 leading-none block">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100 leading-none">
              DENTA
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase mt-1">
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* Menyu */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
        <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Asosiy menyu</p>
        
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-900/20' 
                : 'hover:bg-gray-800 hover:text-white font-medium'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-white' : 'text-gray-400'} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Pastki qismda yordamchi ma'lumot (Ixtiyoriy) */}
      <div className="p-6 bg-gray-800/30 m-4 rounded-2xl border border-gray-800">
        <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Versiya</p>
        <p className="text-xs text-gray-400 mt-1 font-bold">Denta Abu-Muslim Admin v1.0.2</p>
      </div>
    </aside>
  );
};

export default AdminSidebar;