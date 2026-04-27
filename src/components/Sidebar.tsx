import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Stethoscope, Calendar, Phone, UserCircle } from 'lucide-react';

const Sidebar = () => {
  const { pathname } = useLocation();

  // Menyudagi bo'limlar ro'yxati
  const menuItems = [
    { name: 'Asosiy', path: '/', icon: Home },
    { name: 'Xizmatlar', path: '/xizmatlar', icon: Stethoscope },
    { name: 'Qabul', path: '/qabul', icon: Calendar },
    { name: 'Profil', path: '/profil', icon: UserCircle }, // Profil bo'limi qo'shildi
    { name: 'Haqida', path: '/biz-haqimizda', icon: Info },
    { name: 'Aloqa', path: '/aloqa', icon: Phone },
  ];

  return (
    <div className="p-6 flex flex-col h-full">
      {/* Logotip */}
      <div className="mb-12">
        <h1 className="text-2xl font-black tracking-tight text-white">
          Stoma<span className="text-blue-200">Care</span>
        </h1>
      </div>

      {/* Navigatsiya menyusi */}
      <nav className="space-y-2 flex-grow">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
              pathname === item.path 
              ? 'bg-white text-blue-600 shadow-lg scale-105 font-bold' 
              : 'hover:bg-white/10 text-blue-50 font-medium'
            }`}
          >
            <item.icon size={22} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Pastki qismdagi qo'shimcha ma'lumot (Ixtiyoriy) */}
      <div className="mt-auto pt-8 border-t border-blue-500/30">
        <div className="bg-blue-800/50 p-4 rounded-2xl">
          <p className="text-sm text-blue-100 font-medium mb-1">Shoshilinch yordam</p>
          <a href="tel:+998711234567" className="text-white font-bold hover:underline">
            +998 71 123 45 67
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;