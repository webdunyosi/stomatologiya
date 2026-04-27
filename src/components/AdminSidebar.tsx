import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, Stethoscope, Settings } from 'lucide-react';

const AdminSidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Qabullar', path: '/admin/qabullar', icon: CalendarDays },
    { name: 'Bemorlar', path: '/admin/bemorlar', icon: Users },
    { name: 'Shifokorlar', path: '/admin/shifokorlar', icon: Stethoscope },
    { name: 'Sozlamalar', path: '/admin/sozlamalar', icon: Settings },
  ];

  return (
    <aside className="w-72 bg-gray-900 text-gray-300 flex flex-col h-full shadow-2xl z-20">
      {/* Admin Logo qismi */}
      <div className="h-20 flex items-center px-8 border-b border-gray-800">
        <h1 className="text-2xl font-black tracking-tight text-white">
          Stoma<span className="text-blue-500">Admin</span>
        </h1>
      </div>

      {/* Menyu */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Asosiy menyu</p>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
              pathname === item.path 
              ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-900/20' 
              : 'hover:bg-gray-800 hover:text-white font-medium'
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;