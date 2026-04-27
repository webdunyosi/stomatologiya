import { Link, useLocation } from 'react-router-dom';
import { Home, Stethoscope, Calendar, UserCircle } from 'lucide-react';

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-between items-center rounded-t-[32px] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
      {[
        { name: 'Asosiy', path: '/', icon: Home },
        { name: 'Xizmatlar', path: '/xizmatlar', icon: Stethoscope },
        { name: 'Qabul', path: '/qabul', icon: Calendar },
        { name: 'Profil', path: '/login', icon: UserCircle },
      ].map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex flex-col items-center gap-1 group"
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            pathname === item.path 
            ? 'bg-blue-600 text-white -translate-y-4 shadow-xl' 
            : 'text-gray-400 group-hover:text-blue-500'
          }`}>
            <item.icon size={24} />
          </div>
          {pathname !== item.path && (
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              {item.name}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;